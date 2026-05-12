import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // secure server key
);

/* ================= GET ================= */
export async function GET() {
  const { data, error } = await supabase
    .from("contact_settings")
    .select("*")
    .limit(1)
    .maybeSingle();

  //   console.log("Supabase Error:", error);
  //   console.log("Supabase Data:", data);

  if (error) return NextResponse.json({ error }, { status: 500 });

  return NextResponse.json(data);
}

/* ================= UPDATE ================= */
export async function PUT(req: Request) {
  const body = await req.json();

  const { error } = await supabase
    .from("contact_settings")
    .update(body)
    .neq("id", "00000000-0000-0000-0000-000000000000"); // update first row

  if (error) return NextResponse.json({ error }, { status: 500 });

  return NextResponse.json({ success: true });
}
