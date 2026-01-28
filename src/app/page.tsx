'use client'

import Image from 'next/image'
import portfolio_image from '../../public/portfolio_image.png'
import ProjectsSection from '@/components/ProjectsSection'
import { Github, Mail, MapPin, Terminal, Shield, Cloud, Container } from "lucide-react";
import CertificationsSection from '@/components/CertificationsSection'

export default function Home() {
  const skills = [
    { name: "Splunk", icon: Terminal },
    { name: "Cloud Security", icon: Cloud },
    { name: "Container Security", icon: Container },
    { name: "CI / CD Pipeline Automation", icon: Terminal },
    { name: "Kubernetes Security", icon: Shield },
    { name: "SOAR Automation", icon: Shield },
  ];
  const projects = [
     {
      title: "Homelab",
      description: "Repository for my homelab projects",
      content: "This repository contains various projects and configurations for my homelab running on Proxmox & K3s which I leverage heavily for learning and testing new technologies.",
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/homelab"
      }
    },
    {
      title: "AWS Data Lake",
      description: "AWS Data Lake leveraging S3 and supporting technologies",
      content: "Developed a data lake solution leveraging AWS services via Lake Formation to include AWS Glue, AWS Athena and, AWS Quicksight. Fully deployable via Terraform.",
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/aws_s3_datalake"
      }
    },
    {
      title: "Vector - Splunk HEC to S3 Docker Deployment",
      description: "Setting up Splunk for enterprise-wide operations and security monitoring",
      content: "Developed a solution utlizing Vector to receive data via Splunk HTTP Event Collector and route data to an AWS S3 bucket in a partitioned format to ingest data into an AWS S3 Data lake.",
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/vector_hec_to_s3_docker"
      }
    },
    {
      title: "Daily News App",
      description: "AI-powered news aggregator using Claude AI to curate daily digests",
      content: "AI-powered news aggregator using Claude AI to curate daily digests from 20+ RSS feeds across Cyber Security, AI, Cloud, and Crypto. Built with FastAPI, Next.js 16, PostgreSQL, and Docker.",
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/daily_news_app"
      }
    }
  ];

  const certifications = [ 
    {
      src: "/certs/aws_solutions_arch_assoc.png",
      alt: "AWS Certified Solutions Architect - Associate",
      title: "AWS Certified Solutions Architect - Associate"
    },
    {
      src: "/certs/certification-splunk-enterprise-certified-architect.png",
      alt: "Splunk Enterpirse Certfied Architect",
      title: "Splunk Enterpirse Certfied Architect"
    },
    {
      src: "/certs/certification-splunk-enterprise-security-certified-admin.png",
      alt: "Splunk Enterprise Security Certified Admin",
      title: "Splunk Enterprise Security Certified Admin"
    },
    {
      src: "/certs/splunk-enterprise-certified-admin.png",
      alt: "Splunk Enterprise Certified Admin",
      title: "Splunk Enterprise Certified Admin"
    },
    {
      src: "/certs/cribl_certified_user_badge.png",
      alt: "Cribl - Certified User",
      title: "Cribl - Certified User"
    },
    {
      src: "/certs/azure-fundamentals-e1725916375391.png",
      alt: "Microsoft Certified Azure Fundamentals",
      title: "Microsoft Certified Azure Fundamentals"
    },
    {
      src: "/certs/tines_core_cert.png",
      alt: "Tines Core Certification",
      title: "Tines Core Certification"
    }
  ];


  return (
    <div className="min-h-screen cyber-bg">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link focus-ring">
        Skip to main content
      </a>

      <main id="main-content" className="container mx-auto px-4 py-8 text-[--cyber-text]" role="main">
        {/* Hero Section */}
        <section id="home" aria-labelledby="hero-heading" className="mb-16 cyber-card-bg py-20 rounded-lg relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#00FF00 1px, transparent 1px), linear-gradient(90deg, #00FF00 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
            aria-hidden="true"
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 id="hero-heading" className="text-5xl font-bold mb-4 text-white opacity-0 animate-fade-in-up">
                  Bryan Morrison
                </h1>
                <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-in-up animation-delay-100">
                  <MapPin size={20} className="text-[#00FF00]" aria-hidden="true" />
                  <span>Virginia, USA</span>
                </div>
                <p className="text-2xl mb-6 text-[#00FF00] opacity-0 animate-fade-in-up animation-delay-200 font-medium">
                  DevSecOps | Cloud Security | Container Security | Data Engineer | SIEM Engineer | CI / CD Automation
                </p>
                <p className="text-xl mb-8 opacity-0 animate-fade-in-up animation-delay-300 text-gray-300">
                  Extensive background in DevSecOps, Cloud Security, Container Security, Data Engineering, and expanding my knowledge around machine learning and AI.
                </p>
                <nav aria-label="Social links" className="flex gap-6 opacity-0 animate-fade-in-up animation-delay-400">
                  <a
                    href="https://github.com/bmorri13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FF00] hover:text-[#00CC00] transition-all duration-300 transform hover:scale-125 focus-ring rounded-full p-1"
                    aria-label="Visit Bryan Morrison's GitHub profile (opens in new tab)"
                  >
                    <Github size={28} aria-hidden="true" />
                  </a>
                  <a
                    href="mailto:bryanmorrison017@gmail.com"
                    className="text-[#00FF00] hover:text-[#00CC00] transition-all duration-300 transform hover:scale-125 focus-ring rounded-full p-1"
                    aria-label="Send email to Bryan Morrison"
                  >
                    <Mail size={28} aria-hidden="true" />
                  </a>
                </nav>
              </div>
              <div className="md:w-1/2 flex justify-center opacity-0 animate-fade-in animation-delay-200">
                <Image
                  src={portfolio_image}
                  alt="Bryan Morrison - Cybersecurity Professional"
                  className="rounded-full w-64 h-64 border-4 border-[#00FF00] shadow-lg shadow-[#00FF00]/20 animate-glow-pulse"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" aria-labelledby="about-heading" className="mb-16 opacity-0 animate-fade-in-up animation-delay-300">
          <h2 id="about-heading" className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">
            About Me
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Cybersecurity professional with 12+ years of experience in Splunk, cloud security, container security, and CI/CD security scanning. I&apos;ve worked for Fortune 500 companies and government agencies strengthening their security posture and ensuring alignment with industry best practices.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3" role="list" aria-label="Core skills">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  role="listitem"
                  className="cyber-card-bg rounded-lg px-4 py-3 text-sm font-semibold cyber-text border cyber-border hover:border-[hsl(var(--cyber-green))] transition-all duration-300 flex items-center gap-2 opacity-0 animate-slide-in-right"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <IconComponent size={16} aria-hidden="true" className="opacity-70" />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </section>

        <ProjectsSection projects={projects} />

        <CertificationsSection certifications={certifications} />
      </main>

      {/* Footer */}
      <footer className="border-t cyber-border py-6 text-center text-[--cyber-text-muted] text-sm">
        <p>&copy; 2025 Bryan Morrison. Built with Next.js and TailwindCSS.</p>
      </footer>
    </div>
  )
}
