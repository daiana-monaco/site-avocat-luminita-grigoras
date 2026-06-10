import { Phone, FileSearch, Scale, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Consultație Inițială",
    description:
      "Programați o întâlnire pentru a discuta situația dumneavoastră juridică și a evalua opțiunile disponibile.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Analiză și Strategie",
    description:
      "Analizăm în detaliu cazul dumneavoastră și dezvoltăm o strategie juridică personalizată pentru cel mai bun rezultat.",
  },
  {
    icon: Scale,
    step: "03",
    title: "Reprezentare Activă",
    description:
      "Vă reprezentăm în toate procedurile necesare, fie că este vorba de negocieri, mediere sau litigii în instanță.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Rezoluție și Rezultate",
    description:
      "Lucrăm până la obținerea celui mai bun rezultat posibil, asigurând protecția completă a drepturilor dumneavoastră.",
  },
]

export function Process() {
  return (
    <section id="proces" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Cum Funcționează Procesul
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Patru pași simpli către rezolvarea problemelor dumneavoastră
            juridice.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((item, index) => (
                <div key={item.step} className="relative">
                  <div
                    className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                      index % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div
                      className={`${
                        index % 2 === 1 ? "lg:col-start-2" : "lg:col-start-1"
                      } flex items-start gap-4 lg:gap-6`}
                    >
                      {/* Mobile/Desktop icon */}
                      <div className="relative flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                          <item.icon className="h-7 w-7" />
                        </div>
                        <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                          {item.step}
                        </span>
                      </div>

                      <div className="flex-1 pb-12 lg:pb-16">
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
