import { ADD_BOOK, DELETE_BOOK, MARK_AS_READ, UPDATE_BOOK } from '../types/actionTypes';

const initialState = {
  books: [
    { id: 1, title: 'Book 1', author: 'Author A', genre: 'Fiction', read: false },
    { id: 2, title: 'Book 2', author: 'Author B', genre: 'Non-Fiction', read: true }
  ]
};

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    case MARK_AS_READ:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload ? { ...book, read: true } : book
        )
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload.id ? { ...book, ...action.payload.updatedBook } : book
        )
      };
    default:
      return state;
  }
};

export default bookReducers;
