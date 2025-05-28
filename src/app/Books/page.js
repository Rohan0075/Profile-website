import books from "./booksdata/data";
import Link from "next/link";

export default function BookPage() {
  const now = new Date();
  const currentMonth = now.toLocaleString("default", { month: "long" });
  const currentYear = now.getFullYear();
  const currentMonthBooks = books.filter(
    (book) => book.month === currentMonth && book.read === currentYear
  );

  return (
    <div className="p-8 max-w-1000">
      <h1 className="text-3xl font-bold mb-6">My Books</h1>

      {currentMonthBooks.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentMonthBooks.map((book) => (
            <Link href={`/Books/review/${book.id}`} key={book.id}>
              <div className="group cursor-pointer max-w-[250px] max-h-[600px]">
                <img
                  src={book.poster}
                  alt={book.title}
                  className="rounded-xl transition-transform group-hover:scale-105"
                />
                <p className="mt-2 text-center font-medium">{book.title}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-lg mt-6">No books read this month.</p>
      )}
    </div>
  );
}
