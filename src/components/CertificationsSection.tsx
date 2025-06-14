import Image from 'next/image'
import React from 'react'

interface Certification {
  src: string;
  alt: string;
  title: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className={`bg-[#232323] p-2 rounded-lg border border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300
              ${index === certifications.length - 1 && certifications.length % 2 === 1 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={100}
              height={100}
              className="w-full h-auto max-w-[100px] mx-auto"
            />
            <p className="bg-[#232323] rounded-full px-3 py-1 text-xs font-semibold text-[#00FF00] text-center">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}