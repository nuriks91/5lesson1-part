import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./slices/BookListSlice";


const rootReducer = {
    bookList: bookListReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;