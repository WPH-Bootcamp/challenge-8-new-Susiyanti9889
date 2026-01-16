type Props = {
  movie: any;
  index?: number;
  hideIndex?: boolean;
};

export function MovieCard({ movie, index, hideIndex }: Props) {
  return (
    <div className="min-w-[220px]">
      <div className="relative">
        {!hideIndex && index !== undefined && (
          <div className="absolute top-3 left-3 bg-black/70 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold z-10">
            {index + 1}
          </div>
        )}

        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-[220px] h-[330px] object-cover rounded-xl"
        />
      </div>

      <h3 className="mt-3 font-semibold text-sm line-clamp-1">
        {movie.title}
      </h3>

      <div className="mt-1 flex items-center gap-1 text-sm text-yellow-400">
        ⭐ {movie.vote_average.toFixed(1)}/10
      </div>
    </div>
  );
}

