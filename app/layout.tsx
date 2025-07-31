import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nadikaprabhath.me'),
  title: "Nadika Prabhath - Full Stack Developer | Software Engineer | Web Developer",
  description:
    "Nadika Prabhath (Nadika Gamage) - Professional Full Stack Developer with 5+ years experience in React, Next.js, Node.js. Expert in modern web development, software architecture, and innovative digital solutions.",
  keywords: [
    "Nadika Prabhath",
    "Nadika Prabath",
    "Nadika Gamage",
    "Nadika",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Architect",
    "Matara Sri Lanka Developer",
    "Sri Lankan Developer",
  ],
  authors: [{ name: "Nadika Prabhath" }],
  creator: "Nadika Prabhath",
  publisher: "Nadika Prabhath",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nadikaprabhath.dev",
    title: "Nadika Prabhath - Full Stack Developer | Software Engineer",
    description:
      "Professional Full Stack Developer specializing in React, Next.js, and Node.js. Creating innovative digital solutions with 5+ years of experience.",
    siteName: "Nadika Prabhath Portfolio",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Nadika Prabhath - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadika Prabhath - Full Stack Developer",
    description: "Professional Full Stack Developer specializing in React, Next.js, and Node.js",
    images: ["/profile.webp"],
    creator: "@nadikaprabhath",
  },
  verification: {
    google: "google-site-verification=2SLGNqOoZKnSUryUpekKYjWV6kQMLgBy8kYbqFX4Xog",
  },
  alternates: {
    canonical: "https://nadikaprabhath.dev",
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nadika Prabhath",
  alternateName: ["Nadika Prabath", "Nadika Gamage"],
  jobTitle: "Full Stack Developer",
  description:
    "Professional Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies",
  url: "https://nadikaprabhath.dev",
  image: "https://nadikaprabhath.dev/profile.webp",
  email: "nadikagamage11@gmail.com",
  telephone: "+94787358510",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Matara",
    addressCountry: "Sri Lanka",
  },
  sameAs: [
    "https://github.com/nadikaprabhath",
    "https://linkedin.com/in/nadikaprabhath",
    "https://twitter.com/nadikaprabhath",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Full Stack Development",
    "Web Development",
    "Software Engineering",
    "Frontend Development",
    "Backend Development",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Technology",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance Developer",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://nadikaprabhath.dev" />
        <meta name="google-site-verification" content="2SLGNqOoZKnSUryUpekKYjWV6kQMLgBy8kYbqFX4Xog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#58A6FF" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
