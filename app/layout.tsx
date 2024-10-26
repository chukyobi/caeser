import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from 'react';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Caeser Nigeria",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
        {/* Navbar */}
        <Header /> {/* Use Header Component */}

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <Footer /> {/* Use Footer Component */}
      </body>
    </html>
  );
}
