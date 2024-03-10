"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMobile from "./NavMobile";
import UserNav from "../components/UserNav";

type Props = {};

export default function Navbar({}: Props) {
  const [navOpen, setNavOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="md:block hidden">
        <div className="min-h-20 text-md px-8 flex items-center justify-between border-b">
        <div className="flex items-center justify-between gap-8">
          <div className="">
            <Link href="/">
              <Image src="/img/logo.png" alt="Logo" width={150} height={100} />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <UserNav/>
        </div>
      </div>
      <div className="md:hidden w-full min-h-16 text-md px-4 flex items-center justify-between border-b">
        <div className="">
          <Link href="/">
            <Image src="/img/logo.png" alt="Logo" width={180} height={100} />
          </Link>
        </div>
        <div
          className={`flex flex-col items-center justify-center gap-1 cursor-pointer ${
            navOpen ? "opacity-50" : ""
          }`}
          onClick={handleNav}
        >
          <div className="h-1 w-6 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
        </div>
      </div>
      {navOpen && <NavMobile links={navLinks} />}
    </>
  );
}
