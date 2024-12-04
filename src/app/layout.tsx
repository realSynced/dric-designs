import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dric Designs",
  description: "Dric Designs, a design agency specializing in web design and development.",
};

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
