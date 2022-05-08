import { useState, useRef } from "react";
import AuthForm from "../components/Auth/AuthForm";
import Signup from "./Signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const emailEl = useRef(null);
  const passwordEl = useRef(null);

  const switchModeHandler = () => {
    setIsLogin(!isLogin);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailEl.current.value;
    const password = passwordEl.current.value;

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
      <form
        className="w-96 max-w-[80%] h-auto my-20 mx-auto"
        onSubmit={submitHandler}
      >
        <div className="form-control">
          <label className="w-full block" htmlFor="email">
            E-mail
          </label>
          <input
            className="w-full block"
            type="email"
            id="email"
            ref={emailEl}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password" id="password" ref={passwordEl} />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={switchModeHandler}>
            Switch to {isLogin ? "Sign-up" : "Login"}
          </button>
        </div>
      </form>
      <Signup />
      {/* <AuthForm /> */}
    </>
  );
};

export default AuthPage;
