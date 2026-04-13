import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { blogPosts as hardcodedPosts } from "@/data/blog-posts";
import { getPublishedBlogPosts, type SanityBlogPost } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Expert tire care guides, maintenance tips, and industry insights from K&W Mobile Tire Service. Serving Volusia, Flagler, and Brevard Counties.",
  alternates: { canonical: "/blog/" },
};

export const revalidate = 60;

export default async function BlogPage() {
  let sanityPosts: SanityBlogPost[] = [];
  try {
    sanityPosts = await getPublishedBlogPosts();
  } catch {
    // Sanity fetch failed — fall back to hardcoded
  }

  const posts = sanityPosts.length > 0
    ? sanityPosts.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        date: p.publishedAt,
        readTime: p.readTime,
        tags: p.tags || [],
        content: p.content,
      }))
    : hardcodedPosts;
  return (
    <>
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Articles</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-2">
              Tire Care Guides & Tips
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Practical advice from the field. Learn how to extend tire life, prevent failures, and make smarter decisions about your tires.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 h-full"
                >
                  {/* Color bar */}
                  <div className="h-1.5 bg-gradient-to-r from-primary to-primary-light" />

                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-slate-600 dark:text-slate-400 flex-1 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all mt-auto">
                      Read article <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
