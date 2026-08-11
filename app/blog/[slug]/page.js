import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import blogPosts from "@/data/blogPosts";
import contentStyles from "@/styles/ContentPage.module.css";
import styles from "@/styles/Article.module.css";
import CatCostaOExcavatiePentruFundatieInSibiu, {
    FAQS as CAT_COSTA_FAQS,
} from "@/components/blog/articles/CatCostaOExcavatiePentruFundatieInSibiu";

const ARTICLE_COMPONENTS = {
    "cat-costa-o-excavatie-pentru-fundatie-in-sibiu": CatCostaOExcavatiePentruFundatieInSibiu,
};

const ARTICLE_FAQS = {
    "cat-costa-o-excavatie-pentru-fundatie-in-sibiu": CAT_COSTA_FAQS,
};

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};

    const url = `https://www.hcn-construct.ro/blog/${post.slug}`;

    return {
        title: `${post.title} | HCN Construct`,
        description: post.description,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url,
            siteName: "HCN Construct",
            images: [
                {
                    url: `https://www.hcn-construct.ro${post.coverImage}`,
                    width: 1200,
                    height: 630,
                    alt: post.coverImageAlt,
                },
            ],
            type: "article",
            publishedTime: post.publishedDate,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [`https://www.hcn-construct.ro${post.coverImage}`],
        },
    };
}

export default async function BlogArticlePage({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return notFound();

    const ArticleBody = ARTICLE_COMPONENTS[slug];
    const faqs = ARTICLE_FAQS[slug];
    const url = `https://www.hcn-construct.ro/blog/${post.slug}`;

    return (
        <>
            <Header/>

            <PageHero title={post.title}/>

            <div className={contentStyles.body}>
                <div className={contentStyles.inner}>
                    <p className={styles.meta}>
                        <span>{new Date(post.publishedDate).toLocaleDateString("ro-RO", { year: "numeric", month: "long", day: "numeric" })}</span>
                        <span>·</span>
                        <span>{post.readingTime} citire</span>
                    </p>

                    <div className={styles.coverImage}>
                        <Image
                            src={post.coverImage}
                            alt={post.coverImageAlt}
                            width={1200}
                            height={630}
                        />
                    </div>

                    <ArticleBody/>

                    <p>
                        <Link href="/blog" className={styles.backLink}>← Înapoi la blog</Link>
                    </p>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {"@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://www.hcn-construct.ro/"},
                                {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.hcn-construct.ro/blog"},
                                {"@type": "ListItem", "position": 3, "name": post.title, "item": url},
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.description,
                            "datePublished": post.publishedDate,
                            "url": url,
                            "image": `https://www.hcn-construct.ro${post.coverImage}`,
                            "author": {"@type": "Organization", "name": "HCN Construct"},
                            "publisher": {"@type": "Organization", "name": "HCN Construct"},
                        },
                        ...(faqs ? [{
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map((item) => ({
                                "@type": "Question",
                                "name": item.q,
                                "acceptedAnswer": {"@type": "Answer", "text": item.a},
                            })),
                        }] : []),
                    ]),
                }}
            />
        </>
    );
}
