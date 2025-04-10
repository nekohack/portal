import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YUMA | Developer & Manager",
  description:
    "Personal website of YUMA - Application Developer and Engineering Manager.",
  openGraph: {
    title: "YUMA | Developer & Manager",
    description:
      "Personal website of YUMA - Application Developer and Engineering Manager.",
    images: [
      {
        url: "https://i.imgur.com/s0F1UXD.jpg",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
