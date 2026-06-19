import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
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
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;