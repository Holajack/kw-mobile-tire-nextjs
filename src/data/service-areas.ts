export interface City {
  slug: string;
  name: string;
  county: string;
  countySlug: string;
  description: string;
  population?: string;
  keyFeature: string;
}

export interface County {
  slug: string;
  name: string;
  description: string;
  cities: City[];
}

export const counties: County[] = [
  {
    slug: "volusia-county",
    name: "Volusia County",
    description: "Mobile tire service covering Daytona Beach, DeLand, New Smyrna Beach, Deltona, Ormond Beach, Port Orange, DeBary, and Orange City.",
    cities: [
      { slug: "daytona-beach", name: "Daytona Beach", county: "Volusia County", countySlug: "volusia-county", description: "Mobile tire service in Daytona Beach for commercial trucks, trailers, RVs, and heavy equipment. Home to Daytona International Speedway and heavy tourism traffic.", population: "72,000", keyFeature: "Daytona International Speedway area" },
      { slug: "deland", name: "DeLand", county: "Volusia County", countySlug: "volusia-county", description: "On-site tire repair and replacement in DeLand, FL. Serving local businesses, construction sites, and RV parks.", population: "40,000", keyFeature: "Historic downtown and Stetson University" },
      { slug: "new-smyrna-beach", name: "New Smyrna Beach", county: "Volusia County", countySlug: "volusia-county", description: "Mobile tire service in New Smyrna Beach for boats, trailers, RVs, and commercial vehicles along the coast.", population: "30,000", keyFeature: "Coastal tourism and marine industries" },
      { slug: "deltona", name: "Deltona", county: "Volusia County", countySlug: "volusia-county", description: "Tire service in Deltona for the growing residential and commercial community west of Daytona.", population: "95,000", keyFeature: "Largest city in Volusia County" },
      { slug: "ormond-beach", name: "Ormond Beach", county: "Volusia County", countySlug: "volusia-county", description: "On-site tire service in Ormond Beach covering commercial and residential areas north of Daytona.", population: "45,000", keyFeature: "Gateway to the Ormond Scenic Loop" },
      { slug: "port-orange", name: "Port Orange", county: "Volusia County", countySlug: "volusia-county", description: "Mobile tire repair in Port Orange, FL. Serving the business corridor along Dunlawton Avenue and US-1.", population: "65,000", keyFeature: "Growing commercial district on US-1" },
      { slug: "debary", name: "DeBary", county: "Volusia County", countySlug: "volusia-county", description: "Tire service in DeBary along the I-4 corridor for commercial vehicles and heavy equipment.", population: "22,000", keyFeature: "I-4 corridor access point" },
      { slug: "orange-city", name: "Orange City", county: "Volusia County", countySlug: "volusia-county", description: "Mobile tire service in Orange City near Blue Spring State Park and the US-17/92 business corridor.", population: "12,000", keyFeature: "Blue Spring State Park area" },
    ],
  },
  {
    slug: "flagler-county",
    name: "Flagler County",
    description: "Mobile tire service covering Palm Coast, Flagler Beach, and Bunnell in Flagler County, FL.",
    cities: [
      { slug: "palm-coast", name: "Palm Coast", county: "Flagler County", countySlug: "flagler-county", description: "On-site tire service in Palm Coast for the fastest-growing city in Flagler County. Commercial and residential.", population: "95,000", keyFeature: "One of Florida's fastest-growing cities" },
      { slug: "flagler-beach", name: "Flagler Beach", county: "Flagler County", countySlug: "flagler-county", description: "Mobile tire repair in Flagler Beach along the A1A coastal corridor.", population: "5,500", keyFeature: "A1A coastal corridor" },
      { slug: "bunnell", name: "Bunnell", county: "Flagler County", countySlug: "flagler-county", description: "Tire service in Bunnell, the county seat of Flagler County, near US-1 and I-95.", population: "3,000", keyFeature: "Flagler County seat near I-95" },
    ],
  },
  {
    slug: "brevard-county",
    name: "Brevard County",
    description: "Mobile tire service covering Melbourne, Titusville, Cocoa, Palm Bay, Merritt Island, Rockledge, and Cape Canaveral.",
    cities: [
      { slug: "melbourne", name: "Melbourne", county: "Brevard County", countySlug: "brevard-county", description: "Mobile tire service in Melbourne for the Space Coast's commercial hub. Trucks, trailers, RVs, and heavy equipment.", population: "85,000", keyFeature: "Space Coast commercial hub" },
      { slug: "titusville", name: "Titusville", county: "Brevard County", countySlug: "brevard-county", description: "On-site tire repair in Titusville near Kennedy Space Center. Commercial and industrial tire service.", population: "50,000", keyFeature: "Gateway to Kennedy Space Center" },
      { slug: "cocoa", name: "Cocoa", county: "Brevard County", countySlug: "brevard-county", description: "Tire service in Cocoa along US-1 and the Indian River industrial corridor.", population: "21,000", keyFeature: "Historic Cocoa Village and US-1 corridor" },
      { slug: "palm-bay", name: "Palm Bay", county: "Brevard County", countySlug: "brevard-county", description: "Mobile tire service in Palm Bay, Brevard County's largest city by population.", population: "120,000", keyFeature: "Brevard County's largest city" },
      { slug: "merritt-island", name: "Merritt Island", county: "Brevard County", countySlug: "brevard-county", description: "Tire service on Merritt Island near the Kennedy Space Center and Merritt Island National Wildlife Refuge.", population: "36,000", keyFeature: "Near Kennedy Space Center" },
      { slug: "rockledge", name: "Rockledge", county: "Brevard County", countySlug: "brevard-county", description: "On-site tire repair in Rockledge along US-1 and the I-95 business corridor.", population: "28,000", keyFeature: "Central Brevard along US-1" },
      { slug: "cape-canaveral", name: "Cape Canaveral", county: "Brevard County", countySlug: "brevard-county", description: "Mobile tire service in Cape Canaveral for the port area and space industry support vehicles.", population: "10,000", keyFeature: "Port Canaveral and cruise terminal" },
    ],
  },
];

export function getAllCities(): City[] {
  return counties.flatMap((c) => c.cities);
}

export function getCityBySlug(countySlug: string, citySlug: string): City | undefined {
  const county = counties.find((c) => c.slug === countySlug);
  return county?.cities.find((city) => city.slug === citySlug);
}

export function getCountyBySlug(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
