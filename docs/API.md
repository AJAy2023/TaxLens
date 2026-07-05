# API Documentation

## POST /api/analyze

Uploads a financial document and returns AI analysis.

### Request

multipart/form-data

Field:

file

---

### Response

```json
{
  "documentType": "Invoice",
  "summary": "Invoice appears valid.",
  "confidence": 97,
  "risk": "Low",
  "issues": [],
  "recommendations": [],
  "extractedFields": {
    "vendor": "ABC Pvt Ltd",
    "amount": "₹18,000",
    "invoiceDate": "2026-07-01"
  }
}
```

---

## Health Check

GET /

Returns

```
API Running
```