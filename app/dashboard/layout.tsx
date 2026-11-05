"use client";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[15rem_repeat(11,_1fr)] grid-rows-[50px_repeat(5,_1fr)] h-screen">
            <Navbar />
            <Header />
            <main>{children}</main>
        </div>
    );
}