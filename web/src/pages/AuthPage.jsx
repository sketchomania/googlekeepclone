// import { useSelector } from "react-redux";
// import { Link, Redirect } from "react-router-dom";

// import Signup from "./Signup";
import AuthForm from "../components/Auth/AuthForm";

const AuthPage = (props) => {
  // const authReducer = useSelector((state) => state.authReducer);
  // console.log(authReducer);

  return (
    <>
      <AuthForm
        setIsLoggedIn={props.setIsLoggedIn}
        isLoggedIn={props.isLoggedIn}
      />
    </>
  );
};

export default AuthPage;
