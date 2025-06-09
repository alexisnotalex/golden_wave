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

export const metadata = {
  title: 'Golden Wave',
  description: 'Golden Wave votre partenaire de confiance pour l\'excellence maritime.',
  keywords: [
    'yachting',
    'yacht',
    'yacht charter',
    'yachting charter',
    'yachting france',
    'yachting europe',
    'Rec Industrie',
    'studio créatif',
    'agence vidéo Brest',
  ],
  authors: [{ name: 'Golden Wave', url: 'https://golden-wave.vercel.app' }],
  creator: 'Golden Wave',
  publisher: 'Golden Wave',
  openGraph: {
    title: 'Golden Wave | Yachting Europe',
    description: 'Golden Wave votre partenaire de confiance pour l\'excellence maritime.',
    url: 'https://golden-wave.vercel.app',
    siteName: 'Golden Wave',
    images: [
      {
        url: 'https://golden-wave.vercel.app/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Golden Wave - Yachting Europe',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Wave | Yachting Europe',
    description: 'Golden Wave votre partenaire de confiance pour l\'excellence maritime.',
    images: ['https://golden-wave.vercel.app/og-image.webp'],
    creator: '@goldenwave',
  },
  metadataBase: new URL('https://golden-wave.vercel.app'),
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
