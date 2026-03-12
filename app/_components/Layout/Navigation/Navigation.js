"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";
import { useState } from "react";

export default function Navigation() {
  const pathName = usePathname();
  const [openHamburger, setOpenHamburger] = useState(false);

  const toggleMenu = () => setOpenHamburger(!openHamburger);

  const navLinks = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/cursos",
      label: "Cursos",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/contactos",
      label: "Contactos",
    },
    {
      href: "/faq",
      label: "FAQ´S",
    },
  ];

  return (
    <nav className={styles.nav}>
      {/** - Hamburguer - **/}
      <button
        className={`${styles.hamburger} ${openHamburger ? styles.open : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/** - Menu - **/}
      <ul className={`${styles.menu} ${openHamburger ? styles.show : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={pathName === link.href ? styles.active : ""}
              href={link.href}
              onClick={() => setOpenHamburger(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}

        <li className={styles.login}>
          <Link href="/login">Login</Link>
        </li>

        <li className={styles.signup}>
          <Link href="/signup" className={styles.cta}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
