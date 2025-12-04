import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Archie Crawford Jr — Portfolio",
  description: "Senior Cyber Security Engineer | Endpoint Compliance, Automation & SaaS Security",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
