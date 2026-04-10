import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for K&W Mobile Tire Service. Review the terms and conditions governing our mobile tire repair and replacement services.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-slate-50 dark:bg-slate-900/50 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: April 10, 2026</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert prose-headings:font-heading prose-headings:font-bold max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By using the K&W Mobile Tire Service website or requesting our services, you agree to
            these terms of service. If you do not agree, please do not use our website or services.
          </p>

          <h2>Services</h2>
          <p>
            K&W Mobile Tire Service provides on-site mobile tire repair and replacement for
            commercial trucks, trailers, RVs, motorhomes, and heavy equipment. Our service area
            covers Volusia County, Flagler County, and Brevard County in Central Florida.
          </p>
          <p>
            Services include but are not limited to:
          </p>
          <ul>
            <li>Tire repair (patches, plugs)</li>
            <li>Tire replacement and installation</li>
            <li>Emergency roadside tire service</li>
            <li>Fleet tire maintenance</li>
            <li>Tire inspections and assessments</li>
          </ul>

          <h2>Quotes and Pricing</h2>
          <p>
            Quotes provided by K&W Mobile Tire Service are estimates based on the information you
            provide. Final pricing may vary based on actual conditions found upon inspection. We
            will always discuss any changes in pricing with you before proceeding with additional
            work.
          </p>

          <h2>Payment</h2>
          <p>
            Payment is due upon completion of service unless other arrangements have been made in
            advance. We accept cash, checks, and major credit cards.
          </p>

          <h2>Warranty</h2>
          <p>
            Tire manufacturer warranties apply to new tires we install. Our workmanship is
            guaranteed — if you experience any issues related to our installation or repair, contact
            us and we will make it right.
          </p>

          <h2>Liability</h2>
          <p>
            K&W Mobile Tire Service is fully licensed and insured. Our liability is limited to the
            cost of the services provided. We are not liable for pre-existing vehicle conditions,
            damage caused by road hazards after service, or issues unrelated to the tire service
            performed.
          </p>

          <h2>Cancellation</h2>
          <p>
            You may cancel a service request at any time before our technician arrives at your
            location at no charge. If cancellation occurs after arrival, a trip charge may apply.
          </p>

          <h2>Website Use</h2>
          <p>
            The content on this website is provided for general informational purposes. While we
            strive to keep information accurate and up to date, we make no warranties about the
            completeness or accuracy of the information on this site.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Changes will be posted on this
            page with an updated revision date. Continued use of our services after changes
            constitutes acceptance of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact us:
          </p>
          <ul>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:3865667339">(386) 566-7339</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:kwmobiletire@gmail.com">kwmobiletire@gmail.com</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
