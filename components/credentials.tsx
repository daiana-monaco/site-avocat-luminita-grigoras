import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { Calendar } from "lucide-react"

export function Credentials() {
  return (
    <section id="despre" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Despre Luminița Grigoraș
        </h2>
        <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
          Cu o carieră de{" "}
          <strong className="font-semibold text-foreground">
            peste 20 de ani în avocatură
          </strong>
          , transform cazurile complexe în soluții sigure. Cred că excelența
          juridică se definește prin trei piloni:{" "}
          <strong className="font-semibold text-foreground">
            strategie impecabilă, atenție la detalii și o etică profesională de
            neclintit
          </strong>
          .
        </p>
        <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
          Dincolo de legi și instanțe, prioritatea mea este să vă ofer{" "}
          <strong className="font-semibold text-foreground">
            claritate, siguranță și rezultate
          </strong>
          . Fiecare client beneficiază de o reprezentare adaptată riguros
          obiectivelor sale.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <CalendlyButton className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Programează o Consultație
          </CalendlyButton>
          <Button variant="outline" asChild>
            <Link href="#testimoniale">Vezi Testimoniale</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
