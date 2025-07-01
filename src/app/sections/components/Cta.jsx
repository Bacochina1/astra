"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export default function CTASection() {
  return (
    <div className="relative bg-gradient-to-b from-[#1a0d4a] via-[#000033] to-[#1a0d4a] py-16 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <Image src="/bg-4.png" alt="Background" width={0} height={0} className="w-full h-full absolute -z-0 object-left-top mix-blend-color-dodge opacity-30 "></Image>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 md:w-96 md:h-96 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-72 h-72 md:w-96 md:h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[32rem] md:h-[32rem] bg-purple-500/4 rounded-full blur-3xl" />
      </div>

      {/* Decorative Elements */}
    

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center">
          {/* Badge */}
          

          {/* Main Title */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide mb-8 md:mb-10 xl:mb-12 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Vamos</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold ml-3 md:ml-4">
              conversar?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12 md:mb-16 xl:mb-20"
          >
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 leading-relaxed font-light mb-6 md:mb-8">
              Quer evoluir seu produto com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
                segurança e estrutura
              </span>
              ?
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 leading-relaxed font-light">
              Entre em contato com a Astrahus. Vamos entender seu momento e propor o caminho certo — com{" "}
              <span className="text-purple-300 font-medium">estratégia</span>,{" "}
              <span className="text-blue-300 font-medium">engenharia</span> e{" "}
              <span className="text-purple-200 font-medium">clareza</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 xl:gap-10"
          >
            {/* Primary CTA - Agendar Diagnóstico */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <button className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 md:px-10 xl:px-12 py-4 md:py-5 xl:py-6 rounded-2xl font-bold text-base md:text-lg xl:text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25 min-w-[280px] md:min-w-[320px]">
                <span className="flex items-center gap-3 justify-center">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Agendar Diagnóstico Técnico
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Secondary CTA - Falar com Especialista */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <button className="relative bg-transparent border-2 border-purple-400/40 hover:border-purple-400 text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 px-8 md:px-10 xl:px-12 py-4 md:py-5 xl:py-6 rounded-2xl font-bold text-base md:text-lg xl:text-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm min-w-[280px] md:min-w-[320px]">
                <span className="flex items-center gap-3 justify-center">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                  Falar com Especialista
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 xl:mt-20"
          >
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 xl:p-10 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center md:text-left">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-200 text-sm md:text-base">Resposta em até 24h</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500" />
                  <span className="text-gray-200 text-sm md:text-base">Consultoria gratuita</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />
                  <span className="text-gray-200 text-sm md:text-base">Sem compromisso</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
