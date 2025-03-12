const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    const { name, email, phone, subject, message } = data;

    // Get email credentials from environment variables or fallback to hardcoded values
    const recipient = process.env.EMAIL_ADDRESS || 'mikebtcretriever@gmail.com';
    const appPassword = process.env.EMAIL_PASSWORD || 'mysi okbf jzwy ohya';

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    console.log('Creating email transporter...');
    
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: recipient,
        pass: appPassword
      },
      debug: true, // Enable debugging
      logger: true // Log to console
    });

    console.log('Verifying connection...');
    
    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('Server is ready to take our messages');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'SMTP connection verification failed', details: verifyError.message }),
      };
    }

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
      `,
      headers: {
        'X-Priority': '1', // High priority
        'Importance': 'high'
      }
    };

    console.log('Sending email...');
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    console.log('Message ID:', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId
      }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email', 
        details: error.message,
        stack: error.stack
      }),
    };
  }
};
