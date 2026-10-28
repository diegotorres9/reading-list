'use client';
import Link from "next/link";
export default function Header() {
    return (
        <header className="bg-primary">
            <Link href="/login" className="text-lg font-sans p-4 text-primary">Login</Link>
            <Link href="/sign-up" className="text-lg p-4 font-sans text-primary">Sign Up</Link>
        </header>
    );
}   