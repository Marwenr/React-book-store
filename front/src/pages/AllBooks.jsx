import { useSelector } from "react-redux";
import { Grid, List } from "../components/Layout";
import ItemDetails from "../components/ItemDetails/ItemDetails";
import ItemDetailsList from "../components/ItemDetails/ItemDetailsList";

const AllBooks = () => {
  const { gridList } = useSelector((state) => state.sort);
  const { books } = useSelector((state) => state.books);

  const { categories, ages, prices, language } = useSelector(
    (state) => state.search
  );

  const filterBooks = () => {
    let filteredBooks = books;

    if (categories) {
      filteredBooks = filteredBooks.filter((book) =>
        book.categories.includes(categories)
      );
    }

    if (prices) {
      if (prices === "Under $5") {
        filteredBooks = filteredBooks.filter((book) => book.price <= 5);
      } else if (prices === "$5 - $10") {
        filteredBooks = filteredBooks.filter(
          (book) => book.price >= 5 && book.price <= 10
        );
      } else if (prices === "$10 - $25") {
        filteredBooks = filteredBooks.filter(
          (book) => book.price >= 10 && book.price <= 25
        );
      } else if (prices === "$25 - $50") {
        filteredBooks = filteredBooks.filter(
          (book) => book.price >= 25 && book.price <= 50
        );
      } else if (prices === "Over $50") {
        filteredBooks = filteredBooks.filter((book) => book.price >= 50);
      }
    }

    if (ages) {
      filteredBooks = filteredBooks.filter((book) => book.ages === ages);
    }

    if (language) {
      filteredBooks = filteredBooks.filter(
        (book) => book.language === language
      );
    }

    return filteredBooks;
  };

  return (
    <div>
      {gridList ? (
        <Grid item={filterBooks()}>
          <ItemDetails />
        </Grid>
      ) : (
        <List item={filterBooks()}>
          <ItemDetailsList />
        </List>
      )}
    </div>
  );
};

export default AllBooks;
