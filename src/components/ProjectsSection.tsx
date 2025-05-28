import ProjectCard from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  content: string;
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
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const isLastItem = index === projects.length - 1;
          const isOddCount = projects.length % 2 !== 0;

          if (isLastItem && isOddCount) {
            return (
              <div key={index} className="md:col-span-2 flex justify-center">
                <div className="md:w-1/2"> {/* Maintain original card width but centered */}
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    content={project.content}
                    url={project.url}
                  />
                </div>
              </div>
            );
          }

          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              content={project.content}
              url={project.url}
            />
          );
        })}
      </div>
    </section>
  );
}