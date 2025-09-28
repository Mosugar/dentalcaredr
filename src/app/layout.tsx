import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Athar Essakhi - Smile Lounge | Dentiste Professionnelle à Kénitra",
  description: "Dr. Athar Essakhi vous accueille au Smile Lounge à Kénitra. Cabinet dentaire moderne offrant des soins d'excellence : blanchiment, implants, orthodontie. Prenez RDV: 0700404400",
  keywords: [
    "dentiste Kénitra",
    "Dr. Athar Essakhi", 
    "Smile Lounge",
    "cabinet dentaire Kénitra",
    "blanchiment dentaire",
    "implants dentaires",
    "orthodontie Kénitra",
    "soins dentaires Maroc"
  ],
  authors: [{ name: "Dr. Athar Essakhi" }],
  creator: "Dr. Athar Essakhi",
  publisher: "Smile Lounge",
  openGraph: {
    title: "Dr. Athar Essakhi - Smile Lounge | Dentiste à Kénitra",
    description: "Cabinet dentaire moderne à Kénitra. Dr. Athar Essakhi, dentiste professionnelle. Soins d'excellence, technologies avancées. RDV: 0700404400",
    url: "https://dentalcare-mu.vercel.app",
    siteName: "Smile Lounge - Dr. Athar Essakhi",
    images: [
      {
        url: "https://res.cloudinary.com/dylpck2et/image/upload/v1758982106/KEEP_CALM_your_smile_is_my_mission_dyf9qy.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Athar Essakhi - Smile Lounge Kénitra",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Athar Essakhi - Smile Lounge | Dentiste Kénitra",
    description: "Cabinet dentaire moderne à Kénitra. Soins d'excellence par Dr. Athar Essakhi. RDV: 0700404400",
    images: ["https://res.cloudinary.com/dylpck2et/image/upload/v1758982106/KEEP_CALM_your_smile_is_my_mission_dyf9qy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here if you have one
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://dentalcare-mu.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Custom favicon using your logo */}
<link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dylpck2et/image/upload/v1758982023/Coming_soon_dronlq.jpg" />
<link rel="apple-touch-icon" href="https://res.cloudinary.com/dylpck2et/image/upload/v1758982023/Coming_soon_dronlq.jpg" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14b8a6" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Local Business Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Dr. Athar Essakhi - Smile Lounge",
              "image": "https://res.cloudinary.com/dylpck2et/image/upload/v1758982106/KEEP_CALM_your_smile_is_my_mission_dyf9qy.jpg",
              "description": "Cabinet dentaire moderne à Kénitra offrant des soins d'excellence",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Mohamed V",
                "addressLocality": "Kénitra",
                "addressCountry": "MA"
              },
              "telephone": "0700404400",
              "url": "https://dentalcare-mu.vercel.app",
              "openingHours": [
                "Mo-Sa 09:00-19:00"
              ],
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card",
              "hasMap": "https://maps.app.goo.gl/bmiqi4p7BD1hVCTr8"
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}