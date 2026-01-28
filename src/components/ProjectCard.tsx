import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  url?: {
    text: string;
    link: string;
  } | null;
}

export default function ProjectCard({ title, description, content, url }: ProjectCardProps) {
  return (
    <Card className="cyber-card-bg cyber-border hover:border-[hsl(var(--cyber-green)/0.5)] transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--cyber-green)/0.05)] group h-full">
      <CardHeader>
        <CardTitle className="text-white group-hover:cyber-text transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-[--cyber-text-muted]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-[--cyber-text]">
        <p className="mb-3">{content}</p>
        {url && (
          <a
            href={url.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-text cyber-text-hover mt-2 inline-flex items-center gap-1 focus-ring rounded px-1 -ml-1 transition-all duration-200 hover:gap-2"
            aria-label={`${url.text} for ${title} (opens in new tab)`}
          >
            {url.text}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
      </CardContent>
    </Card>
  );
} 