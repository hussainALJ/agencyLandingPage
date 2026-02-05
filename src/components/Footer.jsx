import Logo from "../assets/logo.svg?react";
import IgIcon from "../assets/Instagram-icon.svg?react";
import DribbbleIcon from "../assets/dribbble-icon.svg?react";
import TwitterIcon from "../assets/twitter-icon.svg?react";
import YtIcon from "../assets/YT-icon.svg?react";
import SendIcon from "../assets/send-icon.svg?react"
import styles from "./style/Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={`${styles.flexContainer} flex`}>
          <div className={`${styles.copyRights}`}>
            <div className={`${styles.logo}`}>
              <Logo />
            </div>
            <div>
              <p className={`${styles.silver} mini`}>
                Copyright © 2020 Nexcent ltd.
              </p>
              <p className={`${styles.silver}`}>All rights reserved</p>
            </div>
            <div className={`${styles.socials} flex`}>
              <IgIcon />
              <DribbbleIcon />
              <TwitterIcon />
              <YtIcon />
            </div>
          </div>
          <div className={`${styles.navigation} flex`}>
            <div>
              <h4>Company</h4>
              <nav className={`${styles.silver} flex mini`}>
                <a href="">About us</a>
                <a href="">Blog</a>
                <a href="">Contact us</a>
                <a href="">Pricing</a>
                <a href="">Testimonials</a>
              </nav>
            </div>
            <div>
              <h4>Support</h4>
              <nav className={`${styles.silver} flex mini`}>
                <a href="">Help center</a>
                <a href="">Terms of service</a>
                <a href="">Legal</a>
                <a href="">Privacy policy</a>
                <a href="">Status</a>
              </nav>
            </div>
            <div>
              <h4>Stay up to date</h4>
              <div className={`${styles.email} flex`}>
                <input type="email" placeholder="Your email address" />
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
