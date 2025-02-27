"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface FloatingImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function FloatingImage({ src, alt, width = 1200, height = 1200 }: FloatingImageProps) {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div ref={imgRef} className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center">
      <Image 
      
      src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
