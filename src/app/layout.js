import { Inter } from "next/font/google";
import "./globals.css";
import Metadata from "@/components/Metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dolar App",
  description: "Dolar App - Coded by Livio Reinoso - Dolar info by CriptoYa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Metadata/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
