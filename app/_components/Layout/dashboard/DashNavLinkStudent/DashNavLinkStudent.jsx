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
  { href: "/student/painel", label: "Painel", icon: HiOutlineHome },
  {
    href: "/student/posts",
    label: "Posts",
    icon: HiOutlineCalendarDays,
  },
  {
    href: "/student/artigos",
    label: "Artigos",
    icon: HiOutlineHomeModern,
  },
  {
    href: "/student/comments",
    label: "Comentários",
    icon: HiOutlineUsers,
  },
  {
    href: "/student/notifications",
    label: "Notificações",
    icon: HiOutlineCog6Tooth,
  },
  {
    href: "/student/test",
    label: "Diagnóstico Test",
    icon: HiMiniChartBar,
  },
];
export default function DashNavLinkStudent() {
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
