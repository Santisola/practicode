import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Navbar } from "./ui/components/Navbar/Navbar";
import { Footer } from "./ui/components/Footer/Navbar/Footer";

// const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practicode",
  description: "Conocé los mejores tips y conceptos de programación y desarrollo web acá!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        <main className="h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
