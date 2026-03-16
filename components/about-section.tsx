"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about-us" className="relative z-10 py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              <span className="font-medium italic instrument">About</span> Our Mission
            </h2>
            <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
            At Dyoma Labs LLP, our mission is to dismantle the barriers between ambition and reality. We believe that intelligent automation is the cornerstone of modern innovation. By engineering bespoke AI solutions—from intelligent voice agents to custom RAG systems—we empower businesses not just to compete, but to define the future of their industries. 
            </p>
            <p className="text-white/70 text-sm font-light leading-relaxed mb-8">
            We are more than developers; we are architects of efficiency, partners in growth, and pioneers in the next digital frontier.
            </p>
            <Link href="/about" className="inline-block">
              <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50">
                Learn More
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="relative w-80 h-80 mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/30 to-violet-500/30 blur-lg"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-violet-500/40 to-purple-500/40 blur-md"></div>
              <div className="absolute inset-12 rounded-full bg-gradient-to-r from-purple-500/50 to-violet-500/50"></div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-white/20 flex items-center justify-center"
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
