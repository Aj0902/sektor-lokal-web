'use client';

import React, { useRef, useEffect, useState } from 'react';

interface InteractiveMarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export default function InteractiveMarquee({
  children,
  direction = 'left',
  speed = 0.8,
  className = ''
}: InteractiveMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let animId: number;

    const autoScroll = () => {
      const el = containerRef.current;
      if (el && !isMouseDownRef.current && !isInteracting) {
        if (direction === 'left') {
          el.scrollLeft += speed;
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft -= el.scrollWidth / 2;
          }
        } else {
          el.scrollLeft -= speed;
          if (el.scrollLeft <= 0) {
            el.scrollLeft += el.scrollWidth / 2;
          }
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animId);
  }, [direction, speed, isInteracting]);

  const triggerResumeTimeout = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDownRef.current = true;
    setIsInteracting(true);
    if (containerRef.current) {
      startXRef.current = e.pageX - containerRef.current.offsetLeft;
      scrollLeftRef.current = containerRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
    triggerResumeTimeout();
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    triggerResumeTimeout();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={triggerResumeTimeout}
      onMouseEnter={() => setIsInteracting(true)}
      className={`w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none ${className}`}
    >
      <div className="flex gap-6 w-max py-4">
        {children}
      </div>
    </div>
  );
}
