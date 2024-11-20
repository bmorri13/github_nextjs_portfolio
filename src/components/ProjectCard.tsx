import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    <Card className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-gray-300">
        <p>{content}</p>
        {url && (
          <a 
            href={url.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FF00] hover:underline mt-2 inline-block"
          >
            {url.text} →
          </a>
        )}
      </CardContent>
    </Card>
  );
} 