"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, TrendingUp, Zap, Monitor, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Auditoria técnica e de produto",
      description:
        "Identificamos riscos, gargalos e oportunidades na arquitetura, código e estratégia do seu produto. Entregamos um diagnóstico claro e um plano técnico para evoluir com confiança.",
      image: "/auditoria.png",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade de produtos e MVPs",
      description:
        "Seu produto cresceu. Agora precisa de base sólida. Reestruturamos sistemas, stacks e processos para suportar tráfego, usuários e novas funcionalidades — com segurança e desempenho.",
      image: "/scala.png",
    },
    {
      icon: Zap,
      title: "Criação de MVPs estratégicos",
      description:
        "Da ideia à validação. Desenvolvemos MVPs rápidos, estáveis e prontos para rodar no mundo real. Foco em produto viável, validado e escalável.",
      image: "/mvp.png",
    },
    {
      icon: Monitor,
      title: "Desenvolvimento de produtos digitais",
      description:
        "Construímos plataformas robustas, modulares e integradas. UX, front, back, dados — tudo alinhado à visão de negócio.",
      image: "/figma.png",
    },
    {
      icon: Users,
      title: "Soluções para startups em crescimento",
      description:
        "Ajudamos startups e times técnicos a estruturarem seus produtos com base em boas práticas, foco em ROI e arquitetura escalável.",
      image: "/analy.png",
    },
  ];

  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height + height * 0.3]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  return (
    <div
      className="relative bg-gradient-to-b from-[#1a0d4a] via-[#000033] to-[#1a0d4a] py-16 lg:py-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 bg-purple-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 bg-blue-500/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/15 backdrop-blur-sm border border-blue-400/25 rounded-full px-3 py-1.5 md:px-4 md:py-2 xl:px-5 xl:py-2.5 mb-6 md:mb-8 xl:mb-10"
          >
            <Monitor className="w-3 h-3 md:w-4 md:h-4 xl:w-5 xl:h-5 text-blue-400" />
            <span className="text-blue-300 text-xs md:text-sm xl:text-base font-medium">
              Nossos Serviços
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide mb-4 md:mb-6 xl:mb-8 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              O que
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold ml-2 md:ml-3 xl:ml-4">
              fazemos
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative" ref={ref}>
          {/* Timeline Line with Scroll Effect */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-[2px] xl:w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] xl:w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>

          <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-8 md:top-12 lg:top-16 w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 md:border-3 xl:border-4 border-[#000033] z-10" />

                  {/* Mobile Layout */}
                  <div className="block lg:hidden">
                    <div className="text-center pt-16 md:pt-20">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl mb-6 md:mb-8 hover:scale-110 hover:border-blue-400/50 transition-all duration-500">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 px-4 max-w-lg mx-auto">
                        {service.description}
                      </p>

                      {/* Image */}
                      <div className="px-4">
                        <div className="relative group max-w-md mx-auto">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-2 group-hover:border-purple-400/30 transition-all duration-500">
                            <img
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              className="w-full h-48 md:h-64 object-cover rounded-xl"
                            />
                            <div className="absolute inset-2 bg-gradient-to-t from-[#000033]/60 via-transparent to-transparent rounded-xl pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div
                    className={`hidden lg:flex items-center gap-16 xl:gap-20 ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        isEven
                          ? "text-right pr-8 xl:pr-12"
                          : "text-left pl-8 xl:pl-12"
                      }`}
                    >
                      <div className="group max-w-lg xl:max-w-xl">
                        {/* Icon */}
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl xl:rounded-3xl mb-6 xl:mb-8 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-500`}
                        >
                          <Icon className="w-8 h-8 xl:w-9 xl:h-9 text-purple-400" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 xl:mb-6 group-hover:text-purple-200 transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-lg xl:text-xl leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 max-w-lg xl:max-w-xl">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl xl:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl xl:rounded-3xl p-2 xl:p-3 group-hover:border-purple-400/30 transition-all duration-500">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-80 xl:h-96 object-cover rounded-xl xl:rounded-2xl"
                          />
                          <div className="absolute inset-2 xl:inset-3 bg-gradient-to-t from-[#000033]/60 via-transparent to-transparent rounded-xl xl:rounded-2xl pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 md:mt-24 lg:mt-28 xl:mt-32"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl xl:rounded-3xl p-6 md:p-8 xl:p-10 max-w-2xl xl:max-w-3xl mx-auto">
            <h3 className="text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 xl:mb-6">
              Qual serviço faz mais sentido para{" "} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                seu projeto
              </span>
              ?
            </h3>
            <p className="text-gray-300 text-sm md:text-base xl:text-base mb-6 xl:mb-8">
              Vamos conversar e encontrar a solução ideal para o seu negócio.
            </p>
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 md:px-8 xl:px-10 py-3 md:py-4 xl:py-5 rounded-xl xl:rounded-2xl font-semibold text-sm md:text-base xl:text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25">
              <span className="flex items-center gap-2 xl:gap-3 justify-center">
                Descobrir solução ideal
                <Monitor className="w-4 h-4 xl:w-5 xl:h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
