const express = require('express');
const multer = require('multer');
const analyzeController = require('../controllers/analyze.controller');

const router = express.Router();


const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, 
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

router.post('/', upload.single('document'), analyzeController.analyzeDocument);

module.exports = router;
