"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative z-10 py-24 px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            <span className="font-medium italic instrument">Get</span> In Touch
          </h2>
          <p className="text-white/70 text-sm font-light max-w-lg mx-auto">
            Ready to create something amazing? Let's discuss your next shader project
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 text-sm font-light focus:outline-none focus:border-white/30 transition-all duration-200"
                style={{ filter: "url(#glass-effect)" }}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 text-sm font-light focus:outline-none focus:border-white/30 transition-all duration-200"
                style={{ filter: "url(#glass-effect)" }}
              />
            </div>
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 text-sm font-light focus:outline-none focus:border-white/30 transition-all duration-200 resize-none"
              style={{ filter: "url(#glass-effect)" }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-12 py-4 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
