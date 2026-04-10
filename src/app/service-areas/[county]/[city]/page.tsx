import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, ArrowLeft, CheckCircle, ChevronRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { counties, getCityBySlug, getCountyBySlug } from "@/data/service-areas";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ county: string; city: string }>;
}

export async function generateStaticParams() {
  return counties.flatMap((county) =>
    county.cities.map((city) => ({
      county: county.slug,
      city: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county: countySlug, city: citySlug } = await params;
  const city = getCityBySlug(countySlug, citySlug);
  if (!city) return {};

  return {
    title: `Mobile Tire Service in ${city.name}, FL`,
    description: city.description,
    alternates: { canonical: `/service-areas/${countySlug}/${citySlug}/` },
  };
}

export default async function CityPage({ params }: Props) {
  const { county: countySlug, city: citySlug } = await params;
  const county = getCountyBySlug(countySlug);
  const city = getCityBySlug(countySlug, citySlug);

  if (!county || !city) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
              <Link href="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href={`/service-areas/${county.slug}`} className="hover:text-primary transition-colors">{county.name}</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-900 dark:text-white font-medium">{city.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-7 h-7 text-primary" />
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                Mobile Tire Service in {city.name}
              </h1>
            </div>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              {city.description}
            </p>
            {city.population && (
              <p className="mt-2 text-sm text-slate-500">Population: ~{city.population} | {city.keyFeature}</p>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Tire Services Available in {city.name}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              K&W Mobile Tire Service comes directly to your location in {city.name}. Whether you&apos;re at a job site, roadside, campground, or your own driveway — we bring the tires, tools, and expertise to you.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why choose mobile */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Why Choose Mobile Tire Service in {city.name}?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "No towing required — we come to you",
                "Service at your job site, roadside, or driveway",
                "Veteran-owned and operated",
                "Licensed and insured",
                "Most common tire sizes in stock",
                "Typically on-site within 45–90 minutes",
                "Honest pricing with no hidden fees",
                "Serving " + city.name + " and surrounding areas",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Need Tire Service in {city.name}?
            </h2>
            <p className="mt-3 text-blue-100 text-lg">
              Call now and we&apos;ll come to your exact location.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:3865667339"
                className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-xl text-base font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call (386) 566-7339
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all border border-white/20"
              >
                Request a Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
