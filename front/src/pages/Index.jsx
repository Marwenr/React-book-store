import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../store/bookSlice";
import ItemDetails from "../components/ItemDetails/ItemDetails";
import SwiperCar from "../components/SwiperCar/SwiperCar";
import Loading from "../components/Loading/Loading";

import "swiper/css";
import { useEffect } from "react";

const Index = () => {
  const landingImage = require("../assets/imgs/landing.png");
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <div className="landing">
        <img src={landingImage} alt="Landing" style={{ width: "100%" }} />
      </div>
      <Container>
        <Loading isLoading={isLoading}>
          <SwiperCar items={books} name="Top 100 Books">
            <ItemDetails />
          </SwiperCar>
          <SwiperCar items={books} name="Books We Love">
            <ItemDetails />
          </SwiperCar>
          <SwiperCar items={books} name="NEW RELEASES">
            <ItemDetails />
          </SwiperCar>
          <SwiperCar items={books} name="Special Offers">
            <ItemDetails />
          </SwiperCar>
        </Loading>
      </Container>
    </>
  );
};

export default Index;
