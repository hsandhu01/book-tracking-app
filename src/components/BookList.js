import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:5000/books');
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 border-2 border-primary">
      <h2 className="text-4xl mb-6 text-center text-primary font-bold">Books Read</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id} className="mb-6 pb-4 border-b border-gray-300">
            {book.image && <img src={book.image} alt={book.title} className="w-full h-auto mb-4 rounded-lg shadow-md" />}
            <h3 className="text-2xl font-bold text-secondary">{book.title}</h3>
            <p className="text-lg text-accent">by {book.author}</p>
            <p className="text-gray-600">{book.pages} pages in {book.timeSpent} minutes on {new Date(book.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
