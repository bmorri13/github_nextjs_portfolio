import ProjectCard from "@/components/ProjectCard";

interface Project {
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

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr] md:py-28">
        <div>
          <h2 id="projects-heading" className="text-3xl font-semibold tracking-[-0.03em] text-fg md:text-4xl">
            Projects
          </h2>
          <p className="mt-4 max-w-[30ch] text-fg-3">
            Things I&apos;ve built to learn, test, and solve real problems.
          </p>
        </div>
        <ul className="border-t border-line">
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
