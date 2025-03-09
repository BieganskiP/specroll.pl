import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  ContactFormData,
  generateConfirmationEmailHtml,
  generateNotificationEmailHtml,
} from "@/utils/email/templates";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const contactForm: ContactFormData = await request.json();

    // Validate the form data
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      return NextResponse.json(
        { error: "Wymagane pola nie zostały wypełnione" },
        { status: 400 }
      );
    }

    // Get recipient emails from environment variables
    const recipientEmails = process.env.NOTIFICATION_EMAILS?.split(",") || [];
    if (recipientEmails.length === 0) {
      console.error("No recipient emails configured");
      return NextResponse.json(
        { error: "Konfiguracja serwera nieprawidłowa" },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: contactForm.email,
      subject: `Potwierdzenie zgłoszenia: ${contactForm.topic}`,
      html: generateConfirmationEmailHtml(contactForm),
    });

    // Send notification email to administrators
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: recipientEmails.join(","),
      subject: `Nowe zgłoszenie kontaktowe: ${contactForm.topic}`,
      html: generateNotificationEmailHtml(contactForm),
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails", details: (error as Error).message },
      { status: 502 }
    );
  }
}
