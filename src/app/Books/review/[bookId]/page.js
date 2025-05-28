import { notFound } from "next/navigation";
import books from "../../booksdata/data";
export default async function ReviewPage({ params }) {
  const book = books.find((m) => m.id === params.bookId);
  if (!book) return notFound();

  return (
    <div className="ml-10 py-10  mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={book.poster}
          alt={book.title}
          className="w-full max-w-[300px] rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
            {book.title}
          </h1>
          <h3 className="text-lg mt-4 font-semibold font-serif">
            Book year: {book.year}
          </h3>
          <h3 className="text-lg mt-2 font-semibold font-serif">
            Written by: {book.writer}
          </h3>
        </div>
      </div>

      <p className="grid px-85 -mt-65 text-lg font-serif">{book.review}</p>
    </div>
  );
}
