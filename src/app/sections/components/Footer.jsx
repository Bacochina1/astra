"use client"

import { motion } from "framer-motion"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-3 md:mb-6"
          >
            <div className="inline-block">
              
              <Image
                src="/logo.svg"
                alt="Astrahus Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
        
            </div>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8 md:mb-10"
          />

          {/* Copyright */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base lg:text-lg font-light"
          >
            © 2025 Astrahus. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
