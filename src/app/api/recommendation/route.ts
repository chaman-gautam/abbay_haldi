import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // secure server key
);

export async function POST(req: Request) {
  try {
    const { serviceTypeId, resultTypeId } = await req.json();

    const { data, error } = await supabaseServer
      .from("service_recommendations")
      .select("*")
      .eq("service_type_id", serviceTypeId)
      .eq("result_type_id", resultTypeId)
      .eq("is_active", true)
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Recommendation API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
