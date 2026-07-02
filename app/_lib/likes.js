import { createSupabaseServerClient } from "./auth/supabase-server";

export async function getLikeInfo(articleId) {
  const supabase = await createSupabaseServerClient();

  const { count } = await supabase
    .from("likes")
    .select("*", { count: "exact", head: true })
    .eq("article_id", articleId);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let hasLiked = false;
  if (user) {
    const { data } = await supabase
      .from("likes")
      .select("id")
      .eq("article_id", articleId)
      .eq("profile_id", user.id)
      .maybeSingle();
    hasLiked = Boolean(data);
  }

  return { count: count ?? 0, hasLiked };
}
