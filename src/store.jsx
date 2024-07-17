import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducers from './bookReducers'; // Assuming you have bookReducers.js

const rootReducer = combineReducers({
  books: bookReducers
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
