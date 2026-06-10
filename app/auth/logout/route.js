import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/app/_lib/auth/supabase-server";

export async function POST(request) {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL("/auth/login", request.url), {
    status: 303,
  });
}
