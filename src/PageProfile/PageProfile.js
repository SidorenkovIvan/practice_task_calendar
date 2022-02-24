import React, { useContext, useRef } from "react";
import styles from "./PageProfile.module.css";
import AuthContext from "../PageLogin/Store/AuthContext";
import { useNavigate } from "react-router-dom";

const PageProfile = () => {
  const newPasswordRef = useRef();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;
    //validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB08w4jR6ODCfbc96jMuUVg5GKe1jJK7Ek",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token,
          password: enteredNewPassword,
          returnSecureToken: false
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
      navigate("/calendar", { replace: true });
    });
  };

  const onLogoutHandler = () => authContext.logout();

  return (
    <div className={ styles.profile }>
      <h1>My Profile</h1>
      <form className={ styles.form } onSubmit={ submitHandler }>
        <div className={ styles.control }>
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password"/>
        </div>
        <div className={ styles.action }>
          <button type="submit">Change Password</button>
        </div>
      </form>
      <div className={ styles.action }>
        <button onClick={onLogoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default PageProfile;