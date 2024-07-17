import { ADD_BOOK, DELETE_BOOK, MARK_AS_READ, UPDATE_BOOK } from '../types/actionTypes';

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id
});

export const markAsRead = (id) => ({
  type: MARK_AS_READ,
  payload: id
});

export const updateBook = (id, updatedBook) => ({
  type: UPDATE_BOOK,
  payload: { id, updatedBook }
});
