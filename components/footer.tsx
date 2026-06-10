import Link from "next/link"
import { Scale, Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "Drept Civil", href: "#servicii" },
    { name: "Drept Comercial", href: "#servicii" },
    { name: "Drept Imobiliar", href: "#servicii" },
    { name: "Dreptul Familiei", href: "#servicii" },
    { name: "Litigii", href: "#servicii" },
  ],
  company: [
    { name: "Despre", href: "#despre" },
    { name: "Procesul Nostru", href: "#proces" },
    { name: "Testimoniale", href: "#testimoniale" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-semibold">
                Luminița Grigoraș
              </span>
            </Link>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Cabinet de avocat cu experiență de peste 12 ani în drept civil și
              comercial. Oferim consultanță juridică profesională și
              reprezentare dedicată pentru protecția drepturilor
              dumneavoastră.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+40740309706"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                0740 309 706
              </a>
              <a
                href="mailto:luminita@grigoras.net"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                luminita@grigoras.net
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Str. Alexandru Constantinescu Nr. 8, Ap. 5, Sector 1, București</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Informații
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              &copy; {new Date().getFullYear()} Luminița Grigoraș. Toate
              drepturile rezervate.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="#"
                className="text-background/50 hover:text-background transition-colors"
              >
                Politica de Confidențialitate
              </Link>
              <Link
                href="#"
                className="text-background/50 hover:text-background transition-colors"
              >
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
