import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Container, Caravan, HardHat, Phone, ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile tire repair and replacement for commercial trucks, trailers, RVs, motorhomes, and heavy equipment. On-site service across Central Florida.",
  alternates: { canonical: "/services/" },
};

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Container,
  Caravan,
  HardHat,
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-2">
              Mobile Tire Services for Every Vehicle
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              From commercial fleets to weekend campers, K&W brings professional tire service directly to your location. No towing, no downtime, no hassle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Truck;
            const isEven = i % 2 === 1;
            return (
              <AnimatedSection key={service.slug} direction={isEven ? "right" : "left"}>
                <div
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${isEven ? "lg:flex-row-reverse" : ""}`}
                  id={service.slug}
                >
                  {/* Icon / visual */}
                  <div className="lg:w-1/3 w-full">
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 flex items-center justify-center aspect-square max-w-xs">
                      <Icon className="w-24 h-24 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.details}
                    </p>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href="tel:3865667339"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Get a Quote <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Not Sure What You Need?
            </h2>
            <p className="mt-3 text-blue-100 text-lg">
              Call us and describe the situation. We&apos;ll figure out the right solution and come prepared.
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
