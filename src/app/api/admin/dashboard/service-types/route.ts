import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// GET all service types
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("service_types")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      count: (data || []).length,
      data: data || [],
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        count: 0,
        data: [],
      },
      { status: 500 },
    );
  }
}

// CREATE
export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();

    const { data, error } = await supabase
      .from("service_types")
      .insert([
        {
          name,
          is_active: true,
          sort_order: 999,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}

// DELETE
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    const { error } = await supabase
      .from("service_types")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
