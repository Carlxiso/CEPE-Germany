import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="hover:text-primary-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-primary-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contactos"
            className="hover:text-primary-400 transition-colors"
          >
            Contactos
          </Link>
        </li>

        <li>
          <Link
            href="/cursos"
            className="hover:text-primary-400 transition-colors"
          >
            Cursos
          </Link>
        </li>

        <li>
          <Link
            href="/faq"
            className="hover:text-primary-400 transition-colors"
          >
            Faq´s
          </Link>
        </li>
      </ul>
    </nav>
  );
}
