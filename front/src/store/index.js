import { configureStore } from "@reduxjs/toolkit";
import books from "./bookSlice";
import sort from "./sortSlice";
import search from "./searchSlice";
import auth from "./authSlice";

export default configureStore({ reducer: { books, sort, search, auth } });
