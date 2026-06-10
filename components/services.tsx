import {
  FileText,
  Building2,
  Home,
  Users,
  Scale,
  Briefcase,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: FileText,
    title: "Drept Civil",
    description:
      "Contracte, obligații, răspundere civilă, succesiuni și partaje. Asistență completă în litigii civile.",
    features: ["Contracte civile", "Succesiuni", "Răspundere delictuală"],
  },
  {
    icon: Building2,
    title: "Drept Comercial",
    description:
      "Consultanță pentru societăți comerciale, fuziuni, achiziții și litigii comerciale complexe.",
    features: ["Drept societar", "Fuziuni și achiziții", "Insolvență"],
  },
  {
    icon: Home,
    title: "Drept Imobiliar",
    description:
      "Tranzacții imobiliare, verificare acte proprietate, litigii funciare și restituiri.",
    features: ["Tranzacții", "Cadastru", "Litigii funciare"],
  },
  {
    icon: Users,
    title: "Dreptul Familiei",
    description:
      "Divorțuri, partaje, custodie copii, pensie alimentară și adopții cu sensibilitate și profesionalism.",
    features: ["Divorț", "Custodie", "Partaj bunuri"],
  },
  {
    icon: Scale,
    title: "Litigii",
    description:
      "Reprezentare în instanță la toate nivelurile de jurisdicție, de la judecătorii la Înalta Curte.",
    features: ["Reprezentare", "Apeluri", "Recursuri"],
  },
  {
    icon: Briefcase,
    title: "Consultanță Juridică",
    description:
      "Analiză documente, opinii juridice, due diligence și strategii de prevenire a litigiilor.",
    features: ["Analiză acte", "Due diligence", "Strategii"],
  },
]

export function Services() {
  return (
    <section id="servicii" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Servicii Juridice Profesionale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferim o gamă completă de servicii juridice adaptate nevoilor
            dumneavoastră specifice.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-xl border border-border p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="#contact" className="flex items-center gap-2">
              Solicită Consultație
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
