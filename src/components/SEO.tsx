import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    type?: string;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "Akila Anuranga Millagahawatta - Software Engineer",
    description = "Software Engineer specializing in AI-driven solutions, web development, and automation. Experienced in React, Python, PHP, and modern web technologies.",
    url = "https://akilaanuranga.github.io/akila-anuranga/",
    image = "https://akilaanuranga.github.io/akila-anuranga/assets/akila_millagahawatta-DRXA-B63.png",
    type = "website",
    keywords = "Software Engineer, AI Developer, React Developer, Python Developer, Web Development, Automation, Laravel, Node.js, Portfolio, Akila Anuranga"
}) => {
    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Akila Anuranga Millagahawatta" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#FF014F" />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Akila Anuranga Millagahawatta - Software Engineer" />
            <meta property="og:site_name" content="Akila Anuranga Portfolio" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content="Akila Anuranga Millagahawatta - Software Engineer" />
            <meta name="twitter:creator" content="@akilaanuranga" />
            <meta name="twitter:site" content="@akilaanuranga" />

            {/* Additional SEO Meta Tags */}
            <meta name="application-name" content="Akila Portfolio" />
            <meta name="apple-mobile-web-app-title" content="Akila Portfolio" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Akila Anuranga Millagahawatta",
                    "jobTitle": "Software Engineer",
                    "description": "Software Engineer specializing in AI-driven solutions, web development, and automation",
                    "url": url,
                    "image": image,
                    "sameAs": [
                        "https://linkedin.com/in/akila-anuranga",
                        "https://github.com/AkilaAnuranga"
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Balangoda",
                        "addressCountry": "Sri Lanka"
                    },
                    "email": "anurangaakila@gmail.com",
                    "telephone": "+94 770 534 618",
                    "knowsAbout": [
                        "React",
                        "Python",
                        "JavaScript",
                        "TypeScript",
                        "AI/ML",
                        "Web Development",
                        "Automation"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
