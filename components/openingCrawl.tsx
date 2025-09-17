"use client";

// Componente que muestra el opening crawl de una película
// con un efecto de scroll que simula una perspectiva
// y hace que el texto se acerque al centro de la pantalla
// a medida que se scrollea hacia abajo
import { useEffect, useState } from "react";

export default function OpeningCrawl({
  title,
  episode,
  openingCrawl,
}: {
  title: string;
  episode: number;
  openingCrawl: string;
}) {
  const [scrollY, setScrollY] = useState(0);

  // Event listener para detectar el scroll y actualizar el estado
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcula del progreso del scroll en porcentaje
  const scrollProgress = Math.min(
    scrollY / (typeof window !== "undefined" ? window.innerHeight * 2 : 1600),
    1
  );
  // Calcula de la posición de transformación en función del progreso del scroll
  const translateY = 30 - scrollProgress * 200;
  // Estilo de transformación para aplicar la perspectiva y la transformación
  const transform = `perspective(400px) rotateX(10deg) translateY(${translateY}vh)`;

  // Divide el texto del opening crawl en párrafos y elimina los vacíos
  const paragraphs = openingCrawl
    .split("\r\n\r\n")
    .map((paragraph: string) => paragraph.replace(/\r\n/g, " "))
    .filter((paragraph: string) => paragraph.trim().length > 0);

  return (
    <div
      className="flex items-center justify-center min-h-screen text-yellow-300"
      style={{ perspective: "400px", zIndex: 2 }}
    >
      <div
        className="crawl-text-scroll w-full max-w-4xl mx-auto px-8"
        style={{ transform }}
      >
        <div className="text-primary text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-sans">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-wider">
              STAR WARS
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 tracking-wide">
              Episode {episode} - {title}
            </h2>
          </div>

          <div className="space-y-8 text-justify max-w-3xl mx-auto">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
