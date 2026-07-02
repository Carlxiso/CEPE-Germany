import { createSupabaseServerClient } from "./auth/supabase-server";
export async function getCommentsByArticle(articleId) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("comments")
    .select(
      "id, comment, date_created, profile:profile_id(full_name, avatar_url)",
    )
    .eq("article_id", articleId)
    .order("date_created", { ascending: false });

  if (error) {
    console.error("Erro ao buscar comentários:", error);
    return [];
  }

  return data ?? [];
}
