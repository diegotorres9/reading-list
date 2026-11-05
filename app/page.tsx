"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-whitesm:items-start">
        <h1 className="font-serif text-text-primary text-3xl">Welcome to Bookshelf</h1>
        <div>
          <Link href="/login" className="text-base text-text-primary font-sans p-4">Login</Link>
          <Link href={"/signup"} className="text-base text-text-primary font-sans p-4">Signup</Link>
        </div>
      </main>
    </div>
  );
}
