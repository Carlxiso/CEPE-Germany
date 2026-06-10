import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "./supabase-server";
import { ROLE_HOME } from "./roles";

export { ROLE_HOME };

export async function getCurrentUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  return {
    user,
    role: profile?.role ?? null,
    name: user.user_metadata?.full_name ?? user.email,
  };
}

export async function requireRole(role) {
  const current = await getCurrentUser();

  if (!current) redirect("/auth/login");
  if (current.role !== role) {
    redirect(ROLE_HOME[current.role] ?? "/auth/login");
  }

  return current;
}
