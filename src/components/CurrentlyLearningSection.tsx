'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface LearningItem {
  title: string;
  items: {
    text: string;
    link?: {
      url: string;
      title: string;
    };
  }[];
}

interface CurrentlyLearningSectionProps {
  items: LearningItem[];
}

export default function CurrentlyLearningSection({ items }: CurrentlyLearningSectionProps) {
  return (
    <section id="currentlyLearning" aria-labelledby="learning-heading" className="mb-16">
      <h2 id="learning-heading" className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">
        Currently Learning
      </h2>
      <div className="space-y-6">
        {items.map((item) => (
          <Card key={item.title} className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/5">
            <CardHeader>
              <CardTitle className="text-white">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="list-disc pl-5 space-y-2">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex}>
                    {listItem.link ? (
                      <>
                        {listItem.text}{' '}
                        <a
                          href={listItem.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00FF00] hover:text-[#00CC00] hover:underline focus-ring rounded inline-flex items-center gap-1"
                          aria-label={`${listItem.link.title} (opens in new tab)`}
                        >
                          {listItem.link.title}
                          <ExternalLink size={12} aria-hidden="true" className="inline" />
                        </a>
                      </>
                    ) : (
                      listItem.text
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 