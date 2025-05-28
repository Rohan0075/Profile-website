import movies from "./review/datapages/data";
import Link from "next/link";

export default function MoviePage() {
  const now = new Date();
  const currentMonth = now.toLocaleString("default", { month: "long" });
  const currentYear = now.getFullYear();
  const currentMonthMovies = movies.filter(
    (movie) => movie.month === currentMonth && movie.watched === currentYear
  );

  return (
    <div className="p-8 max-w-1000">
      <h1 className="text-3xl font-bold mb-6">My Movies</h1>

      {currentMonthMovies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentMonthMovies.map((movie) => (
            <Link href={`/Movies/review/${movie.id}`} key={movie.id}>
              <div className="group cursor-pointer max-w-[250px] max-h-[600px]">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="rounded-xl transition-transform group-hover:scale-105"
                />
                <p className="mt-2 text-center font-medium">{movie.title}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-lg mt-6">No movies watched this month.</p>
      )}
    </div>
  );
}
