"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Aurora from "./components/Aurora"

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000033]">
      {/* Aurora Background */}
      <Aurora colorStops={["#4B0082", "#800080", "#4B0082"]} amplitude={1.2} blend={0.7} />

      {/* Subtle animated background pattern */}
     

      {/* Content */}
      <div className="relative pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white">
              Transformamos Ideias em{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400">
              Impacto Digital
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Desenvolvemos soluções digitais inovadoras que rompem limites, impulsionam seu crescimento e colocam sua
            empresa à frente da concorrência.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <button className="bg-[#4B0082] hover:bg-[#3B0062] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
              Entrar em Contato
            </button>
            <button className="bg-transparent border-2 border-purple-400/30 text-white hover:bg-purple-400/10 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Nossos Projetos
            </button>
          </motion.div>
        </motion.div>

        {/* Project Showcase */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative max-w-6xl mx-auto"
        >
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[#4B0082]/10 backdrop-blur-sm" />
            <Image
              src="/hero-bg-1.png"
              alt="Astrahus Project Showcase"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000033]/60 via-transparent to-transparent" />

            {/* Glass card */}
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Tecnologia de Ponta</h3>
              <p className="text-gray-200">Soluções inovadoras que impulsionam o crescimento do seu negócio</p>
            </div>
          </div>

          {/* Floating UI element */}
          <motion.div
            className="absolute -right-10 top-1/4 w-64 h-64"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-bg-2.png"
                alt="Mobile App Preview"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#4B0082]/30 to-[#000033]/30" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

