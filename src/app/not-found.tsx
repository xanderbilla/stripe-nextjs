import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
        <Image src="/img/logo.png" alt="Logo" width={300} height={300} />
      <div className="text-xl "><span className="text-8xl font-bold text-indigo-950">404 |</span> Page Not Found</div>
    </main>
  );
}
