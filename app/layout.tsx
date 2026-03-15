import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niko Labs — AI Agent-Driven Consultancy for SMEs",
  description:
    "Niko Labs builds AI automations, tools, and data systems for growing businesses. Delivered in weeks, not quarters.",
  keywords: "AI consultancy, AI agents, automation, SME, data pipelines",
  openGraph: {
    title: "Niko Labs — AI Agent-Driven Consultancy for SMEs",
    description:
      "We build the automations, tools, and data systems that used to require a 10-person tech team — delivered in weeks, not quarters.",
    type: "website",
    url: "https://nikolabs.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-[#0A0A0F] text-[#F0F0FF]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
