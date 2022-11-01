import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { signupUser, login } from "../../redux/actions/authActions";

const AuthForm = ({ setIsLoggedIn, isLoggedIn }) => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
    
  const dispatch = useDispatch();
  
  const switchModeHandler = () => {
    setIsLoginMode(!isLoginMode);
    console.log("isLoginMode:", !isLoginMode);
  };

  const inputchangeHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //   dipatch action
    if (isLoginMode) {
      dispatch(login(credential));
      console.log("User Login:", credential);
    } else if (!isLoginMode) {
      dispatch(signupUser(credential));
      console.log("User Sign-up:", credential);
    }
    <Redirect to="/" />;
  };

  return (
    <>
      <div className="h-screen w-full">
        <div className="bg-gray-800 h-screen mx-auto max-w-md">
          <div className="pt-8 pb-2 px-12">
            <p className="text-4xl pt-8 text-yellow-500 font-bold">
              Google Keep Clone
            </p>
            {/* <p className="text-3xl pt-8 text-yellow-500 font-bold">Welcome,</p> */}
            <p className="text-xl py-3 text-gray-400 font-semibold">
              {isLoginMode ? "Login" : "Sign-up"} in to continue
            </p>
          </div>
          <form
            className="w-full h-auto bg-inherit shadow-none"
            onSubmit={submitHandler}
          >
            <div className="mx-12 p-3 rounded-xl shadow-sm bg-gray-900">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-sm font-semibold tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={inpsty}
                  value={credential.email}
                  onChange={(e) => inputchangeHandler(e)}
                  required
                />
              </div>

              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-sm font-semibold tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={inpsty}
                  value={credential.password}
                  onChange={(e) => inputchangeHandler(e)}
                  required
                />
              </div>

              <div className="flex flex-col mb-6">
                <div className="p-3 mx-6 flex border-b border-gray-500">
                  <input
                    placeholder="Password"
                    className="bg-transparent text-yellow-500 focus:outline-none focus:rang w-full"
                    type="password"
                  />
                  <div className="w-auto text-yellow-500">eyes</div>
                </div>
              </div>
            </div>

            <div className="mx-12 p-3 justify-between flex">
              <div className="flex">
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-800 border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-yellow-500 cursor-pointer"
                  ></label>
                </div>
                <label htmlFor="toggle" className="text-xs text-gray-300 mt-1">
                  remeber me
                </label>
              </div>

              <div className="bg mt-1 text-xs text-gray-300">
                <a href="">forget password?</a>
              </div>
            </div>

            <div className="px-12">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Accept all terms and conditions</label>
            </div>

            <div className="w-full pt-6 px-12">
              <button
                className="font-semibold bg-yellow-500 p-3 rounded-3xl w-full h-full hover:bg-yellow-600"
                type="submit"
                title={isLoginMode ? "Login" : "Create account"}
              >
                {" "}
                {isLoginMode ? "Login" : "Create account"}
              </button>
            </div>
          </form>

          <div className="w-full py-3 px-12">
            <p className="mx-auto text-center mt-3 text-gray-400">
              {isLoginMode ? "Don't" : "Already"} have an account?{" "}
              <button
                className="text-md font-semibold text-yellow-700 hover:text-yellow-500"
                type="button"
                title={isLoginMode ? "Sign-up" : "Login"}
                onClick={switchModeHandler}
              >
                {isLoginMode ? "Sign-up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
const inpsty = `
text-sm
placeholder-gray-500
pl-10
pr-4
rounded-2xl
border border-gray-400
w-full
py-2
focus:outline-none focus:border-yellow-500
bg-transparent text-yellow-500 
`;
