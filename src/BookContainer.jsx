// BookContainer.jsx

import React from "react";
import { useDispatch } from "react-redux"; // Assuming you're using Redux for state management
import { addBook } from "./bookActions"; // Adjust the path based on your project structure

const BookContainer = () => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      title: "Sample Book",
      author: "John Doe",
      genre: "Fiction",
      read: false,
    };

    dispatch(addBook(newBook));
  };

  return (
    <div>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookContainer;
