import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="w-full min-h-[70vh] flex flex-col items-center justify-center gap-4">
        <div className="text-2xl font-medium">Login your Account!</div>
      <div className="border shadow-sm p-12 rounded-lg w-[400px]">
        <form
          action=""
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            className="w-full border px-2 py-2 rounded-md"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            className="w-full border px-2 py-2 rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button className="w-full bg-black/90 text-white rounded-md px-4 py-2">
            Login
          </button>
        </form>
        <div className="py-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 font-medium">
            Create one
          </Link>
        </div>
      </div>
    </main>
  );
}
