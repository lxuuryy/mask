'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom hook for tracking mouse position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  
  return mousePosition;
};

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  
  return (
    <main className="h-screen">
      <motion.div 
        className="w-full h-full flex items-center justify-center absolute"
        style={{
          maskImage: 'url("/mask.svg")',
          maskRepeat: 'no-repeat',
          maskSize: `${size}px`,
          background: '#ec4e39',
          color: 'black',
        }}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p 
          className="w-[1000px] p-10 text-[64px] leading-[66px] cursor-default"
          onMouseEnter={() => {setIsHovered(true)}} 
          onMouseLeave={() => {setIsHovered(false)}}
        >
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      
      <div className="w-full h-full flex items-center justify-center text-[#afa18f] text-[64px] leading-[66px] cursor-default">
        <p className="w-[1000px] p-10">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  );
}