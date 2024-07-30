import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-8 flex flex-col items-center">
      <h1 className="text-5xl text-center mb-12 text-white font-bold">Maeva's Book Tracker</h1>
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;