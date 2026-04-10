import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kwmobiletire.com"),
  title: {
    default: "K&W Mobile Tire Service | Volusia, Flagler & Brevard Counties",
    template: "%s | K&W Mobile Tire Service",
  },
  description:
    "Veteran-owned mobile tire service in Central Florida. On-site repair and replacement for trucks, trailers, RVs, and heavy equipment. Volusia, Flagler, Brevard.",
  keywords: [
    "mobile tire service",
    "mobile tire repair",
    "on-site tire replacement",
    "commercial truck tires",
    "RV tire service",
    "trailer tire repair",
    "heavy equipment tires",
    "Daytona Beach tire service",
    "Volusia County mobile tire",
    "Flagler County tire service",
    "Brevard County tire service",
    "veteran-owned tire service",
  ],
  authors: [{ name: "K&W Mobile Tire Service" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "K&W Mobile Tire Service",
    title: "K&W Mobile Tire Service | We Come to You",
    description:
      "Veteran-owned mobile tire service covering Volusia, Flagler, and Brevard Counties. Commercial trucks, trailers, RVs, and heavy equipment.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "K&W Mobile Tire Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "K&W Mobile Tire Service",
    description:
      "Veteran-owned mobile tire service in Central Florida. We come to you.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Nav />
          <main className="flex-1 pt-16 lg:pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
