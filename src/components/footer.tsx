import Link from "next/link"

const routes = [
  {
    path: "/privacy-policy",
    name: "Privacy Policy"
  },
  {
    path: "/terms-conditions",
    name: "Terms & Conditions"
  }
]

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 flex justify-between items-center text-xs h-16 px-3 sm:px-9  text-white/25">
      <small className="text-xs">
        &copy; 2030 Iwanna. All rights reserved.
      </small>

      <ul className="flex gap-x-3 sm:gap-x-8 ">
        {routes.map((route) => (
          <li key={route.path} className="hover:text-white/40">
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
