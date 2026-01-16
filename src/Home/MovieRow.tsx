import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { MovieCard } from "./MovieCard";

const API_KEY = "62742e1835e3925d81a88a5fbf23c461";

type Props = {
  title: string;
  endpoint: string;
  queryKey: string;
};

export function MovieRow({ title, endpoint, queryKey }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -1400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 1400,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      {/* LEFT BUTTON */}
<button
  onClick={scrollLeft}
  className="
    absolute left-0 top-1/2 -translate-y-1/2
    z-30
    w-14 h-14
    rounded-full
    bg-black/70 backdrop-blur
    text-white text-3xl font-bold
    flex items-center justify-center
    hover:bg-black/90
    transition
  "
>
  ‹
</button>

{/* RIGHT BUTTON */}
<button
  onClick={scrollRight}
  className="
    absolute right-0 top-1/2 -translate-y-1/2
    z-30
    w-14 h-14
    rounded-full
    bg-black/70 backdrop-blur
    text-white text-3xl font-bold
    flex items-center justify-center
    hover:bg-black/90
    transition
  "
>
  ›
</button>

      {/* MOVIE LIST */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden"
      >
        {data.results.slice(0, 15).map((movie: any, index: number) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
