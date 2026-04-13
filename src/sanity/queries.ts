import { client } from "./client";

// ─── Blog Posts ───

export interface SanityBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  content: string;
  status: "draft" | "review" | "published";
}

const BLOG_POST_FIELDS = `
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  readTime,
  tags,
  content,
  status
`;

export async function getPublishedBlogPosts(): Promise<SanityBlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost" && status == "published"] | order(publishedAt desc) { ${BLOG_POST_FIELDS} }`
  );
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug && status == "published"][0] { ${BLOG_POST_FIELDS} }`,
    { slug }
  );
}

export async function getAllBlogSlugs(): Promise<string[]> {
  return client.fetch(
    `*[_type == "blogPost" && status == "published"].slug.current`
  );
}

// ─── Services ───

export interface SanityService {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  features: string[];
  details: string;
  order: number;
}

export async function getServices(): Promise<SanityService[]> {
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      "slug": slug.current,
      title,
      shortTitle,
      description,
      icon,
      features,
      details,
      order
    }`
  );
}

export async function getServiceBySlug(slug: string): Promise<SanityService | null> {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      shortTitle,
      description,
      icon,
      features,
      details
    }`,
    { slug }
  );
}

// ─── Reviews ───

export interface SanityReview {
  name: string;
  initials: string;
  text: string;
  rating: number;
  date: string;
  location: string;
}

export async function getReviews(): Promise<SanityReview[]> {
  return client.fetch(
    `*[_type == "review"] | order(_createdAt desc) {
      name,
      initials,
      text,
      rating,
      date,
      location
    }`
  );
}
