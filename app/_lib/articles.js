import { createSupabaseServerClient } from "./auth/supabase-server";

/**
 * Procura todos os artigos uma vez no servidor.
 */
export async function getArticles() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("articles")
    .select(
      `
      id, title, content, thumbnail, date_created, views, read_time, slug,
      category:category_id(title),
      author:profile_id(full_name, avatar_url)
      `,
    )
    .order("date_created", { ascending: false });

  if (error) {
    console.error("Erro ao buscar artigos:", error);
    return [];
  }

  return data ?? [];
}
export async function incrementArticleViews(articleId) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.rpc("increment_article_views", {
    article_id: articleId,
  });

  if (error) {
    console.error("Erro ao incrementar views:", error);
    return null;
  }

  return data;
}

export async function getArticleBySlug(slug) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("articles")
    .select(
      `id, title, content, thumbnail, views, read_time, date_created,
             category:category_id(title),
             author:profile_id(full_name, avatar_url, bio)`,
    )
    .eq("slug", slug)
    .maybeSingle();
  return data;
}
