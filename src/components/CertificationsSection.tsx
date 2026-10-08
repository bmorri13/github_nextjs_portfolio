import Image from 'next/image'

interface Certification {
  src: string;
  title: string;
  issuer: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  // Group by issuer, keeping the order issuers first appear in
  const groups = certifications.reduce<Map<string, Certification[]>>((acc, cert) => {
    acc.set(cert.issuer, [...(acc.get(cert.issuer) ?? []), cert]);
    return acc;
  }, new Map());

  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr] md:py-28">
        <div>
          <h2 id="certifications-heading" className="text-3xl font-semibold tracking-[-0.03em] text-fg md:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-fg-3">
            <span className="tabular text-fg">{certifications.length}</span> certifications across{" "}
            <span className="tabular text-fg">{groups.size}</span> platforms
          </p>
        </div>

        <div className="border-t border-line">
          {[...groups.entries()].map(([issuer, certs]) => (
            <div key={issuer} className="grid gap-4 border-b border-line py-6 sm:grid-cols-[8rem_1fr]">
              <h3 className="text-sm font-medium text-fg-3 sm:pt-3">{issuer}</h3>
              <ul className="grid gap-3">
                {certs.map((cert) => (
                  <li key={cert.title} className="flex items-center gap-4">
                    <div className="relative size-12 shrink-0">
                      <Image src={cert.src} alt="" fill className="object-contain" sizes="48px" />
                    </div>
                    <span className="font-medium text-fg">{cert.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
