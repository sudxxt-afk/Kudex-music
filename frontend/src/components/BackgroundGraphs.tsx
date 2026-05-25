import React, { useEffect, useRef } from 'react';

export const BackgroundGraphs: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Config
    const particleCount = window.innerWidth < 768 ? 40 : 80;
    const connectionDistance = 150;
    const baseSpeed = 0.15;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const colorStr = getComputedStyle(document.body).getPropertyValue('--primary').trim();
      let r=224, g=182, b=255;
      if (colorStr && colorStr.startsWith('#')) {
        const hex = colorStr.replace('#', '');
        r = parseInt(hex.substring(0, 2), 16) || 224;
        g = parseInt(hex.substring(2, 4), 16) || 182;
        b = parseInt(hex.substring(4, 6), 16) || 255;
      }
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(r, g, b));
      }
      return { r, g, b };
    };

    let themeColor = { r: 224, g: 182, b: 255 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      r: number;
      g: number;
      b: number;

      constructor(r: number, g: number, b: number) {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * baseSpeed;
        this.vy = (Math.random() - 0.5) * baseSpeed;
        this.radius = Math.random() * 2 + 1;
        this.r = r;
        this.g = g;
        this.b = b;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, 0.3)`;
        ctx.fill();
      }
    }

    themeColor = init();

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Optionally re-init particles or keep them
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
