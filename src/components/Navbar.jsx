import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">@yourname</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#resume" className="hover:text-gray-900 transition-colors" onClick={(e) => e.preventDefault()}>Resume</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="Email" href="mailto:you@example.com" className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
