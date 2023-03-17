import { Grid } from "../components/Layout"
import ItemDetails from "../components/ItemDetails/ItemDetails";
import { useSelector } from 'react-redux';

const SpecialOffers = () => {
  const { books } = useSelector((state) => state.books);
  const fictionBooks = books.filter(book => book.genres === "nonfiction")

  return (
    <div>
    <Grid item={fictionBooks}><ItemDetails /></Grid>
  </div>
  )
}

export default SpecialOffers