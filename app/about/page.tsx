"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

function AboutHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="block z-50">
            <Image 
              src="/logo2.png" 
              alt="Dyoma Labs Logo" 
              width={147}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-white/70 hover:text-white text-sm font-light transition-colors"
            >
              ← Back to Home
            </Link>
            <Link 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-transparent border border-white/30 text-white text-sm font-normal transition-all duration-200 hover:bg-white/10 hover:border-white/50"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function AboutPage() {
  const philosophies = [
    {
      title: "Speed Wins. Perfection Kills.",
      description: "If Steve Jobs had waited for the perfect iPhone, we'd still be using Blackberries. The fastest way to build something great is to launch, learn, and iterate.",
      metrics: ["4-8 Weeks to MVP", "2x Faster Launch", "10x Learning Rate"]
    },
    {
      title: "Built for Founders, by Founders",
      description: "We're not another development agency—we're your co-pilot. We've lived the founder struggle, and we know what it takes to break through the noise and execute.",
      metrics: ["50+ MVPs Built", "85% Success Rate", "24/7 Support"]
    },
    {
      title: "MVPs That Create Momentum",
      description: "An MVP isn't just a minimum viable product. It's a momentum validation product. We don't just build products—we launch movements.",
      metrics: ["3x Faster Growth", "90% Less Waste", "100% Focus"]
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Proposal",
      description: "We start by understanding your vision, target audience, and key features.",
      deliverable: "PRD (Product Requirements Document) & a clear project roadmap."
    },
    {
      step: "2",
      title: "Client Onboarding",
      description: "We set up everything for seamless collaboration.",
      deliverable: "Progress tracker (Notion/Google Sheets), Shared Drive for assets, Slack for real-time updates."
    },
    {
      step: "3",
      title: "Sprint-Based Development",
      description: "We work in weekly sprints with clear deliverables.",
      deliverable: "UI/UX design, Core feature development, Testing & bug fixes."
    },
    {
      step: "4",
      title: "Managing Feedback & Scope",
      description: "To ensure smooth progress.",
      deliverable: "Structured feedback checkpoints, Clear process for scope changes & approvals."
    },
    {
      step: "5",
      title: "Testing & Deployment",
      description: "We rigorously test before launch.",
      deliverable: "Internal reviews for quality, Final tweaks before going live."
    },
    {
      step: "6",
      title: "Post-Launch Support",
      description: "Ensuring your success after launch.",
      deliverable: "30-day free bug fixes, Optional maintenance for future updates."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <AboutHeader />
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-light text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We believe in building fast, learning faster, and scaling with confidence.
          </motion.h1>
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-medium text-white mb-4">{philosophy.title}</h3>
                <p className="text-white/70 mb-6">{philosophy.description}</p>
                <div className="space-y-2">
                  {philosophy.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2"></div>
                      <span className="text-sm text-white/60">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-white mb-4">
              <span className="font-medium italic">Our</span> Process
            </h2>
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
              A structured approach to building your personal brand and creating impactful content.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-violet-500/30 to-transparent"></div>
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    <div className="w-16 h-16 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-medium text-violet-400">{step.step}</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex-1">
                      <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                      <p className="text-white/70 mb-4">{step.description}</p>
                      <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                        <p className="text-sm text-violet-400 font-medium mb-1">Deliverables:</p>
                        <p className="text-sm text-white/70">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Launch Your MVP in Weeks, Not Months
          </motion.h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Stop wasting time and money building features nobody wants. Start with a lean MVP that validates your idea and gets real user feedback.
          </p>
          <Link href="/#contact">
            <motion.button
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Building
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
