import { FC, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      expand="lg"
      expanded={expanded}
      className={styles.navbar}
    >
      <div className="container-fluid">
        <Navbar.Brand
          as={Link}
          to="/"
          className={styles["navbar-brand"]}
          onClick={() => setExpanded(false)}
        >
          Plano Technology Partners
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default Header;
