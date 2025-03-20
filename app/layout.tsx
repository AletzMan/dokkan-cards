import type { Metadata } from "next";
import { Jost, Geist_Mono } from "next/font/google";
import Provider from "@components/provider";
import "./globals.css";
import Header from "./components/Header";

const fontJost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dokkan Battle Cards",
  description: "A collection of Dokkan Battle cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontJost.variable} ${geistMono.variable} antialiased`}
      >
        <Provider  >
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
