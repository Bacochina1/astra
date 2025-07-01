"use client";
import React from "react";

const SplineAnim = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <video
        className="absolute inset-0 w-full h-full object-cover max-lg:object-[100% 100%]"
        src="/background.mp4"
        autoPlay
        loop
        muted
      />
       <div className="absolute inset-0 bg-gradient-to-br from-[#000033]/100 via-[#4B0082]/30 to-[#000033]/90 md:from-[#000033]/60 md:via-[#4B0082]/20 md:to-[#000033]/100" />
    </div>
  );
};

export default SplineAnim;

