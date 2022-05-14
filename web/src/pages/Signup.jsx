import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const Signup = () => {
  // const stateObj = useSelector((state) => state);
  // console.log(stateObj);
  const authReducer = useSelector((state) => state.authReducer);
  console.log(authReducer);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  // const navigate = useNavigate();
  // const history = useHistory();

  const inputchangeHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //   dipatch action
    console.log("Submitted");
    console.log(credential);
    // navigate("/");
    // history.push("/");
    <Redirect to="/" />;
  };

  return (
    <div>
      <p>Signup</p>
      <div>
        <label className="w-full block" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
          value={credential.email}
          onChange={(e) => inputchangeHandler(e)}
        />
      </div>
      <div>
        <label className="w-full block" htmlFor="password">
          password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          value={credential.password}
          onChange={(e) => inputchangeHandler(e)}
        />
      </div>

      <div>
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox">Accept all terms and conditions</label>
      </div>

      <button onClick={submitHandler} className="">
        Create account
      </button>

      <div className="login-instead-container">
        <Link to="/login">
          <div className="login-message">Already have account, Signup?</div>
        </Link>

        <div>
          <i className=" fas fa-chevron-right site-icon "></i>
        </div>
      </div>
    </div>
  );
};

export default Signup;
