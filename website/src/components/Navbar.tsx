"use client"

import githubIcon from "../assets/github.svg"
import linkedInLogo from "../assets/linkedin.svg"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ]

  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#1D201F]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center z-10">
          <a href="/" className="text-lg font-bold sm:text-xl whitespace-nowrap">
            Deborah Oladokun
          </a>
        </div>

        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-medium transition-all duration-300 hover:text-[#EAD2AC] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#EAD2AC] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4 z-10">

          <a
            href="mailto:deboraholadok@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <img
              src="/mailbox.svg"
              alt="Email"
              className="h-5 w-5 object-contain transition duration-300 invert hover:invert-0 hover:scale-110"
            />
          </a>
          <a
            href="https://github.com/deborahola"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <img
              src={githubIcon || "/placeholder.svg"}
              alt="GitHub"
              className="h-5 w-5 object-contain transition duration-300 invert hover:invert-0 hover:scale-110"
            />
          </a>
          <a
            href="https://linkedin.com/in/deborah-oladokun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <img
              src={linkedInLogo || "/placeholder.svg"}
              alt="LinkedIn"
              className="h-5 w-5 object-contain transition duration-300 invert hover:invert-0 hover:scale-110"
            />
          </a>
      

          <div className="relative md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-[99] border-t border-gray-800 bg-[#1D201F] shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium py-2 transition-colors duration-300 hover:text-[#EAD2AC]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
