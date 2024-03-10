import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  const Navlinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full md:min-h-28 min-h-24 px-8 flex flex-col items-center justify-center gap-2 text-sm md:text-base font-semibold border-t">
      <div className="flex items-center justify-center gap-4">
        {Navlinks.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="w-full flex items-center justify-center text-center">
        Copyright &copy; {new Date().getFullYear()} | All Rights Reserved
      </div>
    </div>
  );
}
