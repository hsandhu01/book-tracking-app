import React, { useState } from 'react';
import axios from 'axios';
import ImageUpload from './ImageUpload';

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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border-2 border-primary">
      <h2 className="text-4xl mb-6 text-center text-primary font-bold">Track a New Book</h2>
      <div className="mb-4">
        <label className="block text-lg font-medium text-primary">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-primary">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-primary">Pages Read</label>
        <input
          type="number"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-primary">Time Spent (minutes)</label>
        <input
          type="number"
          value={timeSpent}
          onChange={(e) => setTimeSpent(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-primary">Book Cover</label>
        <ImageUpload onUpload={setImage} />
      </div>
      <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300">Add Book</button>
    </form>
  );
};

export default BookForm;
