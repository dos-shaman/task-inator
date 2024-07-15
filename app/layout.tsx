import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteConfig } from "@/config/site";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`
  },
  description: SiteConfig.description,
  icons: [
    {
      url: "/letter-t-.png",
      href: "/letter-t-.png",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>{children}</body>
      </ClerkProvider>
      </html>
  );
}
