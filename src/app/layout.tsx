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
  title: "CodeCrafters - Aplikasi Keamanan Siber",
  description: "Download aplikasi CodeCrafters dengan fitur keamanan siber profesional. SQL Injection checker, XSS detector, SMB enumeration, dan alat penetrasi testing.",
  keywords: "CodeCrafters, keamanan siber, penetration testing, SQL injection, XSS, SMB enumeration, cybersecurity tools",
  authors: [{ name: "CodeCrafters Security Team" }],
  openGraph: {
    title: "CodeCrafters - Aplikasi Keamanan Siber",
    description: "Aplikasi keamanan siber profesional dengan fitur SQL Injection checker, XSS detector, dan alat penetrasi testing",
    type: "website",
  },
  icons: {
    icon: '/favicon.svg',
  }
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
