"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Calendar, MapPin, Phone, Mail } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Acasă", href: "#" },
  { name: "Servicii", href: "#servicii" },
  { name: "Despre", href: "#despre" },
  { name: "Proces", href: "#proces" },
  { name: "Testimoniale", href: "#testimoniale" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      {/* Top contact bar */}
      <div className="bg-[#0A314D] text-white text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-4 gap-y-1 overflow-x-auto whitespace-nowrap px-6 py-2 lg:px-8 flex-col sm:flex-row">
          <a
            href="https://maps.google.com/?q=Str.+Alexandru+Constantinescu+Nr.+8+Ap.+5+Sector+1+Bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
            <span>Str. Alexandru Constantinescu Nr. 8, Ap. 5, Sector 1, București</span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="tel:+40740309706"
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 flex-shrink-0" />
              <span>0740 309 706</span>
            </a>
            <a
              href="mailto:luminita@grigoras.net"
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 flex-shrink-0" />
              <span>luminita@grigoras.net</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="font-serif text-xl font-semibold text-foreground">
              Luminița Grigoraș
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Deschide meniul</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <CalendlyButton className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Programează o Consultație
          </CalendlyButton>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "fixed inset-y-0 right-0 w-full max-w-sm bg-card px-6 py-6 shadow-xl transition-transform duration-300",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="font-serif text-xl font-semibold text-foreground">
                Luminița Grigoraș
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Închide meniul</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <CalendlyButton className="w-full flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Programează o Consultație
                </CalendlyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
