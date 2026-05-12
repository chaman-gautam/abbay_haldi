// import { NextRequest, NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// export async function GET() {
//   try {
//     const { data, error } = await supabase
//       .from("service_recommendations")
//       .select("*")
//       .order("created_at", {
//         ascending: false,
//       });

//     if (error) throw error;

//     return NextResponse.json({
//       success: true,
//       count: (data || []).length,
//       data: data || [],
//     });
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message,
//         count: 0,
//         data: [],
//       },
//       { status: 500 },
//     );
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const {
//       service_type_id,
//       result_type_id,
//       recommended_service,
//       duration_minutes,
//       price,
//     } = await req.json();

//     const { data, error } = await supabase
//       .from("service_recommendations")
//       .insert([
//         {
//           service_type_id,
//           result_type_id,
//           recommended_service,
//           duration_minutes: Number(duration_minutes),
//           price: Number(price),
//         },
//       ])
//       .select()
//       .single();

//     if (error) throw error;

//     return NextResponse.json({
//       success: true,
//       data,
//     });
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message,
//       },
//       { status: 500 },
//     );
//   }
// }

// export async function DELETE(req: NextRequest) {
//   try {
//     const { id } = await req.json();

//     const { error } = await supabase
//       .from("service_recommendations")
//       .delete()
//       .eq("id", id);

//     if (error) throw error;

//     return NextResponse.json({
//       success: true,
//     });
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message,
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
        recommended_service: "Balayage",
      },
    ],
  });
}
