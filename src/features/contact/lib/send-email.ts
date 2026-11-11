import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export interface ContactFormData {
  title: string;
  label: string;
  name: string;
  email: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: ContactFormData) => data)
  .handler(async ({ data }): Promise<SendEmailResult> => {
    try {
      // Validate input
      if (!data.title || !data.name || !data.email || !data.message) {
        return {
          success: false,
          error: "All fields are required",
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return {
          success: false,
          error: "Invalid email address",
        };
      }

      // Get email configuration from environment variables
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = process.env.SMTP_PORT;
      const smtpUser = process.env.SMTP_USER;
      const smtpPassword = process.env.SMTP_PASSWORD;
      const recipientEmail = process.env.CONTACT_EMAIL || "simanzler@gmail.com";

      if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
        return {
          success: false,
          error: "Email service is not configured. Please contact the administrator.",
        };
      }

      // Create transporter
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort, 10),
        secure: parseInt(smtpPort, 10) === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      });

      const title = escapeHtml(data.title);
      const label = escapeHtml(data.label);
      const name = escapeHtml(data.name);
      const email = escapeHtml(data.email);
      const message = escapeHtml(data.message).replace(/\n/g, "<br>");

      // Send email
      await transporter.sendMail({
        from: `"${data.name.replace(/"/g, "")}" <${smtpUser}>`,
        replyTo: data.email,
        to: recipientEmail,
        subject: `[${data.label}] ${data.title}`,
        text: `Title: ${data.title}\nLabel: ${data.label}\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">${title}</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Label:</strong> ${label}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            </div>
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
        `,
      });

      return {
        success: true,
      };
    } catch (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }
  });
