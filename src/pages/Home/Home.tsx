import styles from "./Home.module.css";
import hero from "../../assets/images/home-banner.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section
                className={styles.hero}
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className={styles.heroOverlay}>
                    <div className={styles.heroContent}>

                        <h1>Technology Solutions</h1>

                        <h2>Built for Plano Businesses</h2>

                        <p>
                            Custom software development, cloud engineering,
                            AI integration, and technology consulting that
                            helps your business grow.
                        </p>

                        <Link
                            to="/consultation"
                            className={styles.heroButton}
                        >
                            Schedule Your Free Consultation
                        </Link>

                    </div>
                </div>
            </section>
            <section className={styles.services}>

                <div className={styles.serviceCard}>
                    <h3>Custom Software Development</h3>
                    <p>
                        Modern web applications, APIs, integrations,
                        and enterprise systems tailored to your business.
                    </p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Cloud Solutions</h3>
                    <p>
                        AWS architecture, migrations, automation,
                        and scalable infrastructure.
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
            <section className={styles.homeIntro}>
                <div className={styles.container}>

                    <h2>Plano Technology Partners</h2>

                    <p>
                        We partner with businesses throughout Plano and
                        North Texas to deliver enterprise-grade technology
                        solutions that improve productivity, reduce costs,
                        and prepare organizations for long-term growth.
                    </p>

                </div>
            </section>
        </>
    );
}