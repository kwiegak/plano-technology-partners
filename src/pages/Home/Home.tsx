import styles from "./Home.module.css";
import hero from "../../assets/images/home-banner.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            {/* ================================================= */}
            {/* Hero */}
            {/* ================================================= */}

            <section
                className={styles.hero}
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className={styles.heroOverlay}>
                    <div className={styles.heroContent}>

                        <h1>
                            Technology Solutions That Help
                            <br />
                            Businesses Grow
                        </h1>

                        <h2>
                            Custom Software • Cloud • AI • Consulting
                        </h2>

                        <p>
                            We help organizations modernize their technology
                            through custom software development, cloud
                            engineering, AI integration, and practical IT
                            consulting designed around your business goals.
                        </p>
                        <Link
                            to="/consultation"
                            className={styles.heroButton}
                        >
                            <span className={styles.desktopText}>
                                Schedule Your Free Consultation
                            </span>

                            <span className={styles.mobileText}>
                                Schedule Consultation
                            </span>
                        </Link>

                    </div>
                </div>
            </section>

            {/* ================================================= */}
            {/* Local */}
            {/* ================================================= */}

            <section className={styles.localSection}>

                <div className={styles.container}>

                    <p className={styles.localText}>
                        Proudly serving businesses throughout
                        Plano • Frisco • Allen • McKinney • Richardson • North Dallas
                    </p>

                </div>

            </section>

            {/* ================================================= */}
            {/* Services */}
            {/* ================================================= */}

            <section
                id="services"
                className={styles.services}
            >

                <div className={styles.serviceCard}>

                    <h3>Custom Software Development</h3>

                    <p>
                        Enterprise web applications, APIs,
                        backend systems, integrations,
                        and scalable software built around
                        your organization's workflow.
                    </p>

                </div>

                <div className={styles.serviceCard}>

                    <h3>Cloud Solutions</h3>

                    <p>
                        AWS architecture, migrations,
                        DevOps automation,
                        infrastructure modernization,
                        monitoring,
                        and cloud optimization.
                    </p>

                </div>

                <div className={styles.serviceCard}>

                    <h3>Technology Consulting</h3>

                    <p>
                        Technology assessments,
                        modernization planning,
                        AI adoption,
                        automation opportunities,
                        and long-term digital strategy.
                    </p>

                </div>

            </section>

            {/* ================================================= */}
            {/* Why Choose Us */}
            {/* ================================================= */}

            <section
                id="about"
                className={styles.whyUs}
            >

                <div className={styles.container}>

                    <h2>
                        Why Plano Technology Partners?
                    </h2>

                    <div className={styles.features}>

                        <div className={styles.feature}>

                            <h3>Enterprise Experience</h3>

                            <p>
                                Years of experience designing and
                                supporting enterprise-scale software
                                systems and cloud platforms.
                            </p>

                        </div>

                        <div className={styles.feature}>

                            <h3>Local Consulting</h3>

                            <p>
                                Based in Plano and focused on helping
                                local organizations solve practical
                                technology challenges.
                            </p>

                        </div>

                        <div className={styles.feature}>

                            <h3>Cloud Expertise</h3>

                            <p>
                                AWS architecture, cloud migrations,
                                automation, DevOps,
                                and scalable infrastructure.
                            </p>

                        </div>

                        <div className={styles.feature}>

                            <h3>AI Solutions</h3>

                            <p>
                                Identify opportunities to leverage
                                AI responsibly through automation,
                                productivity improvements,
                                and business intelligence.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================================================= */}
            {/* Process */}
            {/* ================================================= */}

            <section
                id="process"
                className={styles.process}
            >

                <div className={styles.container}>

                    <h2>
                        Simple, Straightforward Process
                    </h2>

                    <div className={styles.processGrid}>

                        <div className={styles.processStep}>

                            <span>1</span>

                            <h3>Schedule Consultation</h3>

                            <p>
                                Tell us about your business,
                                current systems,
                                and technology goals.
                            </p>

                        </div>

                        <div className={styles.processStep}>

                            <span>2</span>

                            <h3>Technology Review</h3>

                            <p>
                                We'll discuss solutions,
                                priorities,
                                budget,
                                timeline,
                                and available options.
                            </p>

                        </div>

                        <div className={styles.processStep}>

                            <span>3</span>

                            <h3>Receive Your Roadmap</h3>

                            <p>
                                Walk away with practical
                                recommendations,
                                next steps,
                                and a clear implementation plan.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <section
                id="contact"
                className={styles.cta}
            >

                <div className={styles.container}>

                    <h2>
                        Ready to Modernize Your Business?
                    </h2>

                    <p>
                        Whether you're planning a new software project,
                        migrating to the cloud,
                        or looking for trusted technology guidance,
                        we'd love to learn about your goals.
                    </p>

                    <Link
                        to="/consultation"
                        className={styles.heroButton}
                    >
                        <span className={styles.desktopText}>
                            Schedule Your Free Consultation
                        </span>

                        <span className={styles.mobileText}>
                            Schedule Consultation
                        </span>
                    </Link>
                </div>

            </section>

        </>
    );
}