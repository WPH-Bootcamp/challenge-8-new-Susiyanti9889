import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MovieCard } from "./MovieCard";

const API_KEY = "62742e1835e3925d81a88a5fbf23c461";

type Props = {
  title: string;
  endpoint: string;
  queryKey: string;
};

export function MovieGrid({ title, endpoint, queryKey }: Props) {
  const [showAll, setShowAll] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`
      );
      if (!res.ok) throw new Error("Failed to fetch movies");
      return res.json();
    },
  });

  if (isLoading) return null;
  if (error) return null;

  const movies = showAll
    ? data.results
    : data.results.slice(0, 15); // ⬅️ 3 baris x 5 kolom

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">{title}</h2>

      {/* GRID */}
      <div className="grid grid-cols-5 gap-6">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            hideIndex
          />
        ))}
      </div>

      {/* LOAD MORE */}
      {!showAll && data.results.length > 15 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
