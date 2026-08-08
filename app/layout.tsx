import type { Metadata } from "next";
import { DM_Serif_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";

/* Gestura equivalent — DM Serif Display for large display headings */
const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

/* Instrument Sans for body / UI */
const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

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
  authors: [{ name: "Pathway to Salesforce" }],
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "TechBridge for Africa",
    locale: "en_GB",
    title: "TechBridge for Africa | Salesforce CRM & AI Skills Training",
    description:
      "Structured technology training in Salesforce CRM and Applied AI Skills. Operated by Pathway to Salesforce, London.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechBridge for Africa",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo4.png`,
  description:
    "TechBridge for Africa is a technology training programme operated by Pathway to Salesforce, London.",
  parentOrganization: {
    "@type": "Organization",
    name: "Pathway to Salesforce",
    address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${instrumentSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased" style={{ backgroundColor: "#F7F2EF", color: "#000000", fontFamily: "var(--font-body), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
