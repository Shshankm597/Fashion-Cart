import { useState } from "react";
import { useAuth } from "../../Context/authContext";
import "./login.css";

export function Login() {
  const [loginForm, setLoginForm] = useState(false);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginManager, signUpManager } = useAuth()
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3 className="login-header">{loginForm ? `SignUp` : `Login`}</h3>
        <div>
          {loginForm && (
            <input
              value={userName}
              className="login-input"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          )}
        </div>
        <div>
          <input
            value={email}
            type="email"
            className="login-input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            value={password}
            type="password"
            className="login-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <input
          className="btn-login"
          type="submit"
          placeholder="Submit"
          onClick={() =>
            loginForm
              ? signUpManager(userName, email, password)
              : loginManager(email, password)
          }
        ></input>

        <button
          className="route-login-signup"
          onClick={() => {
            setLoginForm((prev) => !prev);
            console.log("inside onclick", loginForm);
          }}
        >
          {loginForm ? `Already a member? Login` : `New to the site? SignUp`}
        </button>
      </form>
    </div>
  );
}
