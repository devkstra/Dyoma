"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth <= 768;
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsMobile(isMobileView && isPortrait);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 15 -7"
              result="glow"
            />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
          <filter id="gooey-filter" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Background Shaders */}
      {isMobile ? (
        // Mobile-optimized gradient with adjusted colors and slower speed
        <div className="absolute inset-0 w-full h-full">
          <MeshGradient
            className="w-full h-full"
            colors={["#1e1b4b", "#8b5cf6", "#ffffff", "#4338ca", "#6d28d9"]}
            speed={0.15} // Slower speed for better mobile experience
            scale={1.5}  // Increased scale for better coverage on mobile
          />
          <MeshGradient
            className="absolute inset-0 w-full h-full opacity-40"
            colors={["#111827", "#ffffff", "#8b5cf6", "#4338ca"]}
            speed={0.1}  // Slower speed for better mobile experience
            scale={1.8}  // Increased scale for better coverage on mobile
          />
        </div>
      ) : (
        // Original desktop gradients
        <>
          <MeshGradient
            className="absolute inset-0 w-full h-full"
            colors={["#1e1b4b", "#8b5cf6", "#ffffff", "#4338ca", "#6d28d9"]}
            speed={0.3}
          />
          <MeshGradient
            className="absolute inset-0 w-full h-full opacity-60"
            colors={["#111827", "#ffffff", "#8b5cf6", "#4338ca"]}
            speed={0.2}
          />
        </>
      )}

      {children}
    </div>
  )
}
