"use client";

import { Phone, Mail, MapPin, Clock, Send, Shield, CheckCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { useState } from "react";

const serviceOptions = [
  "Commercial Truck Tires",
  "Trailer Tires",
  "RV / Motorhome Tires",
  "Heavy Equipment Tires",
  "Fleet Maintenance",
  "Other / Not Sure",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-2">
              Get a Free Quote
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Call us directly for the fastest response, or fill out the form and we&apos;ll get back to you within a few hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Fastest Way to Reach Us
                </h2>

                <a
                  href="tel:3865667339"
                  className="flex items-center gap-4 bg-primary hover:bg-primary-light text-white rounded-xl p-4 mb-6 transition-all hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">(386) 566-7339</p>
                    <p className="text-blue-100 text-sm">Call or text — we answer fast</p>
                  </div>
                </a>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900 dark:text-white">Email</p>
                      <a href="mailto:kwmobiletire@gmail.com" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        kwmobiletire@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900 dark:text-white">Service Area</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Volusia, Flagler & Brevard Counties, FL
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900 dark:text-white">Hours</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Mon – Sat: 7 AM – 7 PM</p>
                      <p className="text-xs text-slate-500">After-hours emergency? Call us.</p>
                    </div>
                  </div>
                </div>

                {/* Trust */}
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-sm text-slate-900 dark:text-white">Why Choose K&W?</span>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Veteran-owned & operated",
                      "Licensed and insured",
                      "Fast response — typically under 90 minutes",
                      "Honest pricing, no hidden fees",
                      "We come to your exact location",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        We&apos;ll get back to you shortly. For immediate help, call{" "}
                        <a href="tel:3865667339" className="text-primary font-semibold">(386) 566-7339</a>.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-5"
                    >
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                        Request a Quote
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Phone *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                            placeholder="(386) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                          placeholder="you@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Your Location
                        </label>
                        <input
                          id="location"
                          type="text"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                          placeholder="City or address"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors resize-none"
                          placeholder="Tell us about your tire situation — vehicle type, tire size if known, urgency, etc."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Send Quote Request
                      </button>

                      <p className="text-xs text-slate-500 text-center">
                        We typically respond within 1–2 hours during business hours.
                      </p>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
