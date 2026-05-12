import { redirect } from "next/navigation";

// import { cookies } from "next/headers";

// import { createClient } from "@supabase/supabase-js";

export default async function DashboardPage() {
  //   const cookieStore = cookies();

  //   const supabase = createClient(
  //     process.env.NEXT_PUBLIC_SUPABASE_URL!,

  //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,

  //     {
  //       global: {
  //         headers: {
  //           Cookie: cookieStore.toString(),
  //         },
  //       },
  //     },
  //   );

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();

  //   // ❌ Not logged in

  //   if (!user) {
  //     redirect("/admin/login");
  //   }

  //   const { data: profile } = await supabase

  //     .from("profiles")

  //     .select("role")

  //     .eq("id", user.id)

  //     .single();

  //   if (profile?.role !== "admin") {
  //     redirect("/admin/login");
  //   }

  // ✅ Logged in admin

  return (
    <div className="p-6 text-gray-900 min-h-[50vh] bg-gray-100 rounded shadow mb-6 justify-center items-center">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">Total Messages</div>

        <div className="bg-white p-6 rounded shadow">Team Members</div>

        <div className="bg-white p-6 rounded shadow">Site Status</div>
      </div>
    </div>
  );
}
