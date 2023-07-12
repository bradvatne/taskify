import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskify",
  description: "Break down your tasks into bite-size chunks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
