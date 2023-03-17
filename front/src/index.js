import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Root from "./pages/Root";
import Index from "./pages/Index";
import BooksRoot from "./pages/BooksRoot";
import AllBooks from "./pages/AllBooks";
import Fiction from "./pages/Fiction";
import Nonfiction from "./pages/Nonfiction";
import Kids from "./pages/Kids";
import MostRequested from "./pages/MostRequested";
import SpecialOffers from "./pages/SpecialOffers";
import GamesAndPuzzles from "./pages/GamesAndPuzzles";
import GiftCards from "./pages/GiftCards";
import BookDetails from "./pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: ":id",
        element: <BookDetails />,
      },
      {
        path: "books",
        element: <BooksRoot />,
        children: [
          {
            index: true,
            element: <AllBooks />,
          },
          {
            path: "fiction",
            element: <Fiction />,
          },
          {
            path: "nonfiction",
            element: <Nonfiction />,
          },
          {
            path: "kids",
            element: <Kids />,
          },
          {
            path: "games&puzzles",
            element: <GamesAndPuzzles />,
          },
          {
            path: "special-offers",
            element: <SpecialOffers />,
          },
          {
            path: "most-requested",
            element: <MostRequested />,
          },
        ],
      },
      {
        path: "books/gift-cards",
        element: <GiftCards />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
