import { Form } from "react-bootstrap";
import { List } from "../index";
import ChecksAndRadio from "../../ChecksAndRadio/ChecksAndRadio";
import styles from "./styles.module.css";
import { searchByCategories, searchByAges, searchByPrices, searchByLanguage } from "../../../store/searchSlice";
import { useDispatch } from "react-redux";

const SearchItem = ({ item, searchItem, type }) => {
  const dispatch = useDispatch();
  const { search } = styles;

  const handleSearch = (e) => {
    if(searchItem === "Categories") {
      dispatch(searchByCategories(e.target.value));
    }
    if(searchItem === "Ages") {
      dispatch(searchByAges(e.target.value));
    }
    if(searchItem === "Prices") {
      dispatch(searchByPrices(e.target.value));
    }
    if(searchItem === "Language") {
      dispatch(searchByLanguage(e.target.value));
    }
  };

  return (
    <div className={search}>
      <div className="mb-2 fw-bolder">Search By {searchItem} :</div>
      <Form>
        <List item={item}>
          <ChecksAndRadio type={type} handleSearch={handleSearch} />
        </List>
      </Form>
    </div>
  );
};

export default SearchItem;
