import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
  "book/fetchBooks",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchBook = createAsyncThunk(
  "book/fetchBook",
  async (bookId, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3005/books/${bookId}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: { searchItems: [], books: [], book: "", isLoading: false, err: null },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.err = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchBook.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.book = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
      state.err = action.payload;
      state.isLoading = false;
    });
  },
});

export default bookSlice.reducer;
