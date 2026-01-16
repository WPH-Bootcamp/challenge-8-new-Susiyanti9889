import { MovieRow } from "./MovieRow";

export function TrendingSection() {
  return (
    <section className="w-screen bg-black text-white">
      <div className="px-[140px] py-12">
        <MovieRow
          title="Trending Now"
          endpoint="/trending/movie/week"
          queryKey="trending-week"
        />
      </div>
    </section>
  );
}
