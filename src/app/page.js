"use client";

import Navbar from "./sections/Navbar";
import Hero from "./sections/HeroSection";
import { Suspense } from "react";

// Loading Component
const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-[#000033] via-[#150520] to-[#000033] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main loading content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated SVG */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73"
            height="74"
            viewBox="0 0 73 74"
            fill="none"
            className="relative z-10 animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            <g clipPath="url(#clip0_6_2)">
              <path
                d="M57.4957 58.2299L36.4328 48.2244L15.3698 58.2299L8.14526 74L36.4328 59.4425L64.5824 74L57.4957 58.2299Z"
                fill="#6E00E6"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <path
                d="M73 64.9708L43.2939 1.51731C43.2939 1.51731 43.2814 1.49866 43.2783 1.48622C43.1029 1.10378 42.9025 0.721345 42.7396 0.32958L42.6363 0.108824H42.5862L42.6238 0.0279832C42.5925 0.0186555 42.558 0.012437 42.5267 0H30.4639C30.37 0.198992 30.2729 0.397983 30.1727 0.593866C30.0725 0.795966 29.9785 1.00429 29.8532 1.19395C29.8532 1.19395 29.8532 1.19395 29.8501 1.19706C29.7812 1.3463 29.6998 1.49244 29.6059 1.62303L0 64.8619L8.14521 73.9969L36.4546 13.2578L64.5823 74L73 64.9739V64.9708Z"
                fill="white"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </g>
            <defs>
              <clipPath id="clip0_6_2">
                <rect width="73" height="74" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-lg font-light">Carregando</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/60 rounded-full animate-bounce" />
              <div
                className="w-1 h-1 bg-white/60 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1 h-1 bg-white/60 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
    </div>
  );
}
