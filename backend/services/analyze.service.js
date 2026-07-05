const { PDFParse } = require('pdf-parse');
const axios = require('axios');

/**
 * Extracts text from a PDF buffer and analyzes via OpenRouter API.
 */
const processAndAnalyzePDF = async (fileBuffer, filename) => {
  let parser = null;
  try {
    // 1. Extract text using v2 class API
    parser = new PDFParse({ data: fileBuffer });
    const resultText = await parser.getText();
    const extractedText = resultText.text;
    
    const resultInfo = await parser.getInfo();
    const numPages = resultInfo.total || 1;

    await parser.destroy();
    parser = null;

    console.log(`Successfully extracted ${extractedText.length} characters from ${filename}`);
    
    const OPENROUTER_API_KEY = process.env.OpenRouter;
    if (!OPENROUTER_API_KEY) {
      throw new Error("OpenRouter API key is missing.");
    }

    // 2. Call AI API
    const systemPrompt = `You are a financial AI assistant. Analyze the document and return ONLY a valid JSON object matching this structure exactly (no markdown formatting, no code blocks):
{
  "summary": {
    "text": "A brief 2-sentence summary of the document.",
    "confidence": 95,
    "risk": "Low"
  },
  "extractedFields": [
    { "label": "Vendor", "value": "Name or N/A" },
    { "label": "Amount", "value": "Amount or N/A" },
    { "label": "Invoice Date", "value": "Date or N/A" },
    { "label": "Document Type", "value": "Type or N/A" },
    { "label": "Tax Year", "value": "Year or N/A" }
  ],
  "issues": ["List any missing signatures, missing GST, or anomalies. If none, leave empty."],
  "recommendations": ["List action items for the reviewer."]
}`;

    const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Document Text:\n${extractedText.substring(0, 6000)}` }
      ]
    }, {
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    let aiContent = response.data.choices[0].message.content;
    
    // Clean markdown if present
    if (aiContent.startsWith("\`\`\`json")) {
      aiContent = aiContent.replace(/\`\`\`json\n?/, "").replace(/\`\`\`$/, "");
    }
    
    const parsedData = JSON.parse(aiContent.trim());

    // 3. Return structured Response
    return {
      metadata: {
        filename,
        pages: numPages,
        processedAt: new Date().toISOString()
      },
      ...parsedData
    };
  } catch (error) {
    console.error("Analysis Error:", error.response?.data || error.message);
    throw new Error(`Failed to process PDF: ${error.message}`);
  } finally {
    if (parser) {
      try { await parser.destroy(); } catch(e) {}
    }
  }
};

module.exports = {
  processAndAnalyzePDF
};
