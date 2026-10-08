import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  stack?: string[];
  live?: string;
  url?: {
    text: string;
    link: string;
  } | null;
}

export default function ProjectCard({ title, description, content, stack, live, url }: ProjectCardProps) {
  return (
    <article className="border-b border-line py-8">
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-fg sm:text-2xl">
        {title}
      </h3>
      <p className="mt-1 text-fg-2">{description}</p>
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
      {(live || url) && (
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm font-medium">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex items-center gap-1.5 rounded-sm py-1.5 text-signal"
            >
              <span className="underline decoration-signal/40 transition-colors group-hover:decoration-signal">
                Live site
              </span>
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
              <span className="sr-only">for {title} (opens in new tab)</span>
            </a>
          )}
          {url && (
            <a
              href={url.link}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex items-center gap-1.5 rounded-sm py-1.5 text-fg-2 transition-colors hover:text-fg"
            >
              <Github size={16} aria-hidden="true" />
              <span className="underline decoration-line-strong transition-colors group-hover:decoration-fg-3">
                GitHub
              </span>
              <span className="sr-only">repository for {title} (opens in new tab)</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
