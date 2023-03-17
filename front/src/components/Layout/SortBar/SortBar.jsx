import { BsGridFill, BsList } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { sortGrid, sortList } from "../../../store/sortSlice";

const SortBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="mb-3 border-bottom d-flex justify-content-end align-items-center">
      <button className="btn btn-light d-flex align-items-center" onClick={() => dispatch(sortGrid())}>
        <BsGridFill className="me-1" style={{ fontSize: "13px" }} />
        Grid
      </button>
      <button className="btn btn-light d-flex align-items-center" onClick={() => dispatch(sortList())}>
        <BsList className="me-1" style={{ fontSize: "17px" }} />
        List
      </button>
    </div>
  );
};

export default SortBar;
