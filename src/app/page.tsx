'use client'

import Image from 'next/image'
import portfolio_image from '../../public/portfolio_image.png'
import ProjectsSection from '@/components/ProjectsSection'
import CurrentlyLearningSection from '@/components/CurrentlyLearningSection'


export default function Home() {
  const projects = [
    {
      title: "Splunk Implementation",
      description: "Setting up Splunk for enterprise-wide operations and security monitoring",
      content: "Implemented Splunk in AWS, leveraging SmartStore to support multi-terabyte daily ingestion and deploying an enterprise-grade environment with Splunk ES, ITSI, and custom data pipelines using Python scripts, HEC, and Cribl, ensuring scalable, efficient, and reliable operations.",
      url: null
    },
    {
      title: "AWS DataLake",
      description: "AWS Data Lake Leveraging S3 and supporting technologies",
      content: "Developed a data lake solution leveraging AWS services via Lake Formation to include AWS Glue, AWS Athena and, AWS Quicksight. For a breakdown of this project please visit my GitHub repo",
      url: {
        text: "View on GitHub",
        link: "https://github.com/bmorri13/aws_s3_datalake"
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
      title: "Front End Web Development",
      items: [
        {
          text: "Building simple web front ends, including this portfolio, to deepen my understanding of front-end frameworks such as Next.js, React.js, and Vite."
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
                <p className="text-2xl mb-6 text-[#00FF00]">DevSecOps | Cloud Security | Container Security | Data Engineer | SIEM Engineer | CI / CD Automation</p>
                <p className="text-xl mb-8">Current  on DevSecOps, Cloud Security, Container Security, Data Engineering, and expanding my knowledge around machine learning and AI.</p>
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
          <p className="mb-4">With over 12 years of experience in cyber security including Splunk, container security, cloud security, and, CI / CD security scanning. I have assisted multiple Fortune 500 companies and government agencies increase thier security posture and bring their security posture in line with industry standards.</p>
          <h3 className="text-2xl font-semibold mb-2 text-white">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {["Splunk", "Cloud Security", "Container Security", "CI/CD Pipeline Automation", "Kubernetes Security", "SOAR Automation", "SOC Operations"].map((skill) => (
              <div key={skill} className="bg-[#232323] rounded-full px-3 py-1 text-sm font-semibold text-[#00FF00] border border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Project section using ProjectCard component to display individual projects */}
        <ProjectsSection projects={projects} />

        <CurrentlyLearningSection items={learningItems} />
      </main>
    </div>
  )
}
