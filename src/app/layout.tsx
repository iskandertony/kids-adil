import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Благотворительность для детей ",
  description: " Бдаготворительный фонд сбора средств для детей с ограниченными возможностями здоровья в Кыргызстане",
    icons: {
    icon: "./logo.png"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`Avenir Next Cyr`}
      >
        {children}
      </body>
    </html>
  );
}
