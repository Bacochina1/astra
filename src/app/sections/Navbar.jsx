"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#4B0082]/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative w-32 h-8">
            <Image src="/logo.svg" alt="Astrahus Logo" fill className="object-contain" priority />
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {["Sobre Nós", "Nossos Projetos", "História"].map((item, index) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="bg-[#4B0082] hover:bg-[#3B0062] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar em Contato
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
