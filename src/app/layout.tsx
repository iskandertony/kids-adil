import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/app/components/header";
import {Footer} from "@/app/components/footer";


export const metadata: Metadata = {
  title: "Благотворительность для детей ",
  description: " Бдаготворительный фонд сбора средств для детей с ограниченными возможностями здоровья в Кыргызстане",
    icons: {
    icon: "/logo.png"
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
    <Header/>
        <>{children}</>
    <Footer />
      </body>
    </html>
  );
}
