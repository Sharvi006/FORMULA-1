import { useEffect, useRef } from 'react';

export function GlobalSparks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
      isBurst: boolean;

      constructor(x: number, y: number, isBurst: boolean) {
        this.x = x;
        this.y = y;
        this.isBurst = isBurst;
        this.maxLife = isBurst ? Math.random() * 40 + 20 : Math.random() * 150 + 100;
        this.life = this.maxLife;
        this.size = isBurst ? Math.random() * 3 + 1 : Math.random() * 2 + 0.5;

        if (isBurst) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 8 + 2;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
          this.color = '#ffaa00'; // Bright spark
        } else {
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = -Math.random() * 0.5 - 0.2;
          this.color = '#ffaa00'; // Translucent handled by globalAlpha
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.isBurst) {
          this.vy += 0.2; // gravity
          this.vx *= 0.98; // friction
          this.size *= 0.96; // shrink
        } else {
          // Drift slightly
          this.vx += (Math.random() - 0.5) * 0.05;
        }
        this.life--;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // Ambient sparks are more translucent
        const baseAlpha = this.isBurst ? 1 : 0.3;
        ctx.globalAlpha = Math.max(0, (this.life / this.maxLife) * baseAlpha);
        ctx.shadowBlur = this.isBurst ? 10 : 5;
        ctx.shadowColor = '#ffaa00';
        ctx.fill();
        ctx.restore();
      }
    }

    // Spawn ambient sparks occasionally
    const spawnAmbient = () => {
      if (particles.length < 100) {
        particles.push(new Particle(Math.random() * canvas.width, canvas.height + 10, false));
      }
    };

    // Handle clicks for bursts
    const handleClick = (e: MouseEvent) => {
      const isButton = (e.target as HTMLElement).closest('button, a, [role="button"]');
      const burstCount = isButton ? 40 : 15; // Bigger burst for buttons
      
      for (let i = 0; i < burstCount; i++) {
        particles.push(new Particle(e.clientX, e.clientY, true));
      }
    };
    window.addEventListener('click', handleClick);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (Math.random() < 0.1) spawnAmbient();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
