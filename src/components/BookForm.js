import React, { useState } from 'react';
import axios from 'axios';
import ImageUpload from './ImageUpload';
import { FaBook, FaUser, FaPager, FaClock, FaUpload } from 'react-icons/fa';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, pages, timeSpent, date: new Date().toISOString(), image };
    await axios.post('http://localhost:5000/books', newBook);
    setTitle('');
    setAuthor('');
    setPages('');
    setTimeSpent('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg border-2 border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
      <h2 className="text-4xl mb-6 text-center text-primary font-bold">Track a New Book</h2>
      <div className="mb-6">
        <label className="block text-lg font-medium text-primary">Title</label>
        <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-primary">
          <FaBook className="text-primary m-2" />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium text-primary">Author</label>
        <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-primary">
          <FaUser className="text-primary m-2" />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-3 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium text-primary">Pages Read</label>
        <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-primary">
          <FaPager className="text-primary m-2" />
          <input
            type="number"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            className="w-full p-3 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium text-primary">Time Spent (minutes)</label>
        <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-primary">
          <FaClock className="text-primary m-2" />
          <input
            type="number"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
            className="w-full p-3 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium text-primary">Book Cover</label>
        <ImageUpload onUpload={setImage} />
      </div>
      <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300">
        <FaUpload className="inline mr-2" /> Add Book
      </button>
    </form>
  );
};

export default BookForm;


