"use server";

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export async function getFilms(): Promise<Film[]> {
  try {
    console.log("[v0] Attempting to fetch films from swapi.info...");
    const response = await fetch("https://swapi.info/api/films", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow", // Explicitly follow redirects
    });

    console.log("[v0] Response status:", response.status);
    console.log("[v0] Response ok:", response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("[v0] Raw API response:", JSON.stringify(data, null, 2));

    if (data.results && Array.isArray(data.results)) {
      console.log("[v0] Films fetched successfully:", data.results.length);
      return data.results;
    } else if (Array.isArray(data)) {
      console.log(
        "[v0] Films fetched successfully (direct array):",
        data.length
      );
      return data;
    } else {
      console.log("[v0] Unexpected API response structure");
      return [];
    }
  } catch (error) {
    console.error("[v0] Error fetching films:", error);
    return [];
  }
}

export async function getFilmById(
  episodeId: string | number
): Promise<Film | null> {
  try {
    const response = await fetch("https://swapi.py4e.com/api/films/");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    // Filtrar por episode_id
    const film = (data.results as Film[]).find(
      (f: Film) => f.episode_id == episodeId
    );

    return film || null;
  } catch (error) {
    console.error("Error fetching film:", error);
    return null;
  }
}
