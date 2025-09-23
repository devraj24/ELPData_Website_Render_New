import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  interestArea?: string;
  message: string;
}

// Email SMTP configuration with fallbacks
const createTransporter = () => {
  // Try Gmail first if available, then Brevo
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    console.log('Using Gmail SMTP configuration');
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
  }
  
  // Fallback to Brevo
  console.log('Using Brevo SMTP configuration');
  return nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_EMAIL || 'your-brevo-login-email',
      pass: process.env.BREVO_API_KEY || 'your-brevo-api-key'
    }
  });
};

export async function sendContactEmail(formData: ContactFormData, recipientEmail: string = 'info@elpdata.com') {
  try {
    const transporter = createTransporter();

    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        <p style="color: white; margin: 5px 0;">ELP Data Intelligence Platform</p>
      </div>
      
      <div style="padding: 20px; background-color: #f9fafb;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
          ${formData.phone ? `<p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>` : ''}
        </div>

        ${formData.budget || formData.timeline || formData.interestArea ? `
        <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Project Details</h2>
        <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          ${formData.budget ? `<p><strong>Budget Range:</strong> ${formData.budget}</p>` : ''}
          ${formData.timeline ? `<p><strong>Timeline:</strong> ${formData.timeline}</p>` : ''}
          ${formData.interestArea ? `<p><strong>Interest Area:</strong> ${formData.interestArea}</p>` : ''}
        </div>
        ` : ''}

        <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Message</h2>
        <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
        </div>

        <div style="background: #1e40af; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="margin: 0;"><strong>Next Steps:</strong></p>
          <p style="margin: 5px 0;">Reply directly to this email or call ${formData.phone ? formData.phone : 'the contact number'} to follow up on this inquiry.</p>
        </div>
      </div>
      
      <div style="background: #374151; color: white; padding: 15px; text-align: center;">
        <p style="margin: 0; font-size: 12px;">
          This email was generated from the ELP Data contact form submission.<br>
          Submitted on ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
  `;

  const textContent = `
New Contact Form Submission - ELP Data

CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}
${formData.phone ? `Phone: ${formData.phone}` : ''}

${formData.budget || formData.timeline || formData.interestArea ? `
PROJECT DETAILS:
${formData.budget ? `Budget Range: ${formData.budget}` : ''}
${formData.timeline ? `Timeline: ${formData.timeline}` : ''}
${formData.interestArea ? `Interest Area: ${formData.interestArea}` : ''}
` : ''}

MESSAGE:
${formData.message}

---
This inquiry was submitted on ${new Date().toLocaleString()}
Reply directly to this email to respond to the customer.
  `;

  const mailOptions = {
    from: `"ELP Data Contact Form" <${process.env.BREVO_EMAIL || 'noreply@elpdata.com'}>`,
    to: recipientEmail,
    replyTo: formData.email,
    subject: `New Inquiry from ${formData.name} - ${formData.company || 'ELP Data Contact'}`,
    text: textContent,
    html: htmlContent
  };

  try {
    console.log('Attempting to send email with config:', {
      host: 'smtp-relay.brevo.com',
      port: 587,
      user: process.env.BREVO_EMAIL ? 'SET' : 'NOT SET',
      pass: process.env.BREVO_API_KEY ? 'SET' : 'NOT SET'
    });
    
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    console.error('Full error details:', JSON.stringify(error, null, 2));
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
  } catch (outerError) {
    console.error('Email service completely failed:', outerError);
    return { success: false, error: 'Email service unavailable' };
  }
}

export async function sendConfirmationEmail(formData: ContactFormData) {
  const transporter = createTransporter();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Thank You for Contacting ELP Data</h1>
      </div>
      
      <div style="padding: 20px; background-color: #f9fafb;">
        <p>Dear ${formData.name},</p>
        
        <p>Thank you for reaching out to ELP Data Intelligence. We have received your inquiry and our team will review your requirements shortly.</p>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #1e40af;">
          <h3 style="margin-top: 0; color: #1e40af;">What happens next?</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Our specialists will review your inquiry within 24 hours</li>
            <li>We'll contact you to discuss your specific requirements</li>
            <li>We'll provide a customized solution proposal</li>
          </ul>
        </div>

        <div style="background: #1e40af; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="margin: 0;"><strong>Need immediate assistance?</strong></p>
          <p style="margin: 5px 0;">Call us at +1 (307) 224-2324 or email info@elpdata.com</p>
        </div>

        <p>Best regards,<br>
        <strong>The ELP Data Team</strong><br>
        Enterprise Technology Intelligence</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"ELP Data" <${process.env.BREVO_EMAIL || 'info@elpdata.com'}>`,
    to: formData.email,
    subject: 'Thank you for your inquiry - ELP Data Intelligence',
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Confirmation email failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}