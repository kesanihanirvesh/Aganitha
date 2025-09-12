// BookCard.jsx
import React from "react";

/**
 * @param {{ book: any }} props
 */
const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  // check ebook access
  const iaIdentifier = book.lending_identifier_s || (book.ia && book.ia[0]);
  const ebookUrl = iaIdentifier
    ? `https://archive.org/details/${iaIdentifier}`
    : null;

  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {book.author_name?.join(", ") || "Unknown Author"}
        </p>
        <p className="text-sm text-gray-500">
          📅 First Published: {book.first_publish_year || "N/A"}
        </p>
        <p className="text-sm text-gray-500">
          📚 Editions: {book.edition_count || 0}
        </p>
        <p className="text-sm text-gray-500">
          🌍 Languages: {book.language?.join(", ") || "N/A"}
        </p>
        {book.ebook_access && (
          <p className="text-sm mt-2">
            {book.ebook_access === "borrowable" ? "🔖 Borrowable" : "✅ Public"}
          </p>
        )}

        {ebookUrl ? (
          <a
            href={ebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            📖 Read / Borrow
          </a>
        ) : (
          <p className="text-red-500 mt-3 text-center text-sm">
            ❌ Ebook not available
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;