import type { Metadata } from "next";

import "./globals.css";

import "./fanta.css";
export const metadata: Metadata = {
  title: "MDnotes",
  description: "MDnotes is a platform for creating and sharing notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div id="app"> {children}</div>
        <div id="portal"></div>
      </body>
    </html>
  );
}
