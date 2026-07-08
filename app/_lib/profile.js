import { createSupabaseServerClient } from "./auth/supabase-server";

/**
 * Devolve o perfil do utilizador atual
 */
export async function getMyProfile() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, full_name, avatar_url, bio, role")
    .eq("id", user.id)
    .single();

  return {
    id: user.id,
    email: user.email,
    full_name: profile?.full_name ?? "",
    avatar_url: profile?.avatar_url ?? "",
    bio: profile?.bio ?? "",
    role: profile?.role ?? null,
  };
}
