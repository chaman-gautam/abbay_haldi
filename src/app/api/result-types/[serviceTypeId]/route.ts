import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // secure server key
);

export async function GET(
  req: Request,
  { params }: { params: Promise<{ serviceTypeId: string }> },
) {
  try {
    const { serviceTypeId } = await params;

    const { data, error } = await supabaseServer
      .from("result_types")
      .select("*")
      .eq("service_type_id", serviceTypeId)
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Result Types API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
