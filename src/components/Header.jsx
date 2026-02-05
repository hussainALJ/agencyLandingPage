import styles from "./style/Header.module.css";
import { useEffect, useState, useRef } from "react";
import Logo from "../assets/logo.svg?react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useRef()
  useEffect(() => {
    (isOpen)? nav.current.className = styles.show: nav.current.className = styles.hide
  }, [isOpen])

  return (
    <header>
      <div className={`${styles.container} container`}>
        <div className={`${styles.flexContainer} flex`}>
          <Logo />
        <nav className={`${styles.nav} flex`}>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            Home
          </a>
              <div ref={nav}>
                  <a href="">Service</a>
                  <a href="">Feature</a>
                  <a href="">Product</a>
                  <a href="">Testimonial</a>
                  <a href="">FAQ</a>
              </div>
        </nav>
          <div className="flex">
            <button className={`${styles.login} ${styles.btn}`}>Log In</button>
            <button className={`${styles.btn}`}>Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
