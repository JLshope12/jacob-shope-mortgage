"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = { question: string; answer: string };

export function ProgramFAQ({ faq }: { faq: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-charcoal hover:text-navy">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-charcoal/90">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
