"use client";

// Importa las funcionesas necesarias de React
import { useEffect, useRef } from "react";

// Componente que dibuja una estrella en una página
export default function Starfield() {
  // Referencia a un elemento HTMLCanvasElement
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Efecto que se ejecuta una sola vez cuando el componente se monta
  useEffect(() => {
    // Obtiene el elemento HTMLCanvasElement de la referencia
    const canvas = canvasRef.current;
    // Si no se encuentra el elemento, no hace nada
    if (!canvas) return;

    // Obtiene el contexto 2D del elemento
    const ctx = canvas.getContext("2d");
    // Si no se encuentra el contexto, no hace nada
    if (!ctx) return;

    // Función que se encarga de redimensionar el canvas al tamaño de la ventana
    const resizeCanvas = () => {
      // Establece el ancho y el alto del canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Redimensiona el canvas al tamaño de la ventana
    resizeCanvas();
    // Añade un evento de redimensionamiento a la ventana
    window.addEventListener("resize", resizeCanvas);

    // Crear estrellas
    const stars: Array<{
      // Posición x de la estrella
      x: number;
      // Posición y de la estrella
      y: number;
      // Tamaño de la estrella
      size: number;
      // Opacidad de la estrella
      opacity: number;
      // Velocidad de parpadeo de la estrella
      twinkleSpeed: number;
    }> = [];

    // Crear 200 estrellas con posiciones, tamaños, opacidad y velocidades de parpadeo aleatorias
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Variable que almacena el ID de la animación
    let animationId: number;
    // Variable que almacena el tiempo de la animación
    let time = 0;

    // Función que se encarga de dibujar las estrellas en el canvas
    const animate = () => {
      // Limpia el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Incrementa el tiempo de la animación
      time += 0.01;

      // Dibuja cada estrella en el canvas
      stars.forEach((star) => {
        // Calcula la opacidad de la estrella en función del tiempo
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7;
        // Establece el color de la estrella en función de la opacidad
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        // Comienza el contexto para dibujar un círculo
        ctx.beginPath();
        // Dibuja el círculo en el canvas
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        // Rellena el contexto para dibujar el círculo
        ctx.fill();
      });

      // Pide a la función requestAnimationFrame para dibujar la siguiente frame
      animationId = requestAnimationFrame(animate);
    };

    // Dibuja la primera frame
    animate();

    // Devuelve una función que se encarga de eliminar el evento de redimensionamiento y cancelar la animación
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Devuelve el elemento HTMLCanvasElement
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
