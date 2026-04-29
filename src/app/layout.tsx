import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vantage Journeys",
  description: "Next.js app scaffold for Vantage Journeys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
