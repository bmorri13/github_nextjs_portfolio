import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  stack?: string[];
  url?: {
    text: string;
    link: string;
  } | null;
}

export default function ProjectCard({ title, description, content, stack, url }: ProjectCardProps) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-fg transition-colors duration-300 group-hover:text-signal sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-fg-2">{description}</p>
        </div>
        {url && (
          <ArrowUpRight
            size={22}
            aria-hidden="true"
            className="mt-1 shrink-0 text-fg-3 transition-[transform,color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
          />
        )}
      </div>
      <p className="mt-4 max-w-[65ch] leading-relaxed text-fg-3">{content}</p>
      {stack && stack.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} tech stack`}>
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-line px-2 py-0.5 font-mono text-xs text-fg-2"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  if (!url) {
    return <article className="border-b border-line py-8">{body}</article>;
  }

  return (
    <article className="border-b border-line">
      <a
        href={url.link}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring group -mx-4 block rounded-lg px-4 py-8 transition-colors duration-300 hover:bg-ink-raised"
      >
        {body}
        <span className="sr-only">{url.text} (opens in new tab)</span>
      </a>
    </article>
  );
}
