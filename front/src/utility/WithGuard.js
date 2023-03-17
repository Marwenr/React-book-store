import { useSelector } from "react-redux";

const WithGuard = (Component) => {
  const Wrapper = (props) => {
    const { isLogIn } = useSelector((state) => state.auth);
    return isLogIn ? (
      <Component {...props} />
    ) : (
      <div>Please Log In First !</div>
    );
  };
  return Wrapper;
};

export default WithGuard;
