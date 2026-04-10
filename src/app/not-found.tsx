import Link from "next/link";
import { Phone, ArrowLeft, MapPin, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-8xl font-heading font-bold text-primary mb-4">404</div>
        <h1 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
          back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="tel:+13865667339"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            (386) 566-7339
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <Link
            href="/services/"
            className="group flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
          >
            <Wrench className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                Services
              </div>
              <div className="text-xs text-slate-500">What we do</div>
            </div>
          </Link>
          <Link
            href="/service-areas/"
            className="group flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
          >
            <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                Service Areas
              </div>
              <div className="text-xs text-slate-500">Where we go</div>
            </div>
          </Link>
          <Link
            href="/contact/"
            className="group flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
          >
            <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                Contact
              </div>
              <div className="text-xs text-slate-500">Get a quote</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
