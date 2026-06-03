import { useEffect, useRef, useCallback } from "react";

export default function CursorParticles({ color = "#C8A96A", count = 40 }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -200, y: -200, inside: false });
  const rafRef = useRef(null);
  const pulseTimerRef = useRef(0);

  const createParticle = useCallback((x, y, burst = false) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = burst
      ? Math.random() * 1.5 + 0.3
      : Math.random() * 2.5 + 0.5;
    const size = Math.random() * 3 + 1;
    const life = Math.random() * 50 + 25;

    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size,
      life,
      maxLife: life,
      opacity: 1,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Listen on the parent section, not on the canvas
    const parent = canvas.parentElement;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        inside: true,
      };

      // Spawn particles on move (subtle)
      if (particlesRef.current.length < count) {
        particlesRef.current.push(
          createParticle(mouseRef.current.x, mouseRef.current.y)
        );
      }
    };

    const handleMouseEnter = () => {
      mouseRef.current.inside = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.inside = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pulseTimerRef.current++;

      // Pulse: spawn particles even when cursor is still (every ~15 frames)
      if (
        mouseRef.current.inside &&
        pulseTimerRef.current % 15 === 0
      ) {
        if (particlesRef.current.length < count) {
          particlesRef.current.push(
            createParticle(
              mouseRef.current.x + (Math.random() - 0.5) * 8,
              mouseRef.current.y + (Math.random() - 0.5) * 8,
              true
            )
          );
        }
      }

      // Draw a pulsing glow ring at cursor position when inside
      if (mouseRef.current.inside) {
        const pulse = Math.sin(pulseTimerRef.current * 0.08) * 0.3 + 0.5;
        const ringRadius = 12 + Math.sin(pulseTimerRef.current * 0.06) * 6;

        // Outer glow
        ctx.save();
        ctx.globalAlpha = pulse * 0.15;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, ringRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 30;
        ctx.fill();
        ctx.restore();

        // Inner ring
        ctx.save();
        ctx.globalAlpha = pulse * 0.4;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.restore();

        // Center dot
        ctx.save();
        ctx.globalAlpha = pulse * 0.6 + 0.3;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        p.life--;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.015;
        p.vx *= 0.99;
        p.opacity = p.life / p.maxLife;

        if (p.life <= 0) return false;

        const rotation = Math.atan2(p.vy, p.vx);

        ctx.save();
        ctx.globalAlpha = p.opacity * 0.8;
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 4;
        ctx.translate(p.x, p.y);
        ctx.rotate(rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 1.8, p.size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseenter", handleMouseEnter);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseenter", handleMouseEnter);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [color, count, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-30 pointer-events-none"
    />
  );
}
