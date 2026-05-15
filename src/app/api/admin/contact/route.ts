import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

/* ================= DEFAULT FALLBACK DATA ================= */
const DEFAULT_CONTACT_SETTINGS = {
  business_name: "Abby Haliti Color Studio",
  phone: "+1 (555) 123-4567",
  email: "info@abbyhaliti.com",
  address: "123 Main Street, New York, NY",
  working_hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  instagram_url: "https://instagram.com/abbyhaliti",
  facebook_url: "https://facebook.com/abbyhaliti",
  tiktok_url: "https://tiktok.com/@abbyhaliti",
  youtube_url: "https://youtube.com/@abbyhaliti",
  google_maps_url: "https://maps.google.com",
  contact_heading: "Get in Touch",
  contact_subheading:
    "Have questions or want to book a consultation? Contact us today.",
};

/* ================= GET ================= */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("contact_settings")
      .select("*")
      .limit(1)
      .maybeSingle();

    // If database query fails, return fallback data
    if (error) {
      console.error("Contact Settings API Error:", error);

      return NextResponse.json({
        success: true,
        isFallback: true,
        data: DEFAULT_CONTACT_SETTINGS,
      });
    }

    // If no row exists, return fallback data
    if (!data) {
      return NextResponse.json({
        success: true,
        isFallback: true,
        data: DEFAULT_CONTACT_SETTINGS,
      });
    }

    // Merge database data with defaults
    // Any missing fields are automatically filled
    const mergedData = {
      ...DEFAULT_CONTACT_SETTINGS,
      ...data,
    };

    return NextResponse.json({
      success: true,
      isFallback: false,
      data: mergedData,
    });
  } catch (error) {
    console.error("Unexpected Contact Settings Error:", error);

    return NextResponse.json({
      success: true,
      isFallback: true,
      data: DEFAULT_CONTACT_SETTINGS,
    });
  }
}

/* ================= UPDATE ================= */
export async function PUT(req: Request) {
  try {
    const body = await req.json();

    // Check if a row already exists
    const { data: existing } = await supabase
      .from("contact_settings")
      .select("id")
      .limit(1)
      .maybeSingle();

    let result;

    if (existing?.id) {
      // Update existing row
      result = await supabase
        .from("contact_settings")
        .update(body)
        .eq("id", existing.id);
    } else {
      // Insert new row if table is empty
      result = await supabase.from("contact_settings").insert([
        {
          ...DEFAULT_CONTACT_SETTINGS,
          ...body,
        },
      ]);
    }

    if (result.error) {
      return NextResponse.json(
        {
          success: false,
          error: result.error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contact settings saved successfully.",
    });
  } catch (error) {
    console.error("Contact Settings Update Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 },
    );
  }
}
