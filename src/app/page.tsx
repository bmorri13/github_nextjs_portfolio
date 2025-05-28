'use client'

import Image from 'next/image'
import portfolio_image from '../../public/portfolio_image.png'
import ProjectsSection from '@/components/ProjectsSection'
import CurrentlyLearningSection from '@/components/CurrentlyLearningSection'
import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import CertificationsSection from '@/components/CertificationsSection'

export default function Home() {
  const projects = [
     {
      title: "Homelab",
      description: "Repository for my homelab projects",
      content: "This repository contains various projects and configurations for my homelab running on Proxmox and a K3s cluster. This is leveraged heavily for learning and testing new technologies.",
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/homelab"
      }
    },
    {
      title: "AWS Data Lake",
      description: "AWS Data Lake Leveraging S3 and supporting technologies",
      content: "Developed a data lake solution leveraging AWS services via Lake Formation to include AWS Glue, AWS Athena and, AWS Quicksight. Fully deployable via Terraform.",
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/aws_s3_datalake"
      }
    },
    {
      title: "Vector - Splunk HEC to S3 Docker Deployment",
      description: "Setting up Splunk for enterprise-wide operations and security monitoring",
      content: "Developed a solution utlizing Vector to receive data via Splunk HTTP Event Collector and route data to AWS S3 in a partitioned format to ingest data into an AWS S3 Data lake.",
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/vector_hec_to_s3_docker"
      }
    }
  ];

  const learningItems = [
    {
      title: "Machine Learning",
      items: [
        {
          text: "Reading through:",
          link: {
            url: "https://www.amazon.com/dp/1098125975?ref=ppx_yo2ov_dt_b_fed_asin_title",
            title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems - 3rd Edition"
          }
        },
        {
          text: "Yet to Start:",
          link: {
            url: "https://www.amazon.com/dp/1098107969?ref=ppx_yo2ov_dt_b_fed_asin_title",
            title: "Designing Machine Learning Systems: An Iterative Process for Production-Ready Applications - 1st Edition"
          }
        },
        {
          text: "Yet to Start:",
          link: {
            url: "https://www.amazon.com/dp/1098150961?ref=ppx_yo2ov_dt_b_fed_asin_title",
            title: "Hands-On Large Language Models: Language Understanding and Generation - 1st Edition"
          }
        }
      ]
    },
    {
      title: "Cyber Security",
      items: [
        {
          text: "Try Hack Me:",
          link: {
            url: "https://tryhackme.com/r/path/outline/webapppentesting?utm_source=cio&utm_medium=email&utm_campaign=webapppen_b2c",
            title: "Web Application Pentesting Path"
          }
        }
      ]  
    },
    {
      title: "LLM Rag Implementations",
      items: [
        {
          text: "Testing out developing solutions with LLM's for RAG integration leveraging AWS Bedrock and enriching the LLM knowledge base with data from S3"
        }
      ]
    },
    {
      title: "Full Stack Web Development",
      items: [
        {
          text: "Building web front ends, including this portfolio, to deepen my understanding of front-end frameworks such as Next.js and React. Along with leveraging FastAPI and PostgreSQL for the back-end."
        }
      ]
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
    <div className="min-h-screen bg-[#1C1C1C]">


      <main className="container mx-auto px-4 py-8 text-gray-300">
        <section id="home" className="mb-16 bg-[#232323] py-20 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-5xl font-bold mb-4 text-white">Bryan Morrison</h2>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={20} color="#00FF00" />
                  <span>Virginia, USA</span>
                </div>
                <p className="text-2xl mb-6 text-[#00FF00]">DevSecOps | Cloud Security | Container Security | Data Engineer | SIEM Engineer | CI / CD Automation</p>
                <p className="text-xl mb-8">Extensive background in DevSecOps, Cloud Security, Container Security, Data Engineering, and expanding my knowledge around machine learning and AI.</p>
                <div className="flex gap-6">
                  <a
                    href="https://www.linkedin.com/in/bryanmorrison017/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FF00] hover:text-[#00CC00] transition-all duration-300 transform hover:scale-125"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a
                    href="https://github.com/bmorri13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FF00] hover:text-[#00CC00] transition-all duration-300 transform hover:scale-125"
                  >
                    <Github size={28} />
                  </a>
                  <a
                    href="mailto:bryanmorrison017@gmail.com"
                    className="text-[#00FF00] hover:text-[#00CC00] transition-all duration-300 transform hover:scale-125"
                  >
                    <Mail size={28} />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image 
                  src={portfolio_image}
                  alt="Bmo image" 
                  className="rounded-full w-64 h-64 border-4 border-[#00FF00] shadow-lg shadow-[#00FF00]/20" 
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">About Me</h2>
          <p className="mb-4">Over 12 years of experience in cybersecurity, specializing in Splunk, cloud security, container security, and CI / CD security scanning. I have assisted multiple Fortune 500 companies and government agencies to increase thier security posture and bring their security posture in line with industry standards.</p>
          <h3 className="text-2xl font-semibold mb-2 text-white">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {["Splunk", "Cloud Security", "Container Security", "CI / CD Pipeline Automation", "Kubernetes Security", "SOAR Automation"].map((skill) => (
              <div key={skill} className="bg-[#232323] rounded-full px-3 py-1 text-sm font-semibold text-[#00FF00] border border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300">
                {skill}
              </div>
            ))}
          </div>
          <CertificationsSection certifications={certifications} />
        </section>

        {/* Project section using ProjectCard component to display individual projects */}
        <ProjectsSection projects={projects} />

        <CurrentlyLearningSection items={learningItems} />
      </main>
    </div>
  )
}
