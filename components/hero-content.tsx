"use client"

export default function HeroContent() {
  return (
    <main className="relative z-20 max-w-lg px-8 pt-64 pb-24">
      <div className="text-left space-y-6">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <span className="text-white/90 text-xs font-light">✨ Cutting-Edge AI Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="whitespace-nowrap">
            <span className="font-medium italic instrument">Orchestrating</span> the Future
          </span>
          <br />
          <span className="font-light tracking-tight text-white">of Automation</span>
        </h1>

        {/* Description */}
        <p className="text-base font-light text-white/70 mb-4 leading-relaxed">
        Your trusted partner in AI-powered automation, custom software, and scalable MVP development.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <a href="#contact" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Connect
          </a>
          <a href="#features" className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Get Started
          </a>
        </div>
      </div>
    </main>
  )
}
