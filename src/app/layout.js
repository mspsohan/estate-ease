import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EstateEase - Your Simplified Real Estate Solution",
  description: "Streamlining real estate with simplicity: Explore, buy, sell, and manage properties effortlessly with EstateEase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
