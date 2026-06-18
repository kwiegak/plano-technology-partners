import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Plano Technology Partners</h1>

                <p>
                    Custom Software Development, Cloud Solutions,
                    Automation, and Technology Consulting.
                </p>

                <div className={styles.buttons}>
                    <button>Request a Consultation</button>
                    <button>Our Services</button>
                </div>
            </div>
        </div>
    );
}

export default Home;