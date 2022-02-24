import React from "react";
import styles from "./PageMenu.module.css";
import { Link } from "react-router-dom";

const PageMenu = () => {
  return (
    <>
      <div className={ styles.mainRow }>
        <header className={ styles.columnMenu }>
          <div className={ styles.logo }/>
          <nav>
            <ul>
              <li>
                <div className={ styles.iconAccount }/>
                <Link to="/menu/calendar">Calendar</Link>
              </li>
              <li>
                <div className={ styles.iconAccount }/>
                <Link to="/menu/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={ styles.columnInfo }>
          <div className={ styles.header }>
            <h2>Header</h2>
          </div>
          <div className={ styles.rowInput }>
            <label>Sign Up for our newsletter: </label>
            <input placeholder="Email Address"/>
            <button>Subscribe</button>
          </div>
          <div className={ styles.grid }>
            <div>
            </div>
          </div>
        </main>
      </div>
      <hr/>
      <footer>

      </footer>
    </>
  );
};

export default PageMenu;