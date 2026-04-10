export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
  details: string;
}

export const services: Service[] = [
  {
    slug: "commercial-trucks",
    title: "Commercial Truck Tire Service",
    shortTitle: "Commercial Trucks",
    description: "On-site tire repair and replacement for semi-trucks, box trucks, and commercial fleet vehicles.",
    icon: "Truck",
    features: [
      "Semi-truck tire replacement",
      "Box truck tire service",
      "Fleet vehicle tire repair",
      "Roadside tire change",
      "Tire pressure monitoring",
    ],
    details: "Whether your semi is stranded on I-95 or your box truck fleet needs scheduled maintenance at your yard, K&W comes to you. We carry the most common commercial truck tire sizes and can have you back on the road fast. Our mobile service trucks are equipped with heavy-duty jacks, impact tools, and torque wrenches rated for commercial applications.",
  },
  {
    slug: "trailers",
    title: "Trailer Tire Service",
    shortTitle: "Trailers",
    description: "Utility, flatbed, enclosed, and boat trailers. On-site service across Central Florida.",
    icon: "Container",
    features: [
      "Utility trailer tires",
      "Flatbed trailer tires",
      "Enclosed cargo trailer tires",
      "Boat trailer tires",
      "Horse trailer tires",
    ],
    details: "Trailer tires are often overlooked until failure. We service every type of trailer — from utility and flatbed to enclosed cargo and boat trailers. Because trailers sit for extended periods, tire age and dry rot are common issues in Florida. We inspect sidewalls, check DOT date codes, and replace tires on-site so you don't have to unhitch and tow.",
  },
  {
    slug: "rvs-motorhomes",
    title: "RV & Motorhome Tire Service",
    shortTitle: "RVs & Motorhomes",
    description: "Motorhomes, travel trailers, fifth wheels, and campers. Mobile service at your location.",
    icon: "Caravan",
    features: [
      "Class A motorhome tires",
      "Class C motorhome tires",
      "Travel trailer tires",
      "Fifth wheel tires",
      "Camper van tires",
    ],
    details: "RV tires face unique challenges in Florida — extreme heat, UV exposure, and long periods of inactivity that cause dry rot. We service motorhomes, travel trailers, fifth wheels, and campers right at your campground, storage lot, or driveway. No need to drive your RV to a shop. We carry popular RV tire sizes and can order specialty sizes with fast turnaround.",
  },
  {
    slug: "heavy-equipment",
    title: "Heavy Equipment Tire Service",
    shortTitle: "Heavy Equipment",
    description: "Forklifts, skid steers, backhoes, tractors, and construction machinery tire service.",
    icon: "HardHat",
    features: [
      "Forklift tire replacement",
      "Skid steer tires",
      "Backhoe and loader tires",
      "Tractor tires",
      "Construction equipment tires",
    ],
    details: "When heavy equipment is down, every hour costs money. K&W provides on-site tire service for forklifts, skid steers, backhoes, tractors, and other construction equipment. We come directly to your job site or warehouse. Our service trucks carry the tools needed for heavy equipment tires, including bead breakers and high-capacity jacks.",
  },
];
