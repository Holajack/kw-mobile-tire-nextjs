import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ChevronRight, Phone, ArrowLeft } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { counties, getCountyBySlug } from "@/data/service-areas";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ county: string }>;
}

export async function generateStaticParams() {
  return counties.map((c) => ({ county: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county: countySlug } = await params;
  const county = getCountyBySlug(countySlug);
  if (!county) return {};

  return {
    title: `Mobile Tire Service in ${county.name}, FL`,
    description: `${county.description} Veteran-owned on-site tire repair. Call (386) 566-7339.`,
    alternates: { canonical: `/service-areas/${countySlug}/` },
  };
}

export default async function CountyPage({ params }: Props) {
  const { county: countySlug } = await params;
  const county = getCountyBySlug(countySlug);

  if (!county) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Service Areas
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-7 h-7 text-primary" />
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
                {county.name}
              </h1>
            </div>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              {county.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
              Cities We Serve in {county.name}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {county.cities.map((city) => (
              <StaggerItem key={city.slug}>
                <Link
                  href={`/service-areas/${county.slug}/${city.slug}`}
                  className="group block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 h-full"
                >
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-1">
                    {city.name}
                  </h3>
                  {city.population && (
                    <p className="text-xs text-slate-500 mb-3">Population: ~{city.population}</p>
                  )}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                    {city.description}
                  </p>
                  <p className="text-xs text-primary font-medium">{city.keyFeature}</p>
                  <span className="inline-flex items-center text-sm font-medium text-primary mt-3 group-hover:gap-2 transition-all">
                    View details <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services in county */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Services Available in {county.name}
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-primary/50 transition-all text-center"
                >
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {service.shortTitle}
                  </h3>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Need Tire Service in {county.name}?
            </h2>
            <p className="mt-3 text-blue-100 text-lg">
              We come to your exact location. Call now for fast, professional service.
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
