import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // site owner email
        pass: process.env.SMTP_PASS, // app password
      },
    });

    // ✅ Email content
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.SMTP_USER, // owner receives mail
      replyTo: email, // reply goes to user
      subject: subject || "New Contact Form Submission",
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    await transporter.sendMail({
      to: email,
      subject: "We received your message",
      text: "Thanks for contacting us. We will respond shortly.",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 },
    );
  }
}
