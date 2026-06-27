import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <Link to="/" className={styles.brand}>

          <img
            src="/icon-192x192.png"
            alt="Plano Technology Partners"
            className={styles.logo}
          />

          <div className={styles.textContainer}>
            <span className={styles.company}>
              Plano Technology Partners
            </span>

            <span className={styles.tagline}>
              SOFTWARE • CLOUD • CONSULTING
            </span>
          </div>

        </Link>

        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}