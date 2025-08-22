"use client"

export default function HeroContent() {
  return (
    <main className="relative z-20 max-w-lg px-4 sm:px-8 pt-32 sm:pt-64 pb-16 sm:pb-24">
      <div className="text-left space-y-4 sm:space-y-6">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <span className="text-white/90 text-xs font-light">✨ Cutting-Edge AI Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight font-light text-white mb-3 sm:mb-4">
          <span className="block sm:whitespace-nowrap">
            <span className="font-medium italic instrument">Orchestrating</span> the Future
          </span>
          <span className="block font-light tracking-tight text-white">of Automation</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base font-light text-white/70 mb-6 leading-relaxed max-w-md">
          Your trusted partner in AI-powered automation, custom software, and scalable MVP development.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <a href="#contact" className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Connect
          </a>
          <a href="#features" className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Get Started
          </a>
        </div>
      </div>
    </main>
  )
}
