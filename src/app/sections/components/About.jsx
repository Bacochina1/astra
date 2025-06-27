"use client"

import { motion } from "framer-motion"
import { Target, Code, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <div  style={{
    background: "linear-gradient(to bottom, transparent 0%, #000033 40px, #1a0d4a 100%)"
  }} className="relative -mt-20 py-16 md:py-20">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/bg-2.png" alt="Background" width={0} height={0} className="w-full h-full mix-blend-soft-light opacity-25 "></Image>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-500/15 backdrop-blur-sm border border-purple-400/25 rounded-full px-4 py-2 mb-8"
          >
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Sobre a Astrahus</span>
          </motion.div>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-8 "
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Mais do que código.
            </span>
            <span className="block text-transparent bg-clip-text uppercase -tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 mt-2 font-bold">
              Entregamos crescimento.
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            A Astrahus conecta <span className="text-purple-400 font-semibold">visão de produto</span>,{" "}
            <span className="text-blue-400 font-semibold">engenharia de software</span> e{" "}
            <span className="text-purple-300 font-semibold">estratégia de negócios</span>. Criamos soluções escaláveis
            que realmente sustentam o crescimento.
          </motion.p>
        </div>

        {/* Feature Grid - Compacto */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Visão de Produto */}
          <div className="group text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400/50 transition-all duration-500">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
              Visão de Produto
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              Conectamos estratégia de negócios com desenvolvimento técnico
            </p>
          </div>

          {/* Engenharia de Software */}
          <div className="group text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-500">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
              Engenharia de Software
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              Soluções escaláveis e seguras com as melhores práticas
            </p>
          </div>

          {/* Estratégia de Crescimento */}
          <div className="group text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-500">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
              Estratégia de Crescimento
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              Soluções que evoluem com o mercado e sustentam o crescimento
            </p>
          </div>
        </motion.div>

        {/* CTA Simples */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                transformar
              </span>{" "}
              seu projeto?
            </h3>
            <p className="text-gray-300 mb-6">Vamos conversar sobre como acelerar o crescimento do seu negócio.</p>
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25">
              <span className="flex items-center gap-2">
                Vamos conversar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
