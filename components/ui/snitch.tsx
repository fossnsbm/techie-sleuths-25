import { useEffect, useRef } from 'react';

const Snitch = () => {
  const snitchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveSnitch = () => {
      if (snitchRef.current) {
        
        const screenWidth = window.innerWidth-32; 
        const screenHeight = window.innerHeight-32;

        // Random position within the screen
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
    width: '50px',
    height: '50px',
    background: 'gold',
    borderRadius: '50%',
    boxShadow: '0 0 10px 5px rgba(255, 215, 0, 0.8)',
    pointerEvents: 'none',
    transition: 'all 2s ease',
  }}
  onMouseEnter={() => {
    if (snitchRef.current) {
      snitchRef.current.style.backgroundColor = 'rgba(255, 215, 0, 0.6)';
    }
  }}
  onMouseLeave={() => {
    if (snitchRef.current) {
      snitchRef.current.style.backgroundColor = 'gold';
    }
  }}
/>

  );
};

export default Snitch;
