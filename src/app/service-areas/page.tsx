import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, Phone } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { counties } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "K&W Mobile Tire Service covers Volusia County, Flagler County, and Brevard County. 18+ cities across Central Florida. We come to you.",
  alternates: { canonical: "/service-areas/" },
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-2">
              3 Counties. 18+ Cities. One Call.
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              K&W Mobile Tire Service covers Volusia, Flagler, and Brevard Counties — from Daytona Beach to Melbourne and everywhere in between.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Counties */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {counties.map((county, i) => (
            <AnimatedSection key={county.slug} delay={i * 0.1}>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {county.name}
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
                  {county.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {county.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${county.slug}/${city.slug}`}
                      className="group flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all"
                    >
                      <div>
                        <p className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                          {city.name}
                        </p>
                        {city.population && (
                          <p className="text-xs text-slate-500">Pop. {city.population}</p>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Don&apos;t See Your City?
            </h2>
            <p className="mt-3 text-blue-100 text-lg">
              Call us anyway — if you&apos;re in the Central Florida area, we can probably reach you.
            </p>
            <a
              href="tel:3865667339"
              className="mt-6 inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-xl text-base font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call (386) 566-7339
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
