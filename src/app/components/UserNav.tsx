import Link from "next/link";
import React from "react";

type Props = {};

export default function UserNav({}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center text-md justify-center gap-2 md:gap-4">
      <Link className="w-52 md:w-24 flex items-center justify-center border border-bg-black font-medium rounded-md px-4 py-2" href="/login">Login</Link>
      <Link className="w-52 md:w-24 flex items-center justify-center bg-black/90 text-white rounded-md px-4 py-2" href="/register">Register</Link>
    </div>
  );
}
