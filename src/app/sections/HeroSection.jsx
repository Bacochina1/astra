"use client";

import { motion } from "framer-motion";
import SplineAnim from "./components/Spline";
import { Phone, BookOpen, ArrowRight, Zap, Shield, Rocket } from "lucide-react";

// StarBorder Component
const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default function Hero() {
  return (
    <>
      <style jsx>{`
        .star-border-container {
          display: inline-block;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .border-gradient-bottom {
          position: absolute;
          width: 300%;
          height: 50%;
          opacity: 0.7;
          bottom: -12px;
          right: -250%;
          border-radius: 50%;
          animation: star-movement-bottom linear infinite alternate;
          z-index: 0;
        }

        .border-gradient-top {
          position: absolute;
          opacity: 0.7;
          width: 300%;
          height: 50%;
          top: -12px;
          left: -250%;
          border-radius: 50%;
          animation: star-movement-top linear infinite alternate;
          z-index: 0;
        }

        .inner-content {
          position: relative;
          border: 1px solid #222;
          background: #000;
          color: white;
          font-size: 16px;
          text-align: center;
          padding: 16px 26px;
          border-radius: 20px;
          z-index: 1;
        }

        @keyframes star-movement-bottom {
          0% {
            transform: translate(0%, 0%);
            opacity: 1;
          }
          100% {
            transform: translate(-100%, 0%);
            opacity: 0;
          }
        }

        @keyframes star-movement-top {
          0% {
            transform: translate(0%, 0%);
            opacity: 1;
          }
          100% {
            transform: translate(100%, 0%);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .inner-content {
            font-size: 14px;
            padding: 12px 20px;
          }
        }
      `}</style>

      <div className="relative min-h-screen overflow-hidden bg-[#000033]">
        {/* Spline Background - Otimizado para Mobile */}

        <SplineAnim />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8 hover:bg-purple-500/30 transition-all duration-300"
                >
                  <Zap className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                  <span className="text-purple-300 text-xs md:text-sm font-medium">
                    Inovação Digital
                  </span>
                </motion.div>

                {/* Main Heading - Responsivo */}
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide mb-6 md:mb-8 "
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
                    Escalamos produtos.
                  </span>
                  <span className="block text-transparent tracking-normal bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 mt-1  font-bold">
                    Fortalecemos projetos.
                  </span>
                </motion.h1>

                {/* Subtitle - Responsivo */}
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-4 lg:px-0"
                >
                  Na Astrahus, combinamos estratégia, produto e tecnologia para
                  impulsionar negócios com velocidade e segurança.
                </motion.p>

                {/* Enhanced CTA Buttons - Mobile First */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12 px-4 lg:px-0"
                >
                  {/* StarBorder Button - Mobile Otimizado */}
                  <StarBorder
                    className="group transition-all duration-500 hover:scale-105 w-full sm:w-auto"
                    color="white"
                    speed="4s"
                    thickness={2}
                  >
                    <div className="flex items-center gap-2 md:gap-3 min-w-[200px] sm:min-w-[240px] justify-center text-sm md:text-base">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-500" />
                      <span>Agende uma conversa</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </StarBorder>

                  <button className="group relative bg-transparent border-2 border-purple-400/40 hover:border-purple-400 text-white hover:bg-purple-400/20 px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-500 hover:scale-105 flex items-center gap-2 md:gap-3 min-w-[180px] sm:min-w-[200px] justify-center backdrop-blur-sm overflow-hidden w-full sm:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10" />
                    <span className="relative z-10">Ver soluções</span>
                  </button>
                </motion.div>

                {/* Feature Cards - Otimizados para Mobile */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="w-full max-w-5xl mx-auto px-4 lg:px-0"
                >
                  {/* Mobile: Cards em coluna única, Desktop: Cards em linha */}
                  <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6">
                    {/* Velocidade Card */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-5 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer flex-1 hover:shadow-2xl hover:shadow-purple-500/10"
                    >
                      <div className="flex flex-col items-center text-center gap-3 sm:gap-2">
                        <div className="w-12 h-12 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-purple-600/30 transition-all duration-300 group-hover:scale-110">
                          <Rocket className="w-6 h-6 sm:w-5 sm:h-5 text-purple-400 group-hover:text-purple-300" />
                        </div>
                        <h3 className="text-white font-bold text-lg sm:text-base group-hover:text-purple-200 transition-colors duration-300">
                          Velocidade
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-xs leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          Entrega rápida com qualidade excepcional
                        </p>
                      </div>
                    </motion.div>

                    {/* Segurança Card */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-5 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer flex-1 hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                      <div className="flex flex-col items-center text-center gap-3 sm:gap-2">
                        <div className="w-12 h-12 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-blue-600/30 transition-all duration-300 group-hover:scale-110">
                          <Shield className="w-6 h-6 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300" />
                        </div>
                        <h3 className="text-white font-bold text-lg sm:text-base group-hover:text-blue-200 transition-colors duration-300">
                          Segurança
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-xs leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          Proteção total dos seus dados e sistemas
                        </p>
                      </div>
                    </motion.div>

                    {/* Inovação Card */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-5 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300 cursor-pointer flex-1 hover:shadow-2xl hover:shadow-emerald-500/10"
                    >
                      <div className="flex flex-col items-center text-center gap-3 sm:gap-2">
                        <div className="w-12 h-12 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 rounded-xl flex items-center justify-center group-hover:from-emerald-500/40 group-hover:to-emerald-600/30 transition-all duration-300 group-hover:scale-110">
                          <Zap className="w-6 h-6 sm:w-5 sm:h-5 text-emerald-400 group-hover:text-emerald-300" />
                        </div>
                        <h3 className="text-white font-bold text-lg sm:text-base group-hover:text-emerald-200 transition-colors duration-300">
                          Inovação
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-xs leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          Tecnologias de ponta para seu negócio
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced gradient overlays - Mobile Otimizado */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000033]/90 md:to-[#000033]/80 pointer-events-none z-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000033]/40 via-transparent to-[#000033]/40 md:from-[#000033]/30 md:to-[#000033]/30 pointer-events-none z-5" />

        {/* Glow effects - Reduzidos no mobile */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-5" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-5" />
      </div>
    </>
  );
}
