import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "我的網站",
  description: "Created with SiteMaster — ready for Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}