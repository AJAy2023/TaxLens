# TaxLens
**AI-powered Financial Document Intelligence**

TaxLens is an AI-powered web application designed to analyze financial documents such as invoices, receipts, payroll statements, and tax-related PDFs. By leveraging modern large language models, TaxLens automates the extraction and structuring of critical financial data, allowing teams to instantly review summaries, identify risks, and parse structured fields without manual data entry.

This project was built as part of the SignalsHQ Frontend Engineer Internship challenge to demonstrate product thinking, AI integration, modern frontend architecture, clean backend design, and professional UI/UX.

---

## Features

- **Upload PDF Documents:** Secure, in-memory processing of financial PDFs.
- **AI-powered Analysis:** Fast, intelligent text extraction and parsing.
- **Structured AI Responses:** Direct translation of unstructured text into strict JSON.
- **Document Summary:** Instant executive overviews of uploaded files.
- **Confidence Score:** AI-determined accuracy scoring.
- **Extracted Financial Fields:** Automated parsing of vendors, amounts, dates, and classifications.
- **Risk Detection:** Automated flagging of missing signatures, missing GST numbers, or compliance anomalies.
- **Recommendations:** Actionable next steps based on document context.
- **Modern Dashboard:** Premium, responsive, and meticulously spaced user interface.
- **Smooth Loading Workflow:** Animated, non-blocking UI states reflecting backend AI processing.

---

## Architecture Flow

Landing Page  &rarr;  Dashboard  &rarr;  Upload PDF  &rarr;  Extract Text  &rarr;  OpenRouter Analysis  &rarr;  Structured JSON  &rarr;  Display Results

---

## Tech Stack

**Frontend**
- React
- Tailwind CSS
- Framer Motion
- React Dropzone
- Axios

**Backend**
- Node.js
- Express
- Multer
- pdf-parse

**AI Intelligence**
- OpenRouter
- GPT-4o Mini 

---

## Project Structure

```text
taxlens/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page layouts (Landing, Dashboard)
│   │   └── services/         # API integration layer
├── backend/                  # Express Node.js application
│   ├── controllers/          # Route controllers
│   ├── routes/               # API endpoint definitions
│   └── services/             # Business logic and AI integration
├── docs/                     # Technical documentation (API, UI, PRD)
└── .agents/                  # Agentic environment configurations
```

---

## Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/taxlens.git
cd taxlens
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=900
OpenRouter=your_openrouter_api_key_here
```
Run the backend server:
```bash
node index.js
```

### 3. Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

---

## Future Improvements

- **Authentication:** Role-based access control for enterprise teams.
- **Document History:** Persistent storage and retrieval of past analysis.
- **Export Reports:** Downloadable CSV and PDF audit reports.
- **Team Collaboration:** Shared workspaces and document annotation.
- **Multi-document Analysis:** Batch processing for end-of-month reconciliations.

---

## Acknowledgements

- **[OpenRouter](https://openrouter.ai/)** for providing a unified and fast API gateway for modern LLMs.
- **[pdf-parse](https://github.com/mehmet-kozan/pdf-parse)** for reliable server-side PDF text extraction.

---

## License

MIT