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
  themeColor: '#1C1C1C',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: "Bryan Morrison - Cyber Security Engineer",
  description: "Bryan Morrison portfolio showcasing expertise in Cyber Security, DevSecOps, Cloud Security Engineering, and CI/CD Automation",
  keywords: ["Cybersecurity", "DevSecOps", "Cloud Security", "Splunk", "Container Security", "CI/CD", "Security Engineer"],
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
        <noscript>
          <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#1C1C1C', color: '#00FF00' }}>
            Please enable JavaScript to view this portfolio site.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
