import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Footer } from "./ui/components/Footer/Navbar/Footer";
import { Header } from "./ui/components/Header/Header";

// const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ["latin"]
});

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
    <html lang="es">
      <body className={nunito.className}>
        <Header />
        <main className="h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
