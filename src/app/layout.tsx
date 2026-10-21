import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Utility — Useful tools. Simpler days.",
    template: "%s | Utility",
  },
  description: "Simple digital tools for everyday tasks, language, and business.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
