import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for K&W Mobile Tire Service. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: April 10, 2026</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert prose-headings:font-heading prose-headings:font-bold max-w-none">
          <h2>Information We Collect</h2>
          <p>
            When you contact K&W Mobile Tire Service through our website, phone, or quote request
            form, we may collect the following information:
          </p>
          <ul>
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address (if provided)</li>
            <li>Vehicle or equipment type</li>
            <li>Your location (for service dispatch)</li>
            <li>Description of the tire service needed</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your service requests and quote inquiries</li>
            <li>Dispatch our mobile tire service to your location</li>
            <li>Follow up on completed services</li>
            <li>Improve our services and customer experience</li>
            <li>Communicate important updates about your service</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may
            share your information only in the following circumstances:
          </p>
          <ul>
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect the safety and rights of our customers and business</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However,
            no method of transmission over the internet or electronic storage is 100% secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>Cookies and Website Analytics</h2>
          <p>
            Our website may use cookies and similar technologies to improve your browsing experience
            and analyze website traffic. You can control cookie preferences through your browser
            settings.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age. We do not knowingly
            collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this
            page with an updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy or how we handle your information,
            please contact us:
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
