import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Wrench, Heart, Users, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "K&W Mobile Tire Service is a veteran-owned business serving Central Florida. Owner Dustin Boyd brings years of experience and a commitment to honest, reliable tire service.",
  alternates: { canonical: "/about/" },
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We give honest assessments. If your tire can be repaired instead of replaced, we'll tell you.",
  },
  {
    icon: Wrench,
    title: "Expertise",
    desc: "From semi-trucks to forklifts, we know tires. We bring the right tools and knowledge to every job.",
  },
  {
    icon: Heart,
    title: "Service",
    desc: "As a veteran-owned business, service is in our DNA. We treat every customer the way we'd want to be treated.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Central Florida is our home. We're building something here — one tire at a time, one relationship at a time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-2">
              Veteran-Owned. Florida-Based. Tire-Focused.
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              K&W Mobile Tire Service was founded on a simple idea: tire service should come to you, not the other way around.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Owner Bio */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 aspect-square max-w-md flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-4xl font-bold text-primary">DB</span>
                  </div>
                  <p className="font-heading font-bold text-xl text-slate-900 dark:text-white">Dustin Boyd</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Owner & Operator</p>
                  <p className="text-xs text-accent font-semibold mt-1">U.S. Military Veteran</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Meet Dustin Boyd
              </h2>
              <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  After serving in the U.S. military, Dustin brought his discipline, work ethic, and commitment to excellence to the tire industry. He saw a gap in Central Florida: businesses and travelers needed fast, professional tire service without the hassle of towing their vehicles to a shop.
                </p>
                <p>
                  K&W Mobile Tire Service was born to fill that gap. Dustin personally handles every call, every job, and every customer relationship. When you call K&W, you get Dustin — not a call center, not a dispatcher, not a stranger.
                </p>
                <p>
                  Whether it&apos;s a semi-truck stranded on I-95, a forklift down at a construction site, or a travel trailer with a flat at the campground, Dustin shows up with the right tires, the right tools, and the right attitude.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  "U.S. Military Veteran",
                  "Licensed & Insured",
                  "Commercial & Residential",
                  "3 Counties Covered",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              What We Stand For
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Mobile */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
              Why Mobile Tire Service?
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Traditional tire shops require you to bring your vehicle to them. For a passenger car, that&apos;s an inconvenience. For a semi-truck, a forklift, or a motorhome, it&apos;s a logistical nightmare and a potential safety hazard.
              </p>
              <p>
                Mobile tire service eliminates those problems. We bring everything to your location — the tires, the equipment, the expertise. Whether you&apos;re on the side of I-95, at a construction site in Daytona, or parked at an RV resort in New Smyrna Beach, we come to you.
              </p>
              <p>
                For fleet operators, mobile service means zero downtime from driving vehicles to a shop. For RV owners, it means not having to navigate a 40-foot motorhome through city streets to find a tire shop. For construction companies, it means your equipment stays on the job site and your project stays on schedule.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Ready to Work With Us?</h2>
            <p className="mt-3 text-blue-100 text-lg">
              Give us a call or request a quote online. We&apos;re here to help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
