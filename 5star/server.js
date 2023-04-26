const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000; // or any other port you prefer

// Middleware to parse request body as JSON
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/test', (req, res) =>{
  res.send("Welcome");
});
// Route to handle sending email
app.post('/api/send-email', async (req, res) => {
  const { name, tel,email, message } = req.body;

  // Create a Nodemailer transporter with your email provider's SMTP settings
  let transporter = nodemailer.createTransport({
    host: 'auth.smtp.1and1.co.uk',
    port: 465,
    secure: true,
    auth: {
      user: 'info@heartwoodcare.com', // replace with your email address
      pass: 'HWC@123!', // replace with your email password
    },
  });

  // Send email
  try {
    await transporter.sendMail({
      from: 'info@heartwoodcare.com', // replace with your email address
      to: 'arokiyan@heartwoodcare.org',
      subject: 'REact email test',
      text: message,
    });
    console.log('Email sent:');
    res.sendStatus(200);
  } catch (error) {
    console.error('Failed to send email:', error);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
