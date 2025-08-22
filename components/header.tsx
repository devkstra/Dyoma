"use client"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <a href="#home" className="block">
          <img 
            src="/logo2.png" 
            alt="Dyoma Labs Logo" 
            className="h-10 w-auto"
            width={147}
            height={40}
          />
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-1">
        <a
          href="#features"
          className="text-white/80 hover:text-white text-xs font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Features
        </a>
        <a
          href="#projects"
          className="text-white/80 hover:text-white text-xs font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Projects
        </a>
        <a
          href="#about"
          className="text-white/80 hover:text-white text-xs font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          About Us
        </a>
        <a
          href="#contact"
          className="text-white/80 hover:text-white text-xs font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Contact
        </a>
      </nav>

      {/* Login Button Group with Arrow */}
      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <a href="#contact" className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
        <a href="#contact" className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
          Connect
        </a>
      </div>
    </header>
  )
}
