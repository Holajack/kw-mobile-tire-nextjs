import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote from K&W Mobile Tire Service. On-site tire repair and replacement for commercial trucks, trailers, RVs, and heavy equipment across Volusia, Flagler, and Brevard Counties.",
  alternates: { canonical: "/contact/" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
