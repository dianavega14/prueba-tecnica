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
    // console.log("Attempting to fetch films from swapi.info...");
    const response = await fetch("https://swapi.info/api/films", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });

    // console.log("Response status:", response.status);
    // console.log("Response ok:", response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.results && Array.isArray(data.results)) {
      // console.log("Films fetched successfully:", data.results.length);
      return data.results;
    } else if (Array.isArray(data)) {
      // console.log("Films fetched successfully (direct array):", data.length);
      return data;
    } else {
      // console.log("Unexpected API response structure");
      return [];
    }
  } catch (error) {
    console.error("Error fetching films:", error);
    return [];
  }
}

export async function getFilmById(
  episodeId: string | number
): Promise<Film | null> {
  try {
    const response = await fetch(`https://swapi.info/api/films`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    const film = data.find((f: Film) => f.episode_id == episodeId);
    // console.log("Fetched film:", film);
    return film;
  } catch (error) {
    console.error("Error fetching film:", error);
    return null;
  }
}
