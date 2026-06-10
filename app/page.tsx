import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Credentials } from "@/components/credentials"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Credentials />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
