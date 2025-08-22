"use client"

import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <img 
              src="/logo1.png" 
              alt="Dyoma Labs Logo" 
              className="h-24 w-auto"
              width={96}
              height={96}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
