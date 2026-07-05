# TaxLens

### AI-powered Financial Document Intelligence

TaxLens is an AI-powered financial document analysis platform that enables users to upload financial PDFs such as invoices, receipts, payroll statements, and tax-related documents for instant AI-driven analysis.

Using modern Large Language Models through OpenRouter, TaxLens extracts structured financial information, generates concise summaries, identifies potential risks, and provides actionable recommendations through a modern dashboard.

This project was built as a submission for the **SignalsHQ Frontend Engineer Internship Challenge** to demonstrate product thinking, AI integration, modern frontend engineering, clean backend architecture, and professional UI/UX.

---

## 🌐 Live Demo

**Application:**  
https://tax-lens-khaki.vercel.app

---

## 🎥 Demo Video

**YouTube (Unlisted):**  
https://www.youtube.com/watch?v=Zb1noN4-cjw

---

## Why TaxLens?

Instead of submitting only my resume, I chose to build a complete AI-powered product inspired by the engineering culture at SignalsHQ.

The objective was to demonstrate:

- Product thinking
- AI-assisted development
- Modern frontend engineering
- Backend API design
- AI integration
- End-to-end product development
- Clean and scalable architecture

---

# Features

- Upload financial PDF documents
- AI-powered financial document analysis
- Automatic PDF text extraction
- Structured JSON response generation
- Executive document summaries
- Confidence score estimation
- Financial field extraction
- Risk detection
- AI-generated recommendations
- Responsive dashboard
- Smooth loading animations
- Clean modern UI

---

# Application Workflow

```text
Landing Page
      │
      ▼
Dashboard
      │
      ▼
Upload Financial PDF
      │
      ▼
Extract PDF Text
      │
      ▼
OpenRouter AI Analysis
      │
      ▼
Structured JSON Response
      │
      ▼
Interactive Dashboard Results
```

---

# Tech Stack

## Frontend

- React
- Tailwind CSS
- Framer Motion
- React Dropzone
- Axios

## Backend

- Node.js
- Express.js
- Multer
- pdf-parse

## AI

- OpenRouter
- GPT-4o Mini

## Deployment

- Vercel
- Render

---

# Project Structure

```text
TaxLens
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │         ├──Dashboard
              ├──Landing
│   │   services
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├──  index.js
│ 
│   
│
├── docs
│   ├── API.md
│   └── PRD.md
│   └── UI.md
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/TaxLens.git
```

---

## Backend

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=900

OpenRouter=YOUR_OPENROUTER_API_KEY

CLIENT_URL=http://localhost:5173
```

Run backend

```bash
npm start
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Create `.env`

```env
VITE_API_URL=http://localhost:900
```

Application runs at

```text
http://localhost:5173
```

---

# Architecture

```text
                React Frontend
                       │
                       │
                 Axios Request
                       │
                       ▼
              Express REST API
                       │
                       ▼
              PDF Text Extraction
                 (pdf-parse)
                       │
                       ▼
                OpenRouter API
                       │
                       ▼
          Structured Financial JSON
                       │
                       ▼
            Interactive Dashboard
```

---

# Future Improvements

- User Authentication
- Document History
- Export Reports
- Team Workspace
- Analytics Dashboard
- Multi-document Analysis
- OCR Support
- Cloud Storage Integration

---

# Acknowledgements

- OpenRouter for providing a unified API for modern LLMs.
- pdf-parse for reliable PDF text extraction.
- React, Express, and the open-source community.

---

# Author

**Ajay**

GitHub: https://github.com/AJAy2023/

LinkedIn: www.linkedin.com/in/ajay-jadhav007

---

> **Note**
>
> TaxLens is a focused MVP built as part of the SignalsHQ Frontend Engineer Internship Challenge. The primary objective was to demonstrate product thinking, AI integration, frontend engineering, backend architecture, and the ability to rapidly build an end-to-end AI-powered application within a limited timeframe.
