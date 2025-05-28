import { notFound } from "next/navigation";
import movies from "../datapages/data";

export default async function ReviewPage({ params }) {
  const movie = movies.find((m) => m.id === params.movieId);
  if (!movie) return notFound();

  return (
    <div className="ml-10 py-10  mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full max-w-[300px] rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
            {movie.title}
          </h1>
          <h3 className="text-lg mt-4 font-semibold font-serif">
            Movie year: {movie.year}
          </h3>
          <h3 className="text-lg mt-2 font-semibold font-serif">
            Directed by: {movie.director}
          </h3>
        </div>
      </div>

      <p className="grid px-85 -mt-65 text-lg font-serif">{movie.review}</p>
    </div>
  );
}
