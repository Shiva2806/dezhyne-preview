import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          q: "What services does DEZHYNE offer?",
          a: "We offer a comprehensive suite of digital services including website development, e-commerce solutions, branding & strategy, paid media advertising, social media marketing, and software testing. Our goal is to provide end-to-end digital solutions for your business.",
        },
        {
          q: "What industries do you work with?",
          a: "We work with businesses across various industries including technology, e-commerce, healthcare, finance, education, and more. Our versatile team can adapt to any industry's unique needs and challenges.",
        },
      ],
    },
    {
      category: "Services",
      questions: [
        {
          q: "How long does a typical project take?",
          a: "Project timelines vary based on scope and complexity. A basic website might take 4-6 weeks, while a comprehensive e-commerce platform could take 3-4 months. We'll provide a detailed timeline during our discovery phase.",
        },
        {
          q: "Do you offer ongoing support after launch?",
          a: "Yes! We offer flexible maintenance and support packages to ensure your digital products continue to perform optimally. This includes updates, bug fixes, performance optimization, and feature enhancements.",
        },
      ],
    },
    {
      category: "Process",
      questions: [
        {
          q: "What is your development process?",
          a: "Our process follows four key phases: Discovery & Strategy, Design & Creative, Development & Testing, and Launch & Growth. We work collaboratively with you at each stage to ensure alignment with your vision and goals.",
        },
        {
          q: "How involved will I be in the project?",
          a: "We believe in collaborative partnership. You'll have regular check-ins, milestone reviews, and opportunities to provide feedback throughout the project. We ensure you're informed and involved at every crucial decision point.",
        },
      ],
    },
    {
      category: "Pricing",
      questions: [
        {
          q: "How do you price your services?",
          a: "We offer customized pricing based on project scope, complexity, and timeline. After understanding your requirements, we'll provide a detailed proposal with transparent pricing. We offer both project-based and retainer pricing models.",
        },
        {
          q: "Do you require a deposit?",
          a: "Yes, we typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can structure milestone-based payments.",
        },
      ],
    },
    {
      category: "Support",
      questions: [
        {
          q: "What if I need changes after the project is complete?",
          a: "Minor tweaks within 30 days of launch are included. For larger changes or additions, we offer flexible hourly rates or can create a custom support package based on your needs.",
        },
        {
          q: "How do I get started?",
          a: "Simply reach out through our contact form or schedule a call. We'll discuss your goals, challenges, and vision, then create a tailored proposal for your project.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen" data-testid="page-faq">
      <section className="pt-32 pb-20 bg-white" data-testid="section-hero">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-hero-subtitle">
            Find answers to common questions about our services and process
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/30" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12" data-testid={`category-${category.category.toLowerCase()}`}>
              <h2 className="text-2xl font-bold mb-6" data-testid={`text-category-${category.category.toLowerCase()}`}>
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`${categoryIndex}-${itemIndex}`}
                    className="bg-white rounded-md px-6 border"
                    data-testid={`faq-item-${categoryIndex}-${itemIndex}`}
                  >
                    <AccordionTrigger className="text-left hover:no-underline" data-testid={`faq-question-${categoryIndex}-${itemIndex}`}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${categoryIndex}-${itemIndex}`}>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-white" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-heading">
            Still have questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta-subtext">
            We're here to help. Get in touch with our team.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-foreground text-background hover-elevate px-8"
            data-testid="button-cta"
            onClick={() => (window.location.href = "/contact")}
          >
            Let's Talk
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
