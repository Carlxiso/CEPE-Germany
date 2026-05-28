import { Fragment } from "react";
import Link from "next/link";
import styles from "@/app/(dashboard)/dashboard.module.css";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
  HiMiniChartBar,
} from "react-icons/hi2";

const navItems = [
  { href: "/admin/painel", label: "Painel", icon: HiOutlineHome },
  {
    href: "/admin/utilizadores",
    label: "Utilizadores",
    icon: HiOutlineCalendarDays,
  },
  {
    href: "/admin/artigos",
    label: "Artigos",
    icon: HiOutlineHomeModern,
  },
  {
    href: "/admin/comentarios",
    label: "Comentários",
    icon: HiOutlineUsers,
  },
  {
    href: "/admin/analytics",
    label: "Analytics",
    icon: HiOutlineCog6Tooth,
  },
  {
    href: "/admin/aprovacoes",
    label: "Aprovações",
    icon: HiMiniChartBar,
  },
];
export default function DashNavLink() {
  return (
    <nav className={styles.nav}>
      <ul>
        {navItems.map((item) => (
          <Fragment key={item.href}>
            <li>
              <Link href={item.href} className={styles.navLink}>
                <span className={styles.icon}>
                  {item.icon && <item.icon />}
                </span>
                {item.label}
              </Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
