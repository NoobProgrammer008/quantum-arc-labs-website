import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you (company)
    const mailOptionsToCompany = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your company email
      subject: `🚀 New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
              <p>Someone reached out via your website!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              ${phone ? `
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your Quantum Arc Labs contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply email to the user
    const mailOptionsToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Quantum Arc Labs! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .button { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Thank You, ${name}!</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              
              <p>Thank you for reaching out to Quantum Arc Labs! We've received your message and our team will review it shortly.</p>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team will review your inquiry within 24 hours</li>
                <li>We'll get back to you via email at: <strong>${email}</strong></li>
                <li>If urgent, feel free to call us directly</li>
              </ul>
              
              <p>In the meantime, feel free to explore our website to learn more about our services and recent projects.</p>
              
              <p>Best regards,<br>
              <strong>The Quantum Arc Labs Team</strong></p>
              
              <div style="text-align: center;">
                <a href="https://quantumarclabs.com" class="button" style="color: white;">Visit Our Website</a>
              </div>
            </div>
            <div class="footer">
              <p>Quantum Arc Labs | Building the Future of Software</p>
              <p>quantumarc.labs@gmail.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToCompany);
    await transporter.sendMail(mailOptionsToUser);

    return Response.json({ 
      success: true,
      message: "Email sent successfully" 
    });

  } catch (error) {
    console.error("Email sending failed:", error);
    return Response.json(
      { 
        success: false, 
        error: "Failed to send email",
        details: error.message 
      },
      { status: 500 }
    );
  }
}