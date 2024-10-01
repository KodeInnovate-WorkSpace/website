import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import data from "../../constants/faq.json";

export default function FAQSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((d,index) => (
        <AccordionItem key={index} value={`item-${d.id}`}>
          <AccordionTrigger className="text-md lg:text-lg text-left">
            {d.title}
          </AccordionTrigger>
          <AccordionContent className="lg:text-lg">
            {d.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
