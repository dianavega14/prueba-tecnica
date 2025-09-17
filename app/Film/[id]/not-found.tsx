import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Componente que muestra una página de error 404 personalizada
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white flex items-center justify-center">
      <div className="text-center">
        {/* Título principal de la página con un icono de error */}
        <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
        {/* Subtítulo de la página con un mensaje de error */}
        <h2 className="text-2xl font-semibold mb-4">Movie not found</h2>
        {/* Parrafo de texto con un mensaje de error */}
        <p className="text-gray-400 mb-8">
          The movie you are looking for does not exist in this galaxy.
        </p>
        {/* Enlace a la página de inicio */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
        >
          {/* Icono de una flecha hacia atrás */}
          <ArrowLeft className="w-4 h-4" />
          {/* Texto del enlace */}
          Back to home
        </Link>
      </div>
    </div>
  );
}
