import AuthForm from "../components/Auth/AuthForm";

const AuthPage = (props) => {
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
