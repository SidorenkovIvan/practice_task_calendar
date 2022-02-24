import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./PageLogin.module.css";
import AuthContext from "./Store/AuthContext";

const PageLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const switchAuthModeHandler = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    //Validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB08w4jR6ODCfbc96jMuUVg5GKe1jJK7Ek";
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB08w4jR6ODCfbc96jMuUVg5GKe1jJK7Ek";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then(data => {
          let errorMessage = "Authentication failed!";

          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }

          throw new Error(errorMessage);
        });
      }
    }).then((data) => {
      console.log(data);
      authContext.login(data.idToken);
      navigate("/calendar", { replace: true });
    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <form onSubmit={ submitHandler } className={ `${ classes.login } ${ classes.card }` }>
      <p>{ isLogin ? "Sign In" : "Sign Up" }</p>
      <div className={ classes.control }>
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" required ref={ emailRef }/>
      </div>
      <div className={ classes.control }>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required ref={ passwordRef }/>
      </div>
      <div className={ classes.actions }>
        { !isLoading &&
          <button
            className={ classes.button }
            type="submit">
            { isLogin ? "Login" : "Create Account" }
          </button>
        }
        { isLoading && <p>Sending request...</p> }
        <button
          className={ classes.toggle }
          onClick={ switchAuthModeHandler }
        >{ isLogin ? "Create new account" : "Login with existing account" }
        </button>
      </div>
    </form>
  );
};

export default PageLogin;
