import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

// ─── SEO Metadata ────────────────────────────────────────────────────────

const BASE_URL = "https://techbridgeforafrica.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "TechBridge for Africa | Salesforce CRM & AI Skills Training",
    template: "%s | TechBridge for Africa",
  },

  description:
    "TechBridge for Africa offers structured technology training in Salesforce CRM and Applied AI Skills. Operated by Pathway to Salesforce, London. Open to all — no technical background required.",

  keywords: [
    "Salesforce training Africa",
    "Salesforce CRM course Rwanda",
    "Applied AI Skills training",
    "tech training programme Africa",
    "Pathway to Salesforce",
    "Salesforce Administrator certification",
    "TechBridge for Africa",
    "tech career Africa",
    "AI skills course",
    "online tech training Rwanda",
  ],

  authors: [{ name: "Pathway to Salesforce", url: "https://pathwaytosalesforce.com" }],

  creator: "Pathway to Salesforce",
  publisher: "TechBridge for Africa",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "TechBridge for Africa",
    locale: "en_GB",
    title: "TechBridge for Africa | Salesforce CRM & AI Skills Training",
    description:
      "Structured technology training in Salesforce CRM and Applied AI Skills. Operated by Pathway to Salesforce, London. Delivered with Rwandan tech partners. No technical background required.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechBridge for Africa — Salesforce CRM and AI Skills Training",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@techbridgeafrica",
    creator: "@techbridgeafrica",
    title: "TechBridge for Africa | Salesforce CRM & AI Skills Training",
    description:
      "Structured technology training in Salesforce CRM and Applied AI Skills. Operated by Pathway to Salesforce, London.",
    images: ["/images/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  category: "education",
};

// ─── JSON-LD structured data ──────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "TechBridge for Africa",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo4.png`,
        width: 512,
        height: 160,
      },
      description:
        "TechBridge for Africa is a technology training programme operated by Pathway to Salesforce, London. It delivers Salesforce CRM and Applied AI Skills training across Africa in collaboration with Rwandan tech partners.",
      parentOrganization: {
        "@type": "Organization",
        name: "Pathway to Salesforce",
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "GB",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "TechBridge for Africa",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "Course",
      name: "Salesforce CRM Track",
      description:
        "Learn to configure and administer Salesforce, covering Sales Cloud, Service Cloud, Flow Builder, and preparation for the Salesforce Administrator certification exam.",
      provider: { "@id": `${BASE_URL}/#organization` },
      educationalLevel: "Beginner to intermediate",
      courseMode: "online",
      inLanguage: "en",
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/#courses`,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Course",
      name: "Applied AI Skills Track",
      description:
        "A practical course covering prompt engineering, AI-assisted workflows, and responsible AI use in professional contexts. No prior AI or technical background required.",
      provider: { "@id": `${BASE_URL}/#organization` },
      educationalLevel: "No prior experience needed",
      courseMode: "online",
      inLanguage: "en",
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/#courses`,
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

// ─── Root layout ──────────────────────────────────────────────────────────

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hanken.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#EFEDE8] text-[#22262B] antialiased">
        {children}
      </body>
    </html>
  );
}
