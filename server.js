const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(compression()); // Add compression middleware

// Create a transporter for sending emails
const createTransporter = (email, password) => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: email,
      pass: password
    },
    debug: true // Enable debugging
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message, recipient, appPassword } = req.body;
    
    if (!recipient || !appPassword) {
      return res.status(400).json({ error: 'Missing recipient email or app password' });
    }

    const transporter = createTransporter(recipient, appPassword);
    
    // Email content
    const mailOptions = {
      from: recipient,
      to: recipient,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Payment notification endpoint
app.post('/api/notify-payment', async (req, res) => {
  try {
    const { product, amount, paymentMethod, customerInfo, adminEmail, appPassword } = req.body;
    
    if (!adminEmail || !appPassword) {
      return res.status(400).json({ error: 'Missing admin email or app password' });
    }

    const transporter = createTransporter(adminEmail, appPassword);
    
    // Email content
    const mailOptions = {
      from: adminEmail,
      to: adminEmail,
      subject: `New Payment: ${product}`,
      html: `
        <h2>New Payment Received</h2>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <h3>Customer Information:</h3>
        <p><strong>Name:</strong> ${customerInfo.name}</p>
        <p><strong>Email:</strong> ${customerInfo.email}</p>
        <p><strong>Phone:</strong> ${customerInfo.phone || 'Not provided'}</p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true, message: 'Payment notification sent successfully' });
  } catch (error) {
    console.error('Error sending payment notification:', error);
    res.status(500).json({ error: 'Failed to send payment notification', details: error.message });
  }
});

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Compression enabled for better performance`);
});
