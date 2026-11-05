'use client';
import Link from "next/link";
export default function Header() {
    return (
        <header className="bg-bg-primary flex flex-row justify-end col-start-3 col-span-10">
            <Link href="/login" className="text-base text-text-primary font-sans p-4 text-primary">Login</Link>
            <Link href="/sign-up" className="text-base text-text-primary p-4 font-sans text-primary">Sign Up</Link>
        </header>
    );
}   