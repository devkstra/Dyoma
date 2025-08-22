"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Project Maha-Sahayak",
    image: "/img1.png",
    category: "A award wining Voice agent project developed for Government Of Maharashtra",
  },
  {
    id: 2,
    title: "Devkstra",
    image: "/img3.png",
    category: "A hackathons and community platform for developers ",
  },
  {
    id: 3,
    title: "Replin AI",
    image: "/img2.png",
    category: "A 3-step voice agents creation platform developed in record time",
  },
  {
    id: 4,
    title: "Project MPark",
    image: "/img4.png",
    category: "Developed Parking solutions MVP for the city of Mumbai",
  },
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="relative z-10 py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            <span className="font-medium italic instrument">Featured</span> Projects
          </h2>
          <p className="text-white/70 text-sm font-light max-w-2xl mx-auto">
            Explore our latest shader experiments and interactive visualizations
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-medium text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm font-light">{project.category}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
