const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path'); // Add this line

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Create a transporter object using your Gmail account
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to send OTP emails
app.post('/sendotp', (req, res) => {
  // ... (Rest of the code remains the same)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
