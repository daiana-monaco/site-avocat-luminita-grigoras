"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Cum se stabilesc onorariile și la ce costuri ar trebui să mă aștept?",
    answer:
      "Onorariile se stabilesc în mod clar în cadrul primei consultații, în funcție de complexitatea cazului dumneavoastră (onorariu fix, orar sau de succes). Nu vor exista niciodată costuri ascunse sau surprize pe parcurs.",
  },
  {
    question: "Cum știu dacă ești avocatul potrivit pentru cazul meu?",
    answer:
      "Cu peste 12 ani de experiență în consultanță și litigii, abordez fiecare caz prin prisma rezultatelor realiste. Dacă consider că o situație nu are șanse de reușită, îți voi spune acest lucru direct, economisind timpul și resursele tale.",
  },
  {
    question: "Cât de repede putem începe colaborarea?",
    answer:
      "Realitatea juridică necesită reacții rapide. Prin sistemul de programare online, poți rezerva prima ședință de consultanță în funcție de disponibilitatea ta, asigurându-ne că intervenim în timp util.",
  },
  {
    question: "Cât de protejate sunt informațiile mele?",
    answer:
      "Confidențialitatea este absolută și garantată prin statutul profesional. Tot ce discutăm rămâne protejat de secretul profesional, oferindu-ți un spațiu sigur pentru a expune toate detaliile cazului.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Întrebări Frecvente
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Răspunsuri la cele mai comune întrebări despre serviciile noastre
            juridice.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg mb-3 px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
