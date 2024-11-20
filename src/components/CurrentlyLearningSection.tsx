'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="currentlyLearning" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">
        Currently Learning
      </h2>
      {items.map((item, index) => (
        <Card key={index} className={`bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all duration-300 ${index !== items.length - 1 ? 'mb-6' : ''}`}>
          <CardHeader>
            <CardTitle className="text-white">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <ul className="list-disc pl-5">
              {item.items.map((listItem, itemIndex) => (
                <li key={itemIndex}>
                  {listItem.link ? (
                    <>
                      {listItem.text}{' '}
                      <a href={listItem.link.url} className="text-[#00FF00] hover:underline">
                        {listItem.link.title}
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
    </section>
  );
} 