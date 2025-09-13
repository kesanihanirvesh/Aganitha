# 📚 Open Library Book Finder

A React + Tailwind CSS web application that allows users to search for books using the **Open Library API**.  
You can search by **book title** or **author name**, view book details, and check if an **ebook is available** for reading or borrowing through the **Internet Archive**.

---

## 🚀 Features
- 🔎 Search books by **title** or **author** (single or combined search).
- 📖 Display key details:
  - Title
  - Author(s)
  - First publish year
  - Edition count
  - Languages
- 🖼️ Show book cover images using `cover_i`.
- ✅ Ebook availability:
  - **Borrowable / Public** indicator
  - **Read / Borrow button** redirects to the Internet Archive.
- ❌ If ebook not available, shows a message.

---

## 🛠️ Tech Stack
- **React** (Vite)
- **TypeScript**
- **Tailwind CSS**
- **Open Library API**  
  - `https://openlibrary.org/search.json?title={bookTitle}`
  - `https://openlibrary.org/search.json?author={authorName}`
- **Covers API**  
  - `https://covers.openlibrary.org/b/id/{cover_i}-L.jpg`

---

## 📂 Project Structure
