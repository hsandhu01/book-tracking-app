import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBook, FaUser, FaPager, FaClock } from 'react-icons/fa';

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
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-8 border-2 border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
      <h2 className="text-4xl mb-8 text-center text-primary font-bold">Books Read</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id} className="mb-8 pb-4 border-b border-gray-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            {book.image && <img src={book.image} alt={book.title} className="w-full h-auto mb-4 rounded-lg shadow-md" />}
            <h3 className="text-2xl font-bold text-secondary"><FaBook className="inline mr-2" /> {book.title}</h3>
            <p className="text-lg text-accent"><FaUser className="inline mr-2" /> by {book.author}</p>
            <p className="text-gray-600"><FaPager className="inline mr-2" /> {book.pages} pages in <FaClock className="inline mr-2" /> {book.timeSpent} minutes on {new Date(book.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

