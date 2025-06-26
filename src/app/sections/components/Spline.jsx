'use client';
import React from "react";
import Spline from "@splinetool/react-spline";

const SplineAnim = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline
        scene="https://prod.spline.design/EBeZQyvaIksy4qvx/scene.splinecode"
      />
      {/* Enhanced overlay with gradient - Mais forte no mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000033]/100 via-[#4B0082]/30 to-[#000033]/90 md:from-[#000033]/60 md:via-[#4B0082]/20 md:to-[#000033]/100" />
    </div>
  );
};

export default SplineAnim;
