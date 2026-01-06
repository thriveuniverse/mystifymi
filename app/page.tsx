import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
  <h1 className="text-4xl font-bold mb-8">Hello, I'm Mirrie</h1>
  <p className="text-xl text-center max-w-2xl">
    English mum in France • perpetual work in progress • untangling the knotted wool one thought at a time
  </p>
  <p className="mt-8">Site under gentle reconstruction — come back soon ✨</p>
</main>
    </div>
  );
}
