import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div className="min-h-screen bg-background p-6 flex flex-col items-center">
      <h1 className="text-5xl text-center mb-8 text-primary font-bold">Maeva's Book Tracker</h1>
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;