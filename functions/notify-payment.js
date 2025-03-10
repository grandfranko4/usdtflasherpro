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
    const { product, amount, paymentMethod, customerInfo, adminEmail, appPassword } = data;

    // Validate required fields
    if (!product || !amount || !paymentMethod || !customerInfo || !adminEmail || !appPassword) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_ADDRESS || adminEmail,
        pass: process.env.EMAIL_PASSWORD || appPassword
      }
    });

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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Payment notification sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending payment notification:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send payment notification', details: error.message }),
    };
  }
};
