import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Hair Salon | Your Best Look Starts Here | Woodbridge, NJ",
  description:
    "Full-service hair salon in Woodbridge, NJ. Haircuts, coloring, highlights, braids, keratin treatments, and nails. Walk-ins welcome. Open 7 days. 4.8★ rated.",
  keywords:
    "hair salon, Woodbridge NJ, haircut, coloring, highlights, balayage, braids, keratin, nails, walk-in salon",
  openGraph: {
    title: "Lucas Hair Salon | Woodbridge, NJ",
    description:
      "Full-service hair salon. Walk-ins welcome. Open 7 days. 4.8★ Google rating.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Lucas Hair Salon",
  description:
    "Full-service hair salon in Woodbridge, NJ. Walk-ins welcome. Open 7 days.",
  telephone: "(732) 555-0234",
  email: "lucashairsalon@example.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Woodbridge",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "320",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  image:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-charcoal font-body">{children}</body>
    </html>
  );
}
