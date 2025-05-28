import Link from "next/link";
import "./globals.css";
export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center space-x-6 p-4 bg-gray-100">
        <li>
          <Link href="/" className="text-balck-800 hover:text-gray px-4">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Movies" className="text-black-800 hover:text-gray px-4">
            Movies Page
          </Link>
        </li>
        <li>
          <Link href="/Books" className="text-black-800 hover:text-gray px-4">
            Books Page
          </Link>
        </li>
        <li>
          <Link href="/Blogs" className="text-black-800 hover:text-gray px-4">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/Project" className="text-black-800 hover:text-gray px-4">
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/Collections"
            className="text-black-800 hover:text-gray px-4"
          >
            Collections
          </Link>
        </li>
      </ul>
    </nav>
  );
}
