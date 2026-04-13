"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Truck,
  Container,
  Caravan,
  HardHat,
  Star,
  Shield,
  Clock,
  MapPin,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { counties } from "@/data/service-areas";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Container,
  Caravan,
  HardHat,
};

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve Volusia County (Daytona Beach, DeLand, Deltona, Port Orange, New Smyrna Beach, Ormond Beach, DeBary, Orange City), Flagler County (Palm Coast, Flagler Beach, Bunnell), and Brevard County (Melbourne, Titusville, Cocoa, Palm Bay, Merritt Island, Rockledge, Cape Canaveral).",
  },
  {
    q: "What types of vehicles do you service?",
    a: "We service commercial trucks (semis, box trucks), trailers (utility, flatbed, enclosed, boat, horse), RVs and motorhomes (Class A, Class C, travel trailers, fifth wheels), and heavy equipment (forklifts, skid steers, backhoes, tractors).",
  },
  {
    q: "How quickly can you get to me?",
    a: "In most cases we can reach you within 45–90 minutes depending on your location and our current schedule. For emergencies on I-95, I-4, or US-1, we prioritize rapid response.",
  },
  {
    q: "Do you carry tires with you?",
    a: "Yes. Our service trucks are stocked with the most common commercial, trailer, and RV tire sizes. For specialty sizes we can typically source and deliver within 24 hours.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. K&W Mobile Tire Service is fully licensed, insured, and veteran-owned. We carry commercial liability insurance and workers' compensation coverage.",
  },
  {
    q: "What are your hours?",
    a: "We operate Monday through Saturday, 7 AM to 7 PM. For after-hours emergencies, give us a call and we'll do our best to accommodate.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kwtires.com/#business",
  name: "K&W Mobile Tire Service",
  description: "Veteran-owned mobile tire service providing on-site tire repair and replacement for commercial trucks, trailers, RVs, and heavy equipment across Volusia, Flagler, and Brevard Counties in Central Florida.",
  url: "https://kwtires.com",
  telephone: "+1-386-566-7339",
  email: "kwmobiletireservice@gmail.com",
  image: "https://kwtires.com/og-image.png",
  priceRange: "$$",
  areaServed: [
    { "@type": "County", name: "Volusia County, FL" },
    { "@type": "County", name: "Flagler County, FL" },
    { "@type": "County", name: "Brevard County, FL" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Daytona Beach",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.2108,
    longitude: -81.0228,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  founder: { "@type": "Person", name: "Dustin Boyd" },
  additionalType: "https://schema.org/AutoRepair",
  knowsAbout: ["tire repair", "tire replacement", "commercial truck tires", "RV tires", "trailer tires", "heavy equipment tires"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "K&W Mobile Tire Service",
  url: "https://kwtires.com",
  description: "Veteran-owned mobile tire service in Central Florida. On-site repair and replacement for trucks, trailers, RVs, and heavy equipment.",
  publisher: {
    "@type": "Organization",
    name: "K&W Mobile Tire Service",
    url: "https://kwtires.com",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://kwtires.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD structured data — hardcoded business info, no user input */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static schema data from hardcoded constants, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static schema data from hardcoded constants, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static schema data from hardcoded constants, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Hero — split layout with logo + emergency services */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 lg:py-20 items-center">
            {/* Left — logo + CTA */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/kw-logo.png"
                  alt="K&W Mobile Tire Service — For Tires Done Right"
                  width={500}
                  height={290}
                  className="w-auto h-auto max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] dark:hidden"
                  priority
                />
                <Image
                  src="/kw-logo-dark.png"
                  alt="K&W Mobile Tire Service — For Tires Done Right"
                  width={500}
                  height={290}
                  className="w-auto h-auto max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] hidden dark:block"
                  priority
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 text-sm text-slate-500 dark:text-slate-400"
              >
                Veteran-Owned <span className="text-primary font-semibold">&bull;</span> Central Florida <span className="text-primary font-semibold">&bull;</span> On-Site Repairs
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="tel:3865667339"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  (386) 566-7339
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary px-6 py-3.5 rounded-xl text-base font-semibold transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
              >
                {["Licensed & Insured", "U.S. Veteran Owned", "Same-Day Service"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-accent" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — service cards + stats + emergency button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Emergency Services button */}
              <a
                href="tel:3865667339"
                className="mb-4 w-full inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5 border border-red-500"
              >
                <Shield className="w-5 h-5" />
                Emergency Service — Call Now
              </a>

              {/* Service grid */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => {
                  const Icon = iconMap[service.icon] || Truck;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="font-heading font-bold text-sm text-slate-900 dark:text-white">{service.shortTitle}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{service.description.split(".")[0]}.</p>
                    </Link>
                  );
                })}
              </div>

              {/* Stats strip */}
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { value: "3", label: "Counties Served" },
                  { value: "18+", label: "Cities Covered" },
                  { value: "<90m", label: "Avg. Response" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                    <p className="font-heading text-xl font-bold text-primary">{stat.value}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        {/* Subtle bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      </section>

      {/* How It Works — horizontal timeline feel */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              Three steps. That&apos;s it.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
            {[
              { step: "1", title: "Call or Text", desc: "Tell us what you need and where you are. We give you an honest quote — no surprises.", icon: Phone },
              { step: "2", title: "We Drive to You", desc: "Our service truck arrives stocked with tires and tools. Roadside, job site, campground — anywhere.", icon: Truck },
              { step: "3", title: "Done On-Site", desc: "Tires repaired or replaced right where you are. You get back to work or back on the road.", icon: CheckCircle },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 text-center group"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white font-heading text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                  <div className="mt-4 mb-4">
                    <item.icon className="w-10 h-10 text-primary/70 mx-auto group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              Built for the vehicles shops can&apos;t handle on-site
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We specialize in tires that are too big, too heavy, or in places too inconvenient for a traditional shop.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Truck;
              return (
                <StaggerItem key={service.slug}>
                  <ServiceCard service={service} Icon={Icon} />
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Real Feedback</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              What customers are saying
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {reviews.map((review) => (
              <StaggerItem key={review.name}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 h-full flex flex-col"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 flex-1 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{review.name}</p>
                      <p className="text-xs text-slate-500">{review.location}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <AnimatedSection className="lg:col-span-2" direction="left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Coverage</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                Serving 3 counties across Central Florida
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                From Titusville down to Melbourne, and from DeLand out to the coast — if you&apos;re in our coverage area, we&apos;ll come to you.
              </p>
              <Link
                href="/service-areas"
                className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                View all service areas <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <div className="lg:col-span-3">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerDelay={0.1}>
                {counties.map((county) => (
                  <StaggerItem key={county.slug}>
                    <Link
                      href={`/service-areas/${county.slug}`}
                      className="group block bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                      <MapPin className="w-5 h-5 text-primary mb-2" />
                      <h3 className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {county.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {county.cities.length} cities
                      </p>
                      <ul className="mt-3 space-y-0.5">
                        {county.cities.slice(0, 4).map((c) => (
                          <li key={c.slug} className="text-xs text-slate-600 dark:text-slate-400">{c.name}</li>
                        ))}
                        {county.cities.length > 4 && (
                          <li className="text-xs text-primary font-medium">+{county.cities.length - 4} more</li>
                        )}
                      </ul>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Quote Form */}
      <section className="py-20 lg:py-28 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">Get Started</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2">
                Request a quote in 30 seconds
              </h2>
              <p className="mt-4 text-slate-400">
                Tell us what you need and we&apos;ll call you back with an honest price. Or just call us directly — Dustin picks up.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "No obligation — free estimates",
                  "Most common tire sizes in stock",
                  "Same-day service available",
                  "We come to your exact location",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="tel:3865667339"
                className="mt-8 inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-primary-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                (386) 566-7339
              </a>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <QuickQuoteForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Don&apos;t wait for a tow truck.
            </h2>
            <p className="mt-3 text-lg text-blue-100 max-w-xl mx-auto">
              K&W brings the shop to you. Call now and we&apos;ll be on our way.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:3865667339"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-xl text-base font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call (386) 566-7339
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all border border-white/20"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ service, Icon }: { service: typeof services[0]; Icon: React.ElementType }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-64 cursor-pointer [perspective:1000px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col [backface-visibility:hidden]">
          <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2">
            {service.shortTitle}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 flex-1">
            {service.description}
          </p>
          <p className="text-xs text-primary font-medium mt-2">Hover for details</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-primary rounded-2xl p-6 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <h3 className="font-heading font-bold text-white mb-3">{service.shortTitle}</h3>
            <ul className="space-y-1.5">
              {service.features.slice(0, 4).map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-200 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-100 transition-colors mt-3"
          >
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
        <h3 className="font-heading text-xl font-bold text-white mb-2">We got it!</h3>
        <p className="text-slate-400 text-sm">
          We&apos;ll call you back shortly. Need help now? Call{" "}
          <a href="tel:3865667339" className="text-primary-light font-semibold">(386) 566-7339</a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700"
    >
      <h3 className="font-heading text-lg font-bold text-white mb-4">Quick Quote Request</h3>
      <div className="space-y-3">
        <input
          type="text"
          required
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
        />
        <input
          type="tel"
          required
          placeholder="Phone number"
          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
        />
        <select
          required
          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
        >
          <option value="">What do you need?</option>
          <option>Commercial Truck Tires</option>
          <option>Trailer Tires</option>
          <option>RV / Motorhome Tires</option>
          <option>Heavy Equipment Tires</option>
          <option>Not Sure / Other</option>
        </select>
        <textarea
          rows={2}
          placeholder="Briefly describe the situation (optional)"
          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors resize-none"
        />
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-light text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 cursor-pointer flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          Send Quote Request
        </button>
      </div>
    </form>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
      >
        <span className="font-semibold text-sm text-slate-900 dark:text-white pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}
