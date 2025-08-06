"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/marketing/seo", label: "SEO" },
  { href: "/marketing/content", label: "Content Marketing" },
  { href: "/marketing/email", label: "Email Marketing" },
  { href: "/marketing/social", label: "Social Media" },
  { href: "/marketing/ads", label: "Advertising" },
  { href: "/marketing/analytics", label: "Analytics" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-72 bg-white border-r h-screen sticky top-0 p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">
        Marketing Topics
      </h2>
      <nav className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "block px-4 py-3 rounded-lg text-gray-700 text-lg font-medium",
              "hover:bg-blue-50 hover:text-blue-700 transition-all duration-200",
              pathname === link.href &&
                "bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
