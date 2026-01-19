import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchTheGorge = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=The%20Gorge`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  return res.json();
};export function TheGorge() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["the-gorge"],
    queryFn: fetchTheGorge,
  });

  if (isLoading) return null;
  if (error) return null;

  const movie = data.results?.[0];
  if (!movie) return null;

  return (
    <section
      className="relative w-screen h-[810px] text-white overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Gradient Overlay (mirip figma) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="ml-[140px] max-w-[635px]">
          <h1 className="text-[56px] font-bold leading-tight">
            {movie.title}
          </h1>

          <p className="mt-4 text-gray-300 leading-relaxed">
            {movie.overview}
          </p>

          <div className="mt-8 flex gap-4">
            <button className="flex items-center gap-2 bg-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
              ▶ Watch Trailer
            </button>

            <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              See Detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}