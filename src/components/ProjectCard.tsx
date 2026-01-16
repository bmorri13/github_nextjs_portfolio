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
    <Card className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/5 group">
      <CardHeader>
        <CardTitle className="text-white group-hover:text-[#00FF00] transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-gray-300">
        <p className="mb-3">{content}</p>
        {url && (
          <a
            href={url.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FF00] hover:text-[#00CC00] mt-2 inline-flex items-center gap-1 focus-ring rounded px-1 -ml-1 transition-all duration-200 hover:gap-2"
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