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
    const { product, amount, paymentMethod, customerInfo } = data;

    // Get email credentials from environment variables or fallback to hardcoded values
    const adminEmail = process.env.EMAIL_ADDRESS || 'mikebtcretriever@gmail.com';
    const appPassword = process.env.EMAIL_PASSWORD || 'mysi okbf jzwy ohya';

    // Validate required fields
    if (!product || !amount || !paymentMethod || !customerInfo) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    console.log('Creating email transporter for payment notification...');
    
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: adminEmail,
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
      `,
      headers: {
        'X-Priority': '1', // High priority
        'Importance': 'high'
      }
    };

    console.log('Sending payment notification email...');
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Payment notification email sent successfully:', info.response);
    console.log('Message ID:', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Payment notification sent successfully',
        messageId: info.messageId
      }),
    };
  } catch (error) {
    console.error('Error sending payment notification:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send payment notification', 
        details: error.message,
        stack: error.stack
      }),
    };
  }
};
