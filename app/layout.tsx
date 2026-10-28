import type { Metadata } from "next";
import { Lora, Inter, JetBrains_Mono } from "next/font/google";
import Header from "../components/Header";
// import "./globals.css";
import "./tailwind.css";
import "./tokens.css";

const loraSerif = Lora({
  variable: "--font-lora-serif",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reading List",
  description: "Reading List app designed to help users manage their reading list and track their reading progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${loraSerif.variable} ${interSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary">
        <Header />
        {children}
      </body>
    </html>
  );
}
