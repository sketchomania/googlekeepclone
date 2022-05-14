import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// import Signup from "./Signup";
import AuthForm from "../components/Auth/AuthForm";

const AuthPage = () => {
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

  const submitHandler2 = (e) => {
    e.preventDefault();
    //   dipatch action
    console.log("Submitted");
    console.log(credential);
    <Redirect to="/form" />;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const email = credential.email;
    const password = credential.password;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `,
    };

    if (!isLogin) {
      requestBody = {
        query: `
        mutation {
          createUser(userInput: {email: "${email}", password: "${password}"}) {
            _id
            email
          }
        }
        `,
      };
    }

    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className=" flex items-center justify-center border border-green-500 m-4">
        <form
          className="w-96 max-w-[80%] h-auto my-20 mx-12"
          onSubmit={submitHandler}
        >
          <p> {!isLogin ? "Sign-up" : "Login"}</p>
          <div className="form-control block">
            <label className="w-full" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-full"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={credential.email}
              onChange={(e) => inputchangeHandler(e)}
              required
            />
          </div>
          <div className="form-control block">
            <label htmlFor="password">password</label>
            <input
              className="w-full"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={credential.password}
              onChange={(e) => inputchangeHandler(e)}
              required
            />
          </div>

          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Accept all terms and conditions</label>
          </div>

          <div className="form-actions">
            <button type="button" onClick={switchModeHandler}>
              Switch to {isLogin ? "Sign-up" : "Login"}
            </button>
          </div>

          <button type="submit">Submit</button>
          <br />

          <button
            onClick={submitHandler2}
            className="border border-green-500"
            title={isLogin ? "Login" : "Create account"}
          >
            {isLogin ? "Login" : "Create account"}
          </button>

          <div className="login-instead-container">
            <Link to="/">
              <div className="login-message">Already have account, Signup?</div>
            </Link>

            <div>
              <i className=" fas fa-chevron-right site-icon "></i>
            </div>
          </div>
        </form>
      </div>

      <div>
        <AuthForm />
      </div>
    </>
  );
};

export default AuthPage;
