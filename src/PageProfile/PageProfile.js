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
        navigate("/calendar");
    });
  };

  return (
    <div className={ styles.profile } onSubmit={ submitHandler }>
      <form className={ styles.form }>
        <div className={ styles.control }>
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password"/>
        </div>
        <div className={ styles.action }>
          <button>Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default PageProfile;