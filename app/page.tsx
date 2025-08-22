"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function ShaderShowcase() {
  return (
    <ShaderBackground>
      <Header />
      <main>
        <section id="home">
          <HeroContent />
        </section>
        <section id="features" className="py-20">
          <ServicesSection />
        </section>
        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>
        <section id="about" className="py-20">
          <AboutSection />
        </section>
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </ShaderBackground>
  )
}
