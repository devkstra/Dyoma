"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies?: string[];
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Project Maha-Sahayak",
    image: "/img1.png",
    description: "Award-winning voice agent project developed for Government Of Maharashtra",
  },
  {
    id: 2,
    title: "Devkstra",
    image: "/img3.png",
    description: "A hackathons and community platform for developers",
  },
  {
    id: 3,
    title: "Replin AI",
    image: "/img2.png",
    description: "A 3-step voice agents creation platform developed in record time",
  },
  {
    id: 4,
    title: "Project MPark",
    image: "/img4.png",
    description: "Developed Parking solutions MVP for the city of Mumbai",
  },
]

const additionalProjects: Project[] = [
  {
    id: 5,
    title: "Warmth.AI",
    image: "/img5.png",
    description: "A modern AI companion platform that uses voice cloning technology to create personalized conversations that feel like family",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Web Audio API", "Framer Motion"]
  }
]

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const projects = showAll ? [...initialProjects, ...additionalProjects] : initialProjects
  
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
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            <span className="font-medium italic instrument">Our</span> Work
          </h2>
          <p className="text-white/70 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions that drive digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-3">
                  {project.description.length > 80 ? `${project.description.substring(0, 80)}...` : project.description}
                </p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies?.map((tech: string, i: number) => (
                      <span key={i} className="text-xs text-violet-300/80 bg-violet-900/30 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </motion.button>
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}
