export interface Review {
  name: string;
  initials: string;
  text: string;
  rating: number;
  date: string;
  location: string;
}

export const reviews: Review[] = [
  {
    name: "Mike R.",
    initials: "MR",
    text: "Dustin came out to our job site in Daytona within 45 minutes and had our forklift tire replaced in under an hour. Saved us a full day of downtime. Will definitely call again.",
    rating: 5,
    date: "March 2026",
    location: "Daytona Beach, FL",
  },
  {
    name: "Sarah T.",
    initials: "ST",
    text: "Had a blowout on our travel trailer heading to Flagler Beach. K&W was there fast and had us back on the road. Professional, fair pricing, and genuinely helpful. Veteran-owned which we appreciate.",
    rating: 5,
    date: "February 2026",
    location: "Flagler Beach, FL",
  },
  {
    name: "James D.",
    initials: "JD",
    text: "We use K&W for our entire fleet of box trucks. Dustin comes to our yard on a schedule and inspects every tire. Haven't had a single roadside failure since we started the maintenance program.",
    rating: 5,
    date: "January 2026",
    location: "Port Orange, FL",
  },
  {
    name: "Carlos M.",
    initials: "CM",
    text: "Called on a Saturday morning with a flat on my enclosed trailer. Dustin showed up within the hour and got it fixed. Great service, great price, and a great guy.",
    rating: 5,
    date: "March 2026",
    location: "Palm Coast, FL",
  },
  {
    name: "Linda P.",
    initials: "LP",
    text: "Our Class A motorhome needed two new rear tires. Dustin came to the campground, brought the right tires, and had them on in no time. So much easier than trying to drive a motorhome to a shop.",
    rating: 5,
    date: "February 2026",
    location: "New Smyrna Beach, FL",
  },
  {
    name: "Tom H.",
    initials: "TH",
    text: "K&W handles all the tire work for our construction company. Skid steers, backhoes, dump trailers. They come to the site and get it done. No complaints, just solid work every time.",
    rating: 5,
    date: "January 2026",
    location: "Melbourne, FL",
  },
];
