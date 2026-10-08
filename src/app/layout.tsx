import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: '#0b0f0c',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: "Bryan Morrison - Cyber Security Engineer",
  description: "Bryan Morrison portfolio showcasing expertise in Cyber Security, DevSecOps, Cloud Security Engineering, and CI/CD Automation",
  keywords: ["Cybersecurity", "DevSecOps", "Cloud Security", "Splunk", "Container Security", "CI/CD", "Security Engineer", "AI Agents", "MCP"],
  authors: [{ name: "Bryan Morrison" }],
  creator: "Bryan Morrison",
  metadataBase: new URL('https://www.bryanmorrison.tech'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bryanmorrison.tech',
    siteName: 'Bryan Morrison Portfolio',
    title: 'Bryan Morrison - Cyber Security Engineer',
    description: 'Cybersecurity professional with 12+ years of experience in Splunk, cloud security, container security, and CI/CD security scanning.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryan Morrison - Cyber Security Engineer',
    description: 'Cybersecurity professional with 12+ years of experience in Splunk, cloud security, container security, and CI/CD security scanning.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bryan Morrison',
  jobTitle: 'Cyber Security Engineer',
  description: 'Cybersecurity professional with 12+ years of experience in Splunk, cloud security, container security, and CI/CD security scanning.',
  url: 'https://www.bryanmorrison.tech',
  sameAs: [
    'https://github.com/bmorri13',
  ],
  knowsAbout: [
    'Cybersecurity',
    'DevSecOps',
    'Cloud Security',
    'Splunk',
    'Container Security',
    'Kubernetes Security',
    'CI/CD Automation',
    'SOAR',
    'AI Agents',
    'Model Context Protocol (MCP)',
    'LLM Application Development',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
