"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresă",
    value: "Str. Alexandru Constantinescu Nr. 8, Ap. 5, Sector 1, București",
    href: "https://maps.google.com/?q=Str.+Alexandru+Constantinescu+Nr.+8+Ap.+5+Sector+1+Bucuresti",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "0740 309 706",
    href: "tel:+40740309706",
  },
  {
    icon: Mail,
    label: "Email",
    value: "luminita@grigoras.net",
    href: "mailto:luminita@grigoras.net",
  },
  {
    icon: Clock,
    label: "Program",
    value: "Luni - Vineri: 09:00 - 18:00",
    href: null,
  },
]

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Contactați-ne
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Suntem aici pentru a vă ajuta. Programați o consultație sau
            trimiteți-ne un mesaj.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Mesaj Trimis cu Succes!
                </h3>
                <p className="text-muted-foreground">
                  Vă vom contacta în cel mai scurt timp posibil.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Trimite Alt Mesaj
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nume Complet</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Introduceți numele"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+40 7XX XXX XXX"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@exemplu.ro"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subiect</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Despre ce doriți să discutăm?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descrieți pe scurt situația dumneavoastră..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Se trimite..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Trimite Mesajul
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Prin trimiterea formularului, sunteți de acord cu politica
                  noastră de confidențialitate.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-serif text-xl font-semibold mb-2">
                Programează o Consultație
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Discutăm situația dumneavoastră și vă prezentăm opțiunile
                disponibile. Alegeți data și ora convenabilă.
              </p>
              <CalendlyButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Programează o Consultație
              </CalendlyButton>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium text-foreground">
                        {item.value}
                      </div>
                    )}
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
