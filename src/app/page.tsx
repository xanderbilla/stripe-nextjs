import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="">
        <Image src="/img/logo.png" alt="Logo" width={300} height={300} />
      </div>
      <div className="text-4xl">Welcome! to the Journey on</div>
      <div className="flex items-center justify-center gap-4">
        <Image
          src="/img/auth-logo.png"
          alt="Auth Logo"
          width={100}
          height={300}
        />
        <span className="text-xl">➕</span>
        <Image
          src="/img/next-logo.png"
          alt="Next Logo"
          width={200}
          height={300}
        />
        <span className="text-xl">➕</span>
        <Image
          src="/img/mongo-logo.png"
          alt="Mongo Logo"
          width={300}
          height={300}
        />
      </div>
    </main>
  );
}
