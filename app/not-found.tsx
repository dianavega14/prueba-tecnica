import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Movie not found</h2>
        <p className="text-gray-400 mb-8">
          The movie you are looking for does not exist in this galaxy.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
