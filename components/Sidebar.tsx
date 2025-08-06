"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MainBrandLogo from "./MainBrandLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/seo", label: "SEO" },
  { href: "/content", label: "Content Marketing" },
  { href: "/email", label: "Email Marketing" },
  { href: "/social", label: "Social Media" },
  { href: "/ads", label: "Advertising" },
  { href: "/analytics", label: "Analytics" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-72 bg-white border-r h-screen sticky top-0 p-6 shadow-sm flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">
        Marketing Topics
      </h2>
      <nav className="flex-1 overflow-y-auto space-y-1">
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
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
    </aside>
  );
}
