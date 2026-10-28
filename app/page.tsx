"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-whitesm:items-start">
        <h1 className="font-serif text-primary">Welcome to the Reading List App!</h1>
      </main>
    </div>
  );
}
