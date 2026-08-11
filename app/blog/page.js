import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import blogPosts from "@/data/blogPosts";
import styles from "@/styles/ContentPage.module.css";

export const metadata = {
    title: "Blog | HCN Construct",
    description: "Sfaturi și informații utile despre excavații, demolări, terasamente și închiriere utilaje în Sibiu, direct de la HCN Construct.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog | HCN Construct",
        description: "Sfaturi și informații utile despre excavații, demolări și terasamente în Sibiu.",
        url: "https://www.hcn-construct.ro/blog",
        siteName: "HCN Construct",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | HCN Construct",
        description: "Sfaturi și informații utile despre excavații, demolări și terasamente în Sibiu.",
    },
};

export default function BlogPage() {
    return (
        <>
            <Header/>

            <PageHero
                title="Blog"
                intro="Sfaturi și informații utile despre excavații, demolări, terasamente și închiriere utilaje în Sibiu."
            />

            <div className={styles.body}>
                <div className={styles.inner}>
                    <div className={styles.grid} style={{"--grid-cols": 1}}>
                        {blogPosts.map((post) => (
                            <div key={post.slug} className={styles.card}>
                                <h2 className={styles.cardTitle}>
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p>{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className={styles.inlineLink}>
                                    Citește articolul →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Blog HCN Construct",
                        "url": "https://www.hcn-construct.ro/blog",
                        "blogPost": blogPosts.map((post) => ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "url": `https://www.hcn-construct.ro/blog/${post.slug}`,
                            "datePublished": post.publishedDate,
                        })),
                    }),
                }}
            />
        </>
    );
}
