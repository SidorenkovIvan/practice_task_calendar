import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./PageProfile.module.css";
import AuthContext from "../PageLogin/Store/AuthContext";
import { authActions } from "../PageLogin/Store/Redux";
import variables from "../PageMain/Data/Data";

const PageProfile = () => {
  const newPasswordRef = useRef();
  const authContext = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserInfo = () => {
    fetch(
      variables.FIREBASE_REQUESTS.accountLookup + variables.FIREBASE_REQUESTS.key,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((data) => console.log(data));
  };

  const makeUserInfo = () => {
    fetch(
      variables.FIREBASE_REQUESTS.accountUpdate + variables.FIREBASE_REQUESTS.key,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token,
          displayName: "Ivan",
          returnSecureToken: false
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((data) => console.log(data));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;
    //validation

    fetch(
      variables.FIREBASE_REQUESTS.accountUpdate + variables.FIREBASE_REQUESTS.key,
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
      navigate("/menu", { replace: true });
    });
  };

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
    authContext.logout();
  };

  return (
    <div className={ styles.profile }>
      <h1>My Profile</h1>
      <button onClick={ getUserInfo }>Get user Info</button>
      <button onClick={ makeUserInfo }>Make user Info</button>
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
        <button onClick={ onLogoutHandler }>Logout</button>
      </div>
    </div>
  );
};

export default PageProfile;