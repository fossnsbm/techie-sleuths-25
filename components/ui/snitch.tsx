import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Snitch = () => {
  const snitchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveSnitch = () => {
      if (snitchRef.current) {
        const screenWidth = window.innerWidth - 32;
        const screenHeight = window.innerHeight - 32;

        const randomX = Math.random() * screenWidth;
        const randomY = Math.random() * screenHeight;

        snitchRef.current.style.left = `${randomX}px`;
        snitchRef.current.style.top = `${randomY}px`;
      }
    };

    const interval = setInterval(moveSnitch, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={snitchRef}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '200px', 
        height: '200px',
        pointerEvents: 'none',
        transition: 'all 2s ease',
        borderRadius: '50%', 
        overflow: 'hidden', 
      }}
      onMouseEnter={() => {
        if (snitchRef.current) {
          snitchRef.current.style.opacity = '0.8';
        }
      }}
      onMouseLeave={() => {
        if (snitchRef.current) {
          snitchRef.current.style.opacity = '1';
        }
      }}
    >
      <Image
        src="/snitchF.gif"
        width={250} 
        height={250} 
        alt="Snitch"
        style={{
          objectFit: 'cover', 
        }}
      />
    </div>
  );
};

export default Snitch;
