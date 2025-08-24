"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      
      // Show success message
      setShowSuccess(true)
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
      
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  return (
    <section id="contact" className="relative z-10 py-24 px-8">
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
            Ready to create something amazing? Let&apos;s discuss your next shader project
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
                className={`w-full px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border ${
                  errors.name ? 'border-red-500/50' : 'border-white/10'
                } text-white placeholder-white/50 text-sm font-light focus:outline-none focus:border-white/30 transition-all duration-200`}
                style={{ filter: "url(#glass-effect)" }}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 ml-2">{errors.name}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border ${
                  errors.email ? 'border-red-500/50' : 'border-white/10'
                } text-white placeholder-white/50 text-sm font-light focus:outline-none focus:border-white/30 transition-all duration-200`}
                style={{ filter: "url(#glass-effect)" }}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 ml-2">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className={`w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border ${
                errors.message ? 'border-red-500/50' : 'border-white/10'
              } text-white placeholder-white/50 text-sm font-light focus:outline-none focus:border-white/30 transition-all duration-200 resize-none`}
              style={{ filter: "url(#glass-effect)" }}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1 ml-2">{errors.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`px-12 py-4 rounded-full font-normal text-sm transition-all duration-200 ${
              isSubmitting 
                ? 'bg-white/50 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-white/90'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 max-w-md w-full relative overflow-hidden"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">Thank You!</h3>
                <p className="text-white/70 text-sm mb-6">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
