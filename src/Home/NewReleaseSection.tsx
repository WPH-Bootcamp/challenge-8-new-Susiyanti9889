import { MovieGrid } from "./MovieGrid";

export function NewReleaseSection() {
  return (
    <section className="w-screen bg-black text-white">
      <div className="px-[140px] py-12">
        <MovieGrid
          title="New Release"
          endpoint="/movie/now_playing"
          queryKey="new-release-grid"
        />
      </div>
    </section>
  );
}
