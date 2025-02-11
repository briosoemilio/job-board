import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { DataProvider } from "@/core/context/DataContext";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Board",
  description: "Job Board listing project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${merriweather.variable} font-sans`}
      >
        <DataProvider>
          <Header />
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
