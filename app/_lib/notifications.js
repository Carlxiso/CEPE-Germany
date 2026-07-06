import { createSupabaseServerClient } from "./auth/supabase-server";

export async function getNotifications({ limit = 20 } = {}) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("notifications")
    .select(
      `
      id, type, is_read, created_at,
      article:article_id (title, slug),
      actor:actor_id (full_name, avatar_url)
      `,
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Erro ao buscar notificações:", error);
    return [];
  }

  return data ?? [];
}
