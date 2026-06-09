
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

/* =========================
   CREATE BOOKING
========================= */
export async function POST(req: Request) {
  try {
    const data = await req.json();

    /* 1. Save booking to Supabase (critical step) */
    const { error } = await supabase.from("bookings").insert([
      {
        service_type: data.serviceType,
        result_type: data.resultType,
        recommended_service: data.recommendedService,
        appointment_date: data.appointmentDate,
        time_slot: data.timeSlot,
        name: data.name,
        email: data.email,
        phone: data.phone,
        add_on: data.addOn,
        status: "pending",
      },
    ]);

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Failed to save booking.",
        },
        { status: 500 },
      );
    }

    /* 2. Send emails (non-critical step)
       If email fails, booking should still be considered successful.
    */
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      console.log("Starting email send...");

      /* Email to owner */
      await transporter.sendMail({
        from: `"Booking" <${process.env.SMTP_USER}>`,
        to: process.env.OWNER_EMAIL || process.env.SMTP_USER || "chaman12gautam12@gmail.com",
        replyTo: data.email,
        subject: "New Booking Received",
        html: `
          <h2>New Booking Received</h2>

          <p><strong>Service Type:</strong> ${data.serviceType}</p>
          <p><strong>Desired Result:</strong> ${data.resultType}</p>
          <p><strong>Recommended Service:</strong> ${data.recommendedService}</p>
          <p><strong>Appointment Date:</strong> ${data.appointmentDate}</p>
          <p><strong>Time Slot:</strong> ${data.timeSlot}</p>

          <hr />

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Add-on:</strong> ${data.addOn || "No"}</p>
        `,
      });

      /* Auto reply to customer */
      await transporter.sendMail({
        from: `"Abby Haliti Color Studio" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: "Your Booking Request Has Been Received",
        html: `
          <p>Hi ${data.name},</p>

          <p>Thank you for your booking request.</p>

          <p>We have received the following details:</p>

          <ul>
            <li><strong>Service:</strong> ${data.recommendedService}</li>
            <li><strong>Date:</strong> ${data.appointmentDate}</li>
            <li><strong>Preferred Time:</strong> ${data.timeSlot}</li>
          </ul>

          <p>
            Our team will contact you shortly to confirm your appointment.
          </p>

          <p>
            Best regards,<br />
            Abby Haliti Color Studio
          </p>
        `,
      });

      console.log("Emails sent successfully.");
    } catch (emailError) {
      // Do NOT fail the booking if email sending fails
      console.error("Email sending failed:", emailError);
    }

    /* 3. Always return success if booking was saved */
    return NextResponse.json({
      success: true,
      message: "Booking saved successfully.",
    });
  } catch (error) {
    console.error("Booking API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 },
    );
  }
}

/* =========================
   GET ALL BOOKINGS
========================= */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Admin Bookings API Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      data: data || [],
    });
  } catch (error) {
    console.error("Admin Bookings API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 },
    );
  }
}
