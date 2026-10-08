import Image from 'next/image'
import portfolio_image from '../../public/portfolio_image.png'
import ProjectsSection from '@/components/ProjectsSection'
import CertificationsSection from '@/components/CertificationsSection'
import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";

const EMAIL = "bryanmorrison017@gmail.com";
const GITHUB = "https://github.com/bmorri13";

export default function Home() {
  const roles = [
    "DevSecOps",
    "Cloud Security",
    "Container Security",
    "Data Engineering",
    "SIEM Engineering",
    "CI / CD Automation",
  ];

  const skills = [
    "Splunk",
    "Cloud Security",
    "Container Security",
    "Kubernetes Security",
    "CI / CD Pipeline Automation",
    "SOAR Automation",
  ];

  const projects = [
    {
      title: "Daily News App",
      description: "Claude-curated daily digests from 20+ RSS feeds.",
      content: "AI-powered news aggregator using Claude AI to curate daily digests from 20+ RSS feeds across Cyber Security, AI, Cloud, and Crypto.",
      stack: ["Claude AI", "FastAPI", "Next.js 16", "PostgreSQL", "Docker"],
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/daily_news_app"
      }
    },
    {
      title: "Homelab",
      description: "The test bench for everything I learn.",
      content: "Projects and configurations for my homelab running on Proxmox & K3s, which I lean on heavily for learning and testing new technologies.",
      stack: ["Proxmox", "K3s", "Kubernetes"],
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/homelab"
      }
    },
    {
      title: "AWS Data Lake",
      description: "A data lake on S3, governed by Lake Formation.",
      content: "Data lake solution built on AWS Lake Formation with AWS Glue, AWS Athena, and AWS QuickSight. Fully deployable via Terraform.",
      stack: ["Lake Formation", "Glue", "Athena", "QuickSight", "Terraform"],
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/aws_s3_datalake"
      }
    },
    {
      title: "Vector: Splunk HEC to S3",
      description: "Splunk HEC ingestion routed into a partitioned S3 data lake.",
      content: "Uses Vector to receive data via the Splunk HTTP Event Collector and route it to an AWS S3 bucket in a partitioned format, ready for ingestion into an S3 data lake.",
      stack: ["Vector", "Splunk HEC", "AWS S3", "Docker"],
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/vector_hec_to_s3_docker"
      }
    }
  ];

  const certifications = [
    {
      src: "/certs/certification-splunk-enterprise-certified-architect.png",
      title: "Splunk Enterprise Certified Architect",
      issuer: "Splunk"
    },
    {
      src: "/certs/certification-splunk-enterprise-security-certified-admin.png",
      title: "Splunk Enterprise Security Certified Admin",
      issuer: "Splunk"
    },
    {
      src: "/certs/splunk-enterprise-certified-admin.png",
      title: "Splunk Enterprise Certified Admin",
      issuer: "Splunk"
    },
    {
      src: "/certs/aws_solutions_arch_assoc.png",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "AWS"
    },
    {
      src: "/certs/azure-fundamentals-e1725916375391.png",
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft"
    },
    {
      src: "/certs/cribl_certified_user_badge.png",
      title: "Cribl Certified User",
      issuer: "Cribl"
    },
    {
      src: "/certs/tines_core_cert.png",
      title: "Tines Core Certification",
      issuer: "Tines"
    }
  ];

  const nav = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
  ];

  return (
    <div className="min-h-screen bg-ink text-fg">
      <a href="#main-content" className="skip-link focus-ring">
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/80 backdrop-blur-md supports-[backdrop-filter]:bg-ink/65">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="focus-ring rounded-sm font-semibold tracking-tight text-fg">
            Bryan Morrison<span className="text-signal">.</span>
          </a>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-1 text-sm">
              {nav.map((item) => (
                <li key={item.href} className="hidden sm:block">
                  <a
                    href={item.href}
                    className="focus-ring rounded-md px-3 py-2 text-fg-2 transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="focus-ring ml-2 rounded-md border border-line-strong px-3 py-1.5 text-fg transition-colors hover:border-signal hover:text-signal"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hero */}
        <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-line bg-[radial-gradient(ellipse_60%_50%_at_75%_45%,#13201a_0%,transparent_70%)]">
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.35fr_1fr] md:pb-28 md:pt-24 lg:gap-20">
            <div className="animate-resolve">
              <p className="mb-6 flex items-center gap-2 text-sm text-fg-2">
                <MapPin size={16} className="text-signal" aria-hidden="true" />
                Virginia, USA
                <span className="mx-1 text-line-strong" aria-hidden="true">/</span>
                <span className="tabular">12+ years in security</span>
              </p>

              <h1
                id="hero-heading"
                className="text-[clamp(3rem,9vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-fg"
              >
                Bryan Morrison
              </h1>

              <p className="mt-6 max-w-[34ch] text-xl leading-snug text-fg sm:text-2xl">
                Security engineer building secure pipelines, cloud platforms, and{" "}
                <span className="text-signal">SIEM</span> tooling.
              </p>

              <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-fg-2 sm:text-lg">
                Extensive background in DevSecOps, Cloud Security, Container Security, and Data Engineering, and expanding my knowledge around machine learning and AI.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-fg-3" aria-label="Focus areas">
                {roles.map((role) => (
                  <li key={role} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-signal-dim" aria-hidden="true" />
                    {role}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="focus-ring group inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-semibold text-signal-ink transition-colors hover:bg-[#6af590]"
                >
                  <Mail size={16} aria-hidden="true" />
                  Email me
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-fg-3"
                >
                  <Github size={16} aria-hidden="true" />
                  GitHub
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[22rem] md:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-ink-raised shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7),0_12px_24px_-12px_rgba(0,0,0,0.5)]">
                <Image
                  src={portfolio_image}
                  alt="Isometric illustration of server racks on a circuit board"
                  className="aspect-square w-full object-cover"
                  sizes="(min-width: 768px) 420px, 352px"
                  priority
                />
                <div
                  className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-transparent to-[color-mix(in_srgb,var(--signal)_35%,transparent)]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-heading" className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr] md:py-28">
            <h2 id="about-heading" className="text-3xl font-semibold tracking-[-0.03em] text-fg md:text-4xl">
              About
            </h2>
            <div>
              <p className="max-w-[62ch] text-lg leading-relaxed text-fg-2 sm:text-xl">
                Cybersecurity professional with <span className="text-fg">12+ years of experience</span> in Splunk, cloud security, container security, and CI/CD security scanning. I&apos;ve worked for <span className="text-fg">Fortune 500 companies and government agencies</span>, strengthening their security posture and ensuring alignment with industry best practices.
              </p>

              <h3 className="mt-14 text-sm font-medium text-fg-3">Core skills</h3>
              <ul className="mt-4 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 border-b border-line py-4 font-medium text-fg">
                    <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ProjectsSection projects={projects} />

        <CertificationsSection certifications={certifications} />

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
            <h2
              id="contact-heading"
              className="max-w-[16ch] text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1] tracking-[-0.04em] text-fg"
            >
              Securing something interesting?
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg text-fg-2">
              I&apos;m always happy to talk detection engineering, cloud security, or homelab builds.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="focus-ring group mt-10 inline-flex items-center gap-3 rounded-sm text-xl font-medium text-signal sm:text-2xl"
            >
              <span className="underline decoration-signal/40 underline-offset-[0.3em] transition-colors group-hover:decoration-signal">
                {EMAIL}
              </span>
              <ArrowUpRight
                size={24}
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-fg-3 sm:flex-row sm:justify-between sm:px-8">
          <p>
            &copy; <span className="tabular">{new Date().getFullYear()}</span> Bryan Morrison
          </p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
