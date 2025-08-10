import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Timestamper - Convert timestamps into dates",
  description: "A simple tool to convert Unix timestamps into human-readable dates and view the current timestamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
