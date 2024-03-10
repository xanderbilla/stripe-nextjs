import Link from "next/link";
import React from "react";
import UserNav from "../components/UserNav";

type Props = {
  links: { name: string; href: string }[];
};

export default function NavMobile({ links }: Props) {
  return (
    <div
      className="absolute bottom-0 left-0  bg-white border-r z-50 h-[calc(100vh-4rem)] w-2/3 flex items-center justify-start
    ease-in-out duration-300 transition py-8"
    >
      <div className="h-full w-full flex flex-col items-center justify-between text-lg">
        <div className="flex flex-col items-center justify-center gap-2">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="border-t py-4 w-full flex items-center justify-center gap-2">
          {/* <UserNav/> */}
        </div>
      </div>
    </div>
  );
}
