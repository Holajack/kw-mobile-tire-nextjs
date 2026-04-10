import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { href: "/services/commercial-trucks/", label: "Commercial Trucks" },
  { href: "/services/trailers/", label: "Trailers" },
  { href: "/services/rvs-motorhomes/", label: "RVs & Motorhomes" },
  { href: "/services/heavy-equipment/", label: "Heavy Equipment" },
];

const areaLinks = [
  { href: "/service-areas/volusia-county/", label: "Volusia County" },
  { href: "/service-areas/flagler-county/", label: "Flagler County" },
  { href: "/service-areas/brevard-county/", label: "Brevard County" },
];

const resourceLinks = [
  { href: "/blog/", label: "Articles" },
  { href: "/about/", label: "About Us" },
  { href: "/contact/", label: "Contact" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold text-white">
                K<span className="text-primary-light">&</span>W
              </span>
              <span className="block text-xs text-slate-400 uppercase tracking-widest font-medium mt-0.5">
                Mobile Tire Service
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-4 max-w-xs">
              Veteran-owned mobile tire service covering Volusia, Flagler, and Brevard Counties. We come to you.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:3865667339" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary-light" />
                (386) 566-7339
              </a>
              <a href="mailto:kwmobiletire@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary-light" />
                kwmobiletire@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-light shrink-0" />
                <span>Central Florida — Volusia, Flagler & Brevard</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-light shrink-0" />
                <span>Mon–Sat 7 AM – 7 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Veteran-Owned
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary-light" />
            Licensed & Insured
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary-light" />
            Serving 3 Counties
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} K&W Mobile Tire Service. All rights reserved.</p>
          <p>
            Made by{" "}
            <a
              href="https://marketmindsglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              MarketMinds Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
