"use client"

import Link from "next/link";
import Logo from "./logo";
import clsx from "clsx";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "All Events",
    path: "/events/all"
  }
]

export default function Header() {
  const activePathName = usePathname()
  return (
    <header className="flex text-sm items-center justify-between px-3 sm:px-9 border-b border-white/10 h-14">
      <Link href="/">
         <Logo />
      </Link>
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full">
          {routes.map((route) => (
            <li key={route.path} className={clsx("hover:text-white transition items-center relative flex", {
              "text-white": activePathName === route.path,
              "text-white/50": activePathName !== route.path,
          })}>
              <Link href={route.path}> {route.name} </Link>
              {
                activePathName === route.path && <motion.div layoutId="header-active-link" className="h-1 bg-accent absolute w-full bottom-0"></motion.div>
              }
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
