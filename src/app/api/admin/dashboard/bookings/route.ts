// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// export async function GET() {
//   try {
//     // Count all bookings
//     const { count, error: countError } = await supabase
//       .from("bookings")
//       .select("*", {
//         count: "exact",
//         head: true,
//       });

//     if (countError) throw countError;

//     // Fetch all bookings
//     const { data, error: dataError } = await supabase
//       .from("bookings")
//       .select("*")
//       .order("created_at", {
//         ascending: false,
//       });

//     if (dataError) throw dataError;

//     return NextResponse.json({
//       success: true,
//       count: count || 0,
//       recent: (data || []).slice(0, 5),
//       data: data || [],
//     });
//   } catch (error: any) {
//     console.error("Admin Bookings API Error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message,
//         count: 0,
//         recent: [],
//         data: [],
//       },
//       { status: 500 },
//     );
//   }
// }
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
      },
    ],
    count: 1,
    recent: [
      {
        id: "1",
        name: "John Doe",
      },
    ],
  });
}
