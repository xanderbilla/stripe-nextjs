import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-36 md:w-full flex items-center justify-center">
          <Image src="/img/logo.png" alt="Logo" width={300} height={300} />
        </div>
        <div className="text-lg md:text-2xl">Welcome! to the Journey on</div>
        <div className="flex flex-col md:flex-row items-center justify-center py-4 md:py-0 gap-2 md:gap-4">
          <Image className=""
            src="/img/auth-logo.png"
            alt="Auth Logo"
            width={60}
            height={300}
          />
          <span className="md:block hidden text-xl">➕</span>
          <Image className=""
            src="/img/next-logo.png"
            alt="Next Logo"
            width={150}
            height={300}
          />
          <span className="md:block hidden text-xl">➕</span>
          <Image className=""
            src="/img/mongo-logo.png"
            alt="Mongo Logo"
            width={200}
            height={300}
          />
        </div>
      </div>
    </main>
  );
}
