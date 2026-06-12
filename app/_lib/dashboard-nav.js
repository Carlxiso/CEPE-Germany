export const DASHBOARD_NAV = {
  admin: [
    { href: "/admin", label: "Painel", icon: "home" },
    { href: "/admin/utilizadores", label: "Utilizadores", icon: "users" },
    { href: "/admin/blog", label: "Blog", icon: "news" },
    { href: "/admin/comentarios", label: "Comentários", icon: "comments" },
    { href: "/admin/aprovacoes", label: "Aprovações", icon: "check" },
    { href: "/admin/analytics", label: "Analytics", icon: "chart" },
  ],

  student: [
    { href: "/student", label: "Painel", icon: "home" },
    { href: "/student/posts", label: "Posts", icon: "document" },
    { href: "/student/articles", label: "Artigos", icon: "news" },
    { href: "/student/comments", label: "Comentários", icon: "comments" },
    { href: "/student/notifications", label: "Notificações", icon: "bell" },
    {
      href: "/student/diagnosticTest",
      label: "Teste Diagnóstico",
      icon: "test",
    },
  ],

  teacher: [
    { href: "/teacher", label: "Painel", icon: "home" },
    {
      href: "/teacher/gestao-academica",
      label: "Gestão Académica",
      icon: "academic",
    },
    { href: "/teacher/documentos", label: "Documentos", icon: "document" },
    { href: "/teacher/submissoes", label: "Submissões", icon: "check" },
  ],

  coordinator: [],
};
