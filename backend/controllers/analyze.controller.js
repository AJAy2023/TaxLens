const analyzeService = require('../services/analyze.service');

const analyzeDocument = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No document provided. Please upload a PDF.'
      });
    }

    const fileBuffer = req.file.buffer;
    const filename = req.file.originalname;


    const analysisResult = await analyzeService.processAndAnalyzePDF(fileBuffer, filename);

    res.status(200).json({
      success: true,
      data: analysisResult
    });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  analyzeDocument
};
