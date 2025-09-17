import Link from "next/link";
import { ArrowLeft, Calendar, User, Users } from "lucide-react";
import { getFilmById } from "@/lib/actions";
import { notFound } from "next/navigation";

interface FilmPageProps {
  params: Promise<{ id: string }>;
}

export default async function FilmPage({ params }: FilmPageProps) {
  const { id } = await params;
  const film = await getFilmById(id);

  if (!film) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="text-sm text-gray-400 mb-2">
              Episode {film.episode_id}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgb(250,204,21)]">
              {film.title}
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  Opening Crawl
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {film.opening_crawl}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Release Date</div>
                      <div className="text-white">{film.release_date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Director</div>
                      <div className="text-white">{film.director}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Producer</div>
                      <div className="text-white">{film.producer}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
