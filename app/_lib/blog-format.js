/** Texto curto */
export function excerpt(html, max = 120) {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, "").trim();
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

/** Data em pt-PT */
export function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** tempo de leitura */
export function readTimeLabel(minutes) {
  if (!minutes) return "";
  return `${minutes} min de leitura`;
}
