/**
 * Componente principal de la página de inicio
 * Muestra una lista de películas de Star Wars ordenadas por episodio
 * Cada película se muestra con un icono de una cinta de cine y su título
 * Al hacer clic en una película se redirige a la página de la película
 * con el episodio correspondiente
 */
import Link from "next/link";
import { getFilms } from "../lib/actions";
import { FilmIcon } from "lucide-react";

export default async function HomePage() {
  const films = await getFilms();

  return (
    <div className="min-h-screen bg-stars-animated bg-gradient-to-b from-slate-900 to-black text-white py-10">
      {/* Contenedor principal de la página */}
      <div className="container mx-auto px-4 py-8">
        {/* Título principal de la página con un efecto de sombra */}
        <header className="text-center mb-12">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent drop-shadow-[0_0_10px_rgb(250,204,21)]"
            style={{ WebkitTextStroke: "2px rgb(250,204,21)" }}
          >
            STAR WARS
          </h1>
          <p className="text-xl text-white">
            Movies from a galaxy far, far away...
          </p>
        </header>

        {/* Grid que muestra las películas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {films
            .slice() // Clona el array para evitar que se modifique
            .sort((a, b) => a.episode_id - b.episode_id) // Ordena las películas por episodio
            .map((film) => (
              <Link
                key={film.episode_id}
                href={`/Film/${film.episode_id}`} // Enlace a la página de la película con el episodio correspondiente
                className="group" // Clase para agrupar los estilos del enlace
              >
                <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transform hover:scale-105">
                  {/* Icono de una cinta de cine y título de la película */}
                  <div className="flex items-center gap-3 mb-4">
                    <FilmIcon className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                      {film.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
