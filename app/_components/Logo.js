import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img
        src="/cepe_logo_black.png"
        alt="CEPE Logo"
        width="200"
        height="100"
      />
      <span className="text-xl font-semibold text-primary-100">
        Coordenação do Ensino Português no Estangeiro
      </span>
    </Link>
  );
}
