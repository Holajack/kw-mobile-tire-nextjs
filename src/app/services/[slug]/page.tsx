import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Truck, Container, Caravan, HardHat, Phone, ChevronRight, CheckCircle, ArrowLeft } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Container,
  Caravan,
  HardHat,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${slug}/` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = iconMap[service.icon] || Truck;
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-900 dark:text-white font-medium">{service.shortTitle}</span>
            </nav>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h1>
                <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
                  {service.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
              {service.details}
            </p>

            <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4">
              What We Handle
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:3865667339"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Phone className="w-4 h-4" />
                Call (386) 566-7339
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
              Other Services
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6" staggerDelay={0.1}>
            {otherServices.map((s) => {
              const SIcon = iconMap[s.icon] || Truck;
              return (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 text-center"
                  >
                    <SIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {s.shortTitle}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">{s.description}</p>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
