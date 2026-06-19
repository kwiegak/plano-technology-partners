import styles from './Home.module.css';

function Home() {
    return (
        <main>

            <section className={styles.hero}>
                <img
                    src="/images/home-banner.png"
                    alt="Plano Technology Partners"
                    className={styles.heroImage}
                />
            </section>

            <section className={styles.intro}>

                <h1>
                    Technology Solutions for North Texas Businesses
                </h1>

                <p>
                    Custom Software Development, Cloud Solutions,
                    Automation, and Technology Consulting.
                </p>

                <div className={styles.buttons}>
                    <button className={styles.primaryBtn}>
                        Request a Consultation
                    </button>

                    <button className={styles.secondaryBtn}>
                        Our Services
                    </button>
                </div>

            </section>

            <section className={styles.services}>

                <div className={styles.serviceCard}>
                    <h3>Custom Software Development</h3>

                    <p>
                        Modern web applications, APIs,
                        integrations, and enterprise systems
                        tailored to your business.
                    </p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Cloud Solutions</h3>

                    <p>
                        AWS architecture, migrations,
                        automation, and scalable infrastructure.
                    </p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Technology Consulting</h3>

                    <p>
                        Strategic technology guidance,
                        modernization initiatives,
                        and digital transformation.
                    </p>
                </div>

            </section>

            <section className={styles.about}>

                <h2>
                    Local Expertise. Enterprise Experience.
                </h2>

                <p>
                    Plano Technology Partners helps businesses leverage
                    modern technology through custom software development,
                    cloud architecture, automation, and consulting services.

                    We combine enterprise-level engineering experience with
                    personalized local support.
                </p>

            </section>

        </main>
    );
}

export default Home;