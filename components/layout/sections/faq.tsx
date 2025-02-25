import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Techie Sleuths?",
    answer: " Techie Sleuths is an interactive event designed for the new students of the Faculty of Computing. It includes activities like treasure hunting, crossword puzzles, and other challenges to help freshers get to know their faculty better.",
    value: "item-1",
  },
  {
    question: "Who can participate?",
    answer:
      "The event is open to all freshers of the Faculty of Computing. It is a great opportunity to meet new people, make friends, and learn more about the faculty.",
    value: "item-2",
  },
  {
    question:
      "How do I register? ",
    answer:
      "You can register for Techie Sleuths by signing up through the link provided on our event page.",
    value: "item-3",
  },
  {
    question: "What should I bring?",
    answer: " Just bring your enthusiasm and curiosity! All necessary materials for the activities will be provided.",
    value: "item-4",
  },
  {
    question:"Is there a participation fee?",
    answer: "No, Techie Sleuths is completely free for all participants.",
    value: "item-5",
  },
  {
    question:"Who can I contact for more information?",
    answer: "For any queries, feel free to reach out to the organizing team via the contact details on our website.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left md:text-xl">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-xl">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
