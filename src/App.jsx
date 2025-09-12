import { useState } from "react";
import BookCard from "./BookCard";

export default function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (!title && !author) return;
    setLoading(true);

    try {
      let url = "https://openlibrary.org/search.json?";
      if (title) url += `title=${encodeURIComponent(title)}&`;
      if (author) url += `author=${encodeURIComponent(author)}&`;

      const res = await fetch(url);
      const data = await res.json();
      setBooks(data.docs);
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf6e3] to-[#f5e6d3] flex flex-col items-center p-8 font-serif">
      <h1 className="text-4xl font-bold mb-8 text-[#5a4634] drop-shadow-md">
        📖 Classic Book Finder
      </h1>

      <div className="flex flex-col md:flex-row gap-3 w-full max-w-3xl mb-6 bg-white shadow-lg rounded-xl p-4 border border-[#d2b48c]">
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-[#d2b48c] bg-[#fdfaf5] focus:outline-none focus:ring-2 focus:ring-[#b38b5d]"
        />
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-[#d2b48c] bg-[#fdfaf5] focus:outline-none focus:ring-2 focus:ring-[#b38b5d]"
        />
        <button
          onClick={searchBooks}
          className="px-6 py-3 bg-[#8b5e34] text-white rounded-lg shadow hover:bg-[#704a27] transition"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="mt-2 text-lg text-[#5a4634] italic">Fetching books...</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </div>
  );
}
