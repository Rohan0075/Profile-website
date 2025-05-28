import Link from "next/link";
import movies from "../Movies/review/datapages/data";
import books from "../Books/booksdata/data";
export default function ItemCollection() {
  return (
    <>
      <div className="flex flex-wrap gap-6 p-6">
        {movies.map((movie) => (
          <Link
            href={`/Movies/review/${movie.id}`}
            key={movie.id}
            className="w-[200px] bg-white shadow-md rounded-md hover:scale-105 transition-transform duration-200"
          >
            <div className="p-3 text-center">
              <p className="font-bold text-lg mb-2">{movie.title}</p>
              <img
                src={movie.poster}
                alt={`${movie.title} poster`}
                className="w-full h-[300px] object-cover rounded"
              />
            </div>
          </Link>
        ))}
        {books.map((book) => (
          <Link
            href={`/Books/review/${book.id}`}
            key={book.id}
            className="w-[200px] bg-white shadow-md rounded-md hover:scale-105 transition-transform duration-200"
          >
            <div className="p-3 text-center">
              <p className="font-bold text-lg mb-2">{book.title}</p>
              <img
                src={book.poster}
                alt={`${book.title} poster`}
                className="w-full h-[300px] object-cover rounded"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
