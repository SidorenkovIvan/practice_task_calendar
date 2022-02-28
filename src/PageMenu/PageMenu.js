import React from "react";
import { Link } from "react-router-dom";

import styles from "./PageMenu.module.css";

const PageMenu = () => {
  return (
    <div className={ styles.container }>
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
            <div className={ styles.info }>
              <h2>Hello you</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
              </p>
            </div>
            <div className={ styles.info }>
              <h2>Some info</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
              </p>
            </div>
            <div className={ styles.info }>
              <h2>Whats new</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit
              </p>
            </div>
          </div>
        </main>
      </div>
      <hr/>
      <footer className={ styles.footerRow }>
        <div className={ styles.columnFooter }>
          <div className={ styles.links }>
            <Link to="/menu/profile">Privacy Policy</Link>
            <p className={ styles.divider }> | </p>
            <Link to="/menu/calendar">Terms of use</Link>
            <p className={ styles.divider }> | </p>
            <Link to="/menu/calendar">Contact</Link>
          </div>
          <p className={ styles.footerText }>@ 2015 My Company, all rights reserved.</p>
        </div>
        <div className={ styles.rowSocialMedia }>
          <div className={ styles.icons }/>
          <div className={ `${ styles.icons } ${ styles.iconGoogle }` }/>
          <div className={ `${ styles.icons } ${ styles.iconTwitter }` }/>
        </div>
      </footer>
    </div>
  );
};

export default PageMenu;