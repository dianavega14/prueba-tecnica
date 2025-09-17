import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getFilmById } from "@/lib/actions";
import { notFound } from "next/navigation";
import OpeningCrawl from "@/components/openingCrawl";

// Interface para los props de la página de una película
interface FilmPageProps {
  params: Promise<{ id: string }>;
}

// Página de una película
export default async function FilmPage({ params }: FilmPageProps) {
  // Obtiene el id de la película desde los params
  const { id } = await params;
  // Obtiene la película con el id proporcionado
  const film = await getFilmById(id);

  // Si no se encuentra la película, notFound() lanzará un 404
  if (!film) {
    notFound();
  }

  // Renderiza la página de la película
  return (
    <div className="relative min-h-screen  bg-gradient-to-b from-slate-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        {/* Enlace a la página de inicio */}
        <Link
          href="/"
          className="fixed top-10 left-10 flex items-center z-30 text-yellow-400 hover:text-yellow-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Contenedor para el opening crawl */}
        <div className="relative z-10" style={{ height: "220vh" }}>
          <OpeningCrawl
            title={film.title}
            episode={film.episode_id}
            openingCrawl={film.opening_crawl}
          />
        </div>

        {/* Contenedor para la información de la película */}
        <div className="max-w-4xl mx-auto">
          <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
            <div className="bg-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-6 text-center">
              <h3 className="text-yellow-400 text-xl font-bold mb-4">
                Information
              </h3>
              <div className="space-y-3 text-yellow-400">
                {/* Director */}
                <div>
                  <span className="text-yellow-500 font-semibold">
                    Director:
                  </span>
                  <p className="text-white">{film.director}</p>
                </div>
                {/* Producer */}
                <div>
                  <span className="text-yellow-500 font-semibold">
                    Producer:
                  </span>
                  <p className="text-white">{film.producer}</p>
                </div>
                {/* Release Date */}
                <div>
                  <span className="text-yellow-500 font-semibold">
                    Release Date:
                  </span>
                  <p className="text-white">{film.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
