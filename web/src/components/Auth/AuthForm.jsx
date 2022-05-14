import { useState } from "react";
import { useSelector } from "react-redux";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const switchModeHandler = () => {
    setIsLogin(!isLogin);
  };

  const authReducer = useSelector((state) => state.authReducer);
  console.log(authReducer);

  const inputchangeHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //   dipatch action
    console.log("Submitted");
    console.log(credential);
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
              {!isLogin ? "Sign-up" : "Login"} in to continue
            </p>
          </div>
          <form
            className="w-full h-auto bg-inherit shadow-none"
            onSubmit={submitHandler}
          >
            <div className="mx-12 p-3 rounded-xl shadow-sm bg-gray-900">
              <div className="flex flex-col mb-5">
                <label
                  for="email"
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
                  for="password"
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
                    for="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-yellow-500 cursor-pointer"
                  ></label>
                </div>
                <label for="toggle" className="text-xs text-gray-300 mt-1">
                  remeber me
                </label>
              </div>

              <div className="bg mt-1 text-xs text-gray-300">
                <a href="">forget password?</a>
              </div>
            </div>

            <div className="w-full pt-6 px-12">
              <button
                type="submit"
                className="font-semibold bg-yellow-500 p-3 rounded-3xl w-full h-full hover:bg-yellow-600"
              >
                {" "}
                {!isLogin ? "Create account" : "Login"}
              </button>
            </div>
          </form>

          <div className="w-full py-3 px-12">
            <p className="mx-auto text-center mt-3 text-gray-400">
              {isLogin ? "Don't" : "Already"} have an account?{" "}
              <button
                className="text-md font-semibold text-yellow-700 hover:text-yellow-500"
                type="button"
                onClick={switchModeHandler}
              >
                {isLogin ? "Sign-up" : "Login"}
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
