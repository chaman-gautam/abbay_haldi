import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function GET(req: NextRequest) {
  try {
    const date = req.nextUrl.searchParams.get("date");

    if (!date) {
      return NextResponse.json(
        {
          success: false,
          error: "Date is required.",
        },
        { status: 400 },
      );
    }

    /* 1. Get all active booking slots */
    const { data: slots, error: slotsError } = await supabase
      .from("booking_slots")
      .select("id, time_slot, max_bookings, sort_order")
      .eq("is_active", true)
      .order("sort_order", {
        ascending: true,
      });

    if (slotsError) {
      throw slotsError;
    }

    /* 2. Count bookings for this date */
    const { data: bookings, error: bookingsError } = await supabase
      .from("bookings")
      .select("time_slot")
      .eq("appointment_date", date);

    if (bookingsError) {
      throw bookingsError;
    }

    /* 3. Build availability */
    const availableSlots = (slots || [])
      .map((slot) => {
        const bookedCount = (bookings || []).filter(
          (b) => b.time_slot === slot.time_slot,
        ).length;

        const remaining = slot.max_bookings - bookedCount;

        return {
          id: slot.id,
          time_slot: slot.time_slot,
          max_bookings: slot.max_bookings,
          booked_count: bookedCount,
          remaining,
          available: remaining > 0,
        };
      })
      .filter((slot) => slot.available);

    /* 4. Return only available slots */
    return NextResponse.json({
      success: true,
      data: availableSlots,
    });
  } catch (error) {
    console.error("Available Slots API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 },
    );
  }
}
