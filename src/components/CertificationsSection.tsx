import Image from 'next/image'

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
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-white">Certifications</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-[#232323] p-2 rounded-lg border border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300">
            <Image
              src={cert.src}
              alt={cert.alt}
              width={150}
              height={150}
              className="w-full h-auto max-w-[150px] mx-auto"
            />
            <p className="bg-[#232323] rounded-full px-3 py-1 text-sm font-semibold text-[#00FF00]  text-center">{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}