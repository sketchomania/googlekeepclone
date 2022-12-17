import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signupUser, login } from "../../redux/actions/authActions";

const AuthForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const { isError } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
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
    setShowMessage(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setShowMessage(true);

    if (isLoginMode) {
      dispatch(login(credential));
      console.log("User Login:", credential);
    } else if (!isLoginMode) {
      dispatch(signupUser(credential));
      console.log("User Sign-up:", credential);
    }
    // navigate("/");
    console.log("Navigations done:");
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
                  className="mb-1 text-sm font-semibold tracking-wide text-gray-500"
                >
                  E-Mail Address:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="youremail@example.com"
                  className={formInputStyle}
                  value={credential.email}
                  onChange={(e) => inputchangeHandler(e)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="mb-1 text-sm font-semibold tracking-wide text-gray-500"
                >
                  Password:
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className={formInputStyle}
                  value={credential.password}
                  onChange={(e) => inputchangeHandler(e)}
                  required
                />
                <p
                  className="px-2 py-px my-4 text-yellow-500 text-opacity-75 hover:text-opacity-100 bg-zinc-700 bg-opacity-40 max-w-max rounded-full text-sm cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? "hide" : "show"}
                </p>
              </div>

              {/* <div className="flex flex-col mb-6">
                <div className="p-3 mx-6 flex border-b border-gray-500">
                  <input
                    placeholder="Password"
                    className="bg-transparent text-yellow-500 focus:outline-none focus:rang w-full"
                    type="password"
                  />
                  <div className="w-auto text-yellow-500">eyes</div>
                </div>
              </div> */}
            </div>

            <div className="mx-12 mb-2 mt-10 text-gray-400">
              <div className="p-2 justify-between flex flex-wrap ">
                <label className="inline-flex flex-wrap relative items-center  cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked
                  />
                  <div className="w-9 h-5 bg-gray-400 rounded-full peer dark:bg-gray-00 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
                  <span className="ml-3 text-sm font-medium hover:text-gray-300">
                    remember me
                  </span>
                </label>

                <div className="mt-1 text-xs hover:text-gray-300">
                  <a href="forget password">forget password?</a>
                </div>
              </div>

              <div className="p-2">
                <label className="inline-flex flex-wrap relative items-center  cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-400 rounded-full peer dark:bg-gray-00 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
                  <span className="ml-3 text-sm font-medium hover:text-gray-300">
                    Accept all terms and conditions
                  </span>
                </label>
              </div>
            </div>

            <div className="w-full px-12">
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
            <p className="mx-auto text-center text-sm text-gray-400">
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

          {isError && showMessage && (
            <div className="flex justify-center mt-1 text-xs text-red-400">
              <p>{isError[0].message}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthForm;
const formInputStyle = `
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
