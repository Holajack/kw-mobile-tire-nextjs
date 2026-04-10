import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, Phone, Tag, Shield } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Content is from our own hardcoded data files, not user input — safe to render as HTML
function renderMarkdownContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const text = line.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      elements.push(
        <h2 key={`h2-${i}`} id={id} className="font-heading text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 scroll-mt-24">
          {text}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${i}`} className="font-heading text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc ml-6 mb-4 space-y-1">
          {listItems.map((item, j) => (
            <li key={j} className="text-slate-600 dark:text-slate-400">{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\. /.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal ml-6 mb-4 space-y-1">
          {listItems.map((item, j) => (
            <li key={j} className="text-slate-600 dark:text-slate-400">{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p key={`p-${i}`} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {renderInline(line)}
        </p>
      );
    }
    i++;
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  // Split on bold markers and markdown links
  const parts = text.split(/(\*\*.+?\*\*|\[.+?\]\(.+?\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      // Handle bold wrapping a link: **[text](url)**
      const linkMatch = inner.match(/^\[(.+?)\]\((.+?)\)$/);
      if (linkMatch) {
        return <a key={i} href={linkMatch[2]} className="font-semibold text-primary hover:text-primary-dark underline transition-colors">{linkMatch[1]}</a>;
      }
      return <strong key={i} className="font-semibold text-slate-900 dark:text-white">{inner}</strong>;
    }
    // Handle plain markdown links: [text](url)
    const linkMatch = part.match(/^\[(.+?)\]\((.+?)\)$/);
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]} className="text-primary hover:text-primary-dark underline transition-colors">{linkMatch[1]}</a>;
    }
    return part;
  });
}

function extractHeadings(content: string) {
  return (content.match(/^## .+$/gm) || []).map((h) => {
    const text = h.replace("## ", "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return { text, id };
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "K&W Mobile Tire Service",
      url: "https://kwmobiletire.com",
    },
    publisher: {
      "@type": "Organization",
      name: "K&W Mobile Tire Service",
      logo: { "@type": "ImageObject", url: "https://kwmobiletire.com/logo.svg" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kwmobiletire.com/blog/${slug}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kwmobiletire.com/" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://kwmobiletire.com/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://kwmobiletire.com/blog/${slug}/` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Articles
          </Link>

          <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} read
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* TOC sidebar */}
            {headings.length > 0 && (
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Contents</p>
                  <nav className="space-y-2">
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className="block text-sm text-slate-500 hover:text-primary transition-colors leading-snug"
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Article */}
            <article className={headings.length > 0 ? "lg:col-span-3" : "lg:col-span-4 max-w-3xl"}>
              {renderMarkdownContent(post.content)}
            </article>
          </div>

          {/* Author box */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-900 rounded-xl p-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">K&W Mobile Tire Service</p>
                <p className="text-xs text-accent font-medium mb-1">Veteran-Owned & Operated</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Written by the K&W team. We share what we see in the field every day — real problems, real solutions, and practical advice for tire owners in Central Florida.
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          {otherPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-6">More Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-primary/50 transition-all"
                  >
                    <p className="text-xs text-slate-500 mb-1">{p.readTime} read</p>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {p.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-primary-dark rounded-2xl p-8 text-center text-white">
            <h3 className="font-heading text-2xl font-bold">Need Tire Service Now?</h3>
            <p className="mt-2 text-blue-100">We come to you across Volusia, Flagler, and Brevard Counties.</p>
            <a
              href="tel:3865667339"
              className="mt-4 inline-flex items-center gap-2 bg-white text-primary-dark px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call (386) 566-7339
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
