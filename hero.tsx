"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { AnimatedGradientMesh } from "@/components/animated-gradient-mesh"
import { CursorSpotlight } from "@/components/cursor-spotlight"

const stats = [
  { icon: Award, value: "20+", label: "Ani Experiență" },
  { icon: Users, value: "1.000+", label: "Cazuri Rezolvate" },
  { icon: Scale, value: "95%", label: "Cazuri Câștigate" },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Interactive cursor spotlight - behind image */}
      <CursorSpotlight containerRef={sectionRef} />
      
      {/* Animated gradient mesh background */}
      <AnimatedGradientMesh />
      
      {/* Lady Justice Image - Hidden on mobile, visible on lg+ */}
      <div 
        className="absolute left-0 bottom-0 w-[600px] h-[850px] z-[4] pointer-events-none hidden lg:block"
        style={{
          maskImage: "linear-gradient(to right, black 50%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 50%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%, black 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lady-justice-0UtHskAUMUFu2fDXkD4gBxQxN1cdhG.png"
          alt="Lady Justice - Statuia Justiției"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background via-background/95 to-secondary/30" />

      <div className="relative z-[10] mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-32 w-full">
        {/* Mobile: Stacked layout with image on top */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Mobile Image - Stacked above text */}
          <div className="relative w-48 h-56 sm:w-64 sm:h-72 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lady-justice-0UtHskAUMUFu2fDXkD4gBxQxN1cdhG.png"
              alt="Lady Justice - Statuia Justiției"
              fill
              className="object-cover object-top rounded-2xl"
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
              priority
            />
          </div>
          
          {/* Mobile Content */}
          <div className="text-center w-full">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Scale className="h-4 w-4" />
              Cabinet de Avocat
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
              Dreptatea se câștigă prin{" "}
              <span className="text-primary">decizii luate la timp.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-md mx-auto">
              Peste două decenii de experiență în avocatură, oferind claritate
              strategică și apărări de neclintit pentru momentele în care aveți
              cea mai mare nevoie de protecție.
            </p>

            {/* Mobile Buttons - Full width, stacked */}
            <div className="mt-8 flex flex-col gap-3 w-full max-w-sm mx-auto">
              <CalendlyButton size="lg" className="w-full flex items-center justify-center gap-2">
                Programează o Consultație
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="#servicii">Explorează Serviciile</Link>
              </Button>
            </div>

            {/* Mobile Stats Card - 3 columns compact */}
            <div className="mt-10 w-full">
              <div className="bg-card rounded-xl border border-border shadow-lg p-4">
                <div className="grid grid-cols-3 gap-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="mx-auto w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-1.5">
                        <stat.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="font-serif text-xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Grid layout with image on left */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Spacer for image on large screens */}
          <div className="lg:col-span-5" />
          
          {/* Content - Right side */}
          <div className="text-left lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Scale className="h-4 w-4" />
              Cabinet de Avocat
            </div>

            <h1 className="font-serif text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance">
              Dreptatea se câștigă prin{" "}
              <span className="text-primary">decizii luate la timp.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
              Peste două decenii de experiență în avocatură, oferind claritate
              strategică și apărări de neclintit pentru momentele în care aveți
              cea mai mare nevoie de protecție.
            </p>

            <div className="mt-10 flex flex-row items-center gap-4">
              <CalendlyButton size="lg" className="flex items-center gap-2">
                Programează o Consultație
                <ArrowRight className="h-4 w-4" />
              </CalendlyButton>
              <Button variant="outline" size="lg" asChild>
                <Link href="#servicii">Explorează Serviciile</Link>
              </Button>
            </div>

            {/* Stats Card - Below text on right side */}
            <div className="relative mt-12">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-2xl border border-border shadow-xl p-8">
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="font-serif text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
