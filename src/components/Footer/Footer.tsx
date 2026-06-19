import { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <h5>Plano Technology Partners</h5>
                    <p>
                        Custom Software Development, Cloud Solutions,
                        Automation, and Technology Consulting.
                    </p>
                </div>

                <div className={styles.links}>
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>

            <div className={styles.bottomBar}>
                © {year} Plano Technology Partners. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;