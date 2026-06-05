import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nado.tr";
const siteTitle = "Nado Teknoloji | Yazılım ve Yapay Zeka Odaklı Dijital Ürünler";
const siteDescription =
  "Nado Teknoloji; yazılım geliştirme, yapay zeka destekli çözümler ve kullanıcı odaklı dijital ürünler üzerine çalışan teknoloji girişimidir.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Nado Teknoloji",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 492,
        height: 353,
        alt: "Nado Teknoloji logosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
