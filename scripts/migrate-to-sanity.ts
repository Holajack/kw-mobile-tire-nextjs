/**
 * Migration script: Push hardcoded data into Sanity.
 *
 * Usage:
 *   npx tsx scripts/migrate-to-sanity.ts
 *
 * Requires SANITY_API_TOKEN env var with write access.
 * Get one from: https://www.sanity.io/manage/project/8e36fblj/api#tokens
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8e36fblj",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// ─── Blog Posts (inline to avoid TS path resolution issues in scripts) ───

const blogPosts = [
  {
    slug: "when-to-replace-rv-tires",
    title: "When to Replace RV Tires: Age, Mileage, and Warning Signs",
    excerpt: "RV tires degrade faster in Florida's heat and UV. Learn the key indicators that it's time for new rubber — before a blowout ruins your trip.",
    date: "2026-03-15",
    readTime: "12 min",
    tags: ["RV Tires", "Tire Safety", "Maintenance"],
  },
  {
    slug: "commercial-fleet-tire-maintenance",
    title: "Commercial Fleet Tire Maintenance: A Manager's Complete Guide",
    excerpt: "Proper fleet tire maintenance cuts costs and prevents downtime. Here's how Central Florida fleet managers should approach tire care year-round.",
    date: "2026-03-01",
    readTime: "14 min",
    tags: ["Commercial Tires", "Fleet Management", "Maintenance"],
  },
  {
    slug: "trailer-tire-safety-guide",
    title: "Trailer Tire Safety: The Complete Guide for Florida Owners",
    excerpt: "Trailer tires fail differently than car tires. Learn about load ratings, age limits, and the Florida-specific risks that catch trailer owners off guard.",
    date: "2026-02-15",
    readTime: "11 min",
    tags: ["Trailer Tires", "Tire Safety", "Florida"],
  },
];

const services = [
  {
    slug: "commercial-trucks",
    title: "Commercial Truck Tire Service",
    shortTitle: "Commercial Trucks",
    description: "On-site tire repair and replacement for semi-trucks, box trucks, and commercial fleet vehicles.",
    icon: "Truck",
    features: ["Semi-truck tire replacement", "Box truck tire service", "Fleet vehicle tire repair", "Roadside tire change", "Tire pressure monitoring"],
    details: "Whether your semi is stranded on I-95 or your box truck fleet needs scheduled maintenance at your yard, K&W comes to you. We carry the most common commercial truck tire sizes and can have you back on the road fast. Our mobile service trucks are equipped with heavy-duty jacks, impact tools, and torque wrenches rated for commercial applications.",
    order: 1,
  },
  {
    slug: "trailers",
    title: "Trailer Tire Service",
    shortTitle: "Trailers",
    description: "Utility, flatbed, enclosed, and boat trailers. On-site service across Central Florida.",
    icon: "Container",
    features: ["Utility trailer tires", "Flatbed trailer tires", "Enclosed cargo trailer tires", "Boat trailer tires", "Horse trailer tires"],
    details: "Trailer tires are often overlooked until failure. We service every type of trailer — from utility and flatbed to enclosed cargo and boat trailers. Because trailers sit for extended periods, tire age and dry rot are common issues in Florida. We inspect sidewalls, check DOT date codes, and replace tires on-site so you don't have to unhitch and tow.",
    order: 2,
  },
  {
    slug: "rvs-motorhomes",
    title: "RV & Motorhome Tire Service",
    shortTitle: "RVs & Motorhomes",
    description: "Motorhomes, travel trailers, fifth wheels, and campers. Mobile service at your location.",
    icon: "Caravan",
    features: ["Class A motorhome tires", "Class C motorhome tires", "Travel trailer tires", "Fifth wheel tires", "Camper van tires"],
    details: "RV tires face unique challenges in Florida — extreme heat, UV exposure, and long periods of inactivity that cause dry rot. We service motorhomes, travel trailers, fifth wheels, and campers right at your campground, storage lot, or driveway. No need to drive your RV to a shop. We carry popular RV tire sizes and can order specialty sizes with fast turnaround.",
    order: 3,
  },
  {
    slug: "heavy-equipment",
    title: "Heavy Equipment Tire Service",
    shortTitle: "Heavy Equipment",
    description: "Forklifts, skid steers, backhoes, tractors, and construction machinery tire service.",
    icon: "HardHat",
    features: ["Forklift tire replacement", "Skid steer tires", "Backhoe and loader tires", "Tractor tires", "Construction equipment tires"],
    details: "When heavy equipment is down, every hour costs money. K&W provides on-site tire service for forklifts, skid steers, backhoes, tractors, and other construction equipment. We come directly to your job site or warehouse. Our service trucks carry the tools needed for heavy equipment tires, including bead breakers and high-capacity jacks.",
    order: 4,
  },
];

const reviews = [
  { name: "Mike R.", initials: "MR", text: "Dustin came out to our job site in Daytona within 45 minutes and had our forklift tire replaced in under an hour. Saved us a full day of downtime. Will definitely call again.", rating: 5, date: "March 2026", location: "Daytona Beach, FL" },
  { name: "Sarah T.", initials: "ST", text: "Had a blowout on our travel trailer heading to Flagler Beach. K&W was there fast and had us back on the road. Professional, fair pricing, and genuinely helpful. Veteran-owned which we appreciate.", rating: 5, date: "February 2026", location: "Flagler Beach, FL" },
  { name: "James D.", initials: "JD", text: "We use K&W for our entire fleet of box trucks. Dustin comes to our yard on a schedule and inspects every tire. Haven't had a single roadside failure since we started the maintenance program.", rating: 5, date: "January 2026", location: "Port Orange, FL" },
  { name: "Carlos M.", initials: "CM", text: "Called on a Saturday morning with a flat on my enclosed trailer. Dustin showed up within the hour and got it fixed. Great service, great price, and a great guy.", rating: 5, date: "March 2026", location: "Palm Coast, FL" },
  { name: "Linda P.", initials: "LP", text: "Our Class A motorhome needed two new rear tires. Dustin came to the campground, brought the right tires, and had them on in no time. So much easier than trying to drive a motorhome to a shop.", rating: 5, date: "February 2026", location: "New Smyrna Beach, FL" },
  { name: "Tom H.", initials: "TH", text: "K&W handles all the tire work for our construction company. Skid steers, backhoes, dump trailers. They come to the site and get it done. No complaints, just solid work every time.", rating: 5, date: "January 2026", location: "Melbourne, FL" },
];

async function migrate() {
  console.log("Starting migration to Sanity...\n");

  if (!process.env.SANITY_API_TOKEN) {
    console.error("ERROR: Set SANITY_API_TOKEN environment variable first.");
    console.error("Get a token from: https://www.sanity.io/manage/project/8e36fblj/api#tokens");
    process.exit(1);
  }

  // Blog Posts (metadata only — content is too large to inline here)
  console.log("--- Blog Posts (metadata) ---");
  for (const post of blogPosts) {
    const doc = {
      _type: "blogPost",
      _id: `blogPost-${post.slug}`,
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      publishedAt: post.date,
      readTime: post.readTime,
      tags: post.tags,
      content: "Content will be added via the Studio. See src/data/blog-posts.ts for the original.",
      status: "published",
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${post.title}`);
  }

  // Services
  console.log("\n--- Services ---");
  for (const svc of services) {
    const doc = {
      _type: "service",
      _id: `service-${svc.slug}`,
      title: svc.title,
      shortTitle: svc.shortTitle,
      slug: { _type: "slug", current: svc.slug },
      description: svc.description,
      icon: svc.icon,
      features: svc.features,
      details: svc.details,
      order: svc.order,
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${svc.shortTitle}`);
  }

  // Reviews
  console.log("\n--- Reviews ---");
  for (const rev of reviews) {
    const doc = {
      _type: "review",
      _id: `review-${rev.initials.toLowerCase()}`,
      name: rev.name,
      initials: rev.initials,
      text: rev.text,
      rating: rev.rating,
      date: rev.date,
      location: rev.location,
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${rev.name}`);
  }

  console.log("\n✅ Migration complete!");
  console.log("Next steps:");
  console.log("  1. Open /studio to verify all content");
  console.log("  2. Copy full blog content from src/data/blog-posts.ts into each blog post in the Studio");
  console.log("  3. Once verified, the hardcoded data files serve as fallback only");
}

migrate().catch(console.error);
