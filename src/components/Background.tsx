import React, { useEffect, useRef, useState } from "react";

const BlockchainBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas on window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 50;

    // Mouse coordinates
    let mouseX = -100;
    let mouseY = -100;

    // Define Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.color = `rgba(59, 130, 246, 0.6)`;
      }

      update() {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (100 - distance) / 100;

          this.speedX += forceDirectionX * force * 0.5;
          this.speedY += forceDirectionY * force * 0.5;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles based on proximity
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - distance / 100) * 0.6})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Mouse movement event handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      setMouseCoords({ x: mouseX, y: mouseY }); // Update mouse coordinates state
    };

    const handleMouseLeave = () => {
      mouseX = -100;
      mouseY = -100;
    };

    // Attach mouse event listeners
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          background: "#ffffff",
        }}
      />
      {/* Display mouse coordinates for debugging */}
      <div style={{ position: "absolute", top: "10px", left: "10px", color: "black" }}>
        Mouse X: {mouseCoords.x}, Mouse Y: {mouseCoords.y}
      </div>
    </div>
  );
};

export default BlockchainBackground;
