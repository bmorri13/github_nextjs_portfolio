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
    <section id="certifications" aria-labelledby="certifications-heading" className="mb-16">
      <h2 id="certifications-heading" className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[hsl(var(--cyber-green))] inline-block text-white">
        Certifications
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" role="list" aria-label="Professional certifications">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            role="listitem"
            className="cyber-card-bg p-4 rounded-lg border cyber-border hover:border-[hsl(var(--cyber-green))] transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--cyber-green)/0.05)] flex flex-col items-center group"
          >
            <div className="relative w-20 h-20 mb-3 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={cert.src}
                alt=""
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
            <p className="text-xs font-semibold cyber-text text-center leading-tight">
              {cert.title}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}