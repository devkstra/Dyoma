"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

export default function ShaderShowcase() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (you can adjust this or remove it if you want to rely on actual loading)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
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
    </>
  )
}
