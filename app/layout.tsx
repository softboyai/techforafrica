import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "TechBridge for Africa | Salesforce & Applied AI Training",
  description:
    "TechBridge for Africa is a corporate technology-based training program by Pathway to Salesforce (London). Master Salesforce CRM or Applied AI Skills and transition into tech across Africa.",
  openGraph: {
    title: "TechBridge for Africa | Salesforce & Applied AI Training",
    description:
      "A structured training program from Pathway to Salesforce. Two tracks: Salesforce CRM and Applied AI Skills. Delivered in collaboration with African tech partners.",
    siteName: "TechBridge for Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBridge for Africa | Salesforce & Applied AI Training",
    description:
      "Master Salesforce CRM or Applied AI Skills. Delivered across Africa by Pathway to Salesforce, London.",
  },
  metadataBase: new URL("https://techbridgeforafrica.com"),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hanken.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-[#EFEDE8] text-[#22262B] antialiased">
        {children}
      </body>
    </html>
  );
}
