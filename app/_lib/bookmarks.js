import { createSupabaseServerClient } from "./auth/supabase-server";

export async function getBookmarkInfo(articleId) {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { hasBookmarked: false };

  const { data } = await supabase
    .from("bookmarks")
    .select("id")
    .eq("article_id", articleId)
    .eq("profile_id", user.id)
    .maybeSingle();

  return { hasBookmarked: Boolean(data) };
}

export async function getBookmarkedArticles() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("bookmarks")
    .select(
      `
      id,
      date_created,
      article:article_id (
        id, title, content, thumbnail, read_time, slug,
        category:category_id(title)
      )
      `,
    )
    .eq("profile_id", user.id)
    .order("date_created", { ascending: false });

  if (error) {
    console.error("Erro ao buscar guardados:", error);
    return [];
  }

  return (data ?? []).filter((row) => row.article).map((row) => row.article);
}
