import Link from "next/link";
import React from "react";

type Props = {};

export default function UserNav({}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
      <Link className="hover:bg-black/10 font-medium rounded-md px-4 py-2" href="/login">Login</Link>
      <Link className="bg-black/90 text-white rounded-md px-4 py-2" href="/register">Register</Link>
    </div>
  );
}
