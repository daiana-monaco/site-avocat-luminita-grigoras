import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "Luminița m-a ajutat să rezolv un litigiu imobiliar complex care dura de ani de zile. Profesionalismul și dedicarea ei au făcut diferența. Recomand cu încredere!",
    author: "Maria P.",
    role: "Client - Drept Imobiliar",
    rating: 5,
  },
  {
    content:
      "Într-un moment dificil al divorțului, am găsit în Luminița un avocat care nu doar că m-a reprezentat impecabil, dar a și înțeles dimensiunea emoțională a situației.",
    author: "Andrei M.",
    role: "Client - Dreptul Familiei",
    rating: 5,
  },
  {
    content:
      "Compania noastră colaborează cu Luminița de peste 5 ani pentru toate problemele juridice. Răspunsurile ei sunt întotdeauna prompte și soluțiile eficiente.",
    author: "Elena D.",
    role: "Director General - Client Comercial",
    rating: 5,
  },
  {
    content:
      "Am apelat la Luminița pentru o problemă de succesiune complicată. A reușit să rezolve totul într-un timp record, cu rezultate peste așteptări.",
    author: "Ion R.",
    role: "Client - Drept Civil",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimoniale" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ce Spun Clienții
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experiențele clienților noștri reflectă angajamentul nostru pentru
            excelență și rezultate.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl border border-border p-6 lg:p-8 shadow-sm"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-lg font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
