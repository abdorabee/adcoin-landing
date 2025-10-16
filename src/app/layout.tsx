import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdCoin - Watch Ads. Earn Crypto.",
  description: "Earn crypto for your attention — or promote your brand transparently with blockchain. Built on Polygon, powered by Web3.",
  keywords: ["AdCoin", "crypto", "blockchain", "advertising", "Web3", "Polygon", "tokens", "earn"],
  authors: [{ name: "AdCoin Team" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AdCoin - Watch Ads. Earn Crypto.",
    description: "Earn crypto for your attention — or promote your brand transparently with blockchain.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdCoin - Watch Ads. Earn Crypto.",
    description: "Earn crypto for your attention — or promote your brand transparently with blockchain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
