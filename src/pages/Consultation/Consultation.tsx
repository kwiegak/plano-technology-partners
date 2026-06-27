import styles from './Consultation.module.css';
import { useState } from 'react';
import { ConsultationRequest } from '../../models/ConsultationRequest';

function Consultation() {
    const [request, setRequest] =
        useState<ConsultationRequest>({
            name: '',
            email: '',
            company: '',
            phone: '',
            projectDetails: ''
        });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        projectDetails: ''
    });

    const [modalOpen, setModalOpen] = useState(false);

    const [modal, setModal] = useState({
        success: true,
        title: '',
        message: ''
    });
    
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;

        setRequest(prev => ({
            ...prev,
            [name]: value
        }));

        if (name in errors) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validate = () => {
        const newErrors = {
            name: '',
            email: '',
            projectDetails: ''
        };

        if (!request.name.trim()) {
            newErrors.name = 'Please enter your name.';
        }

        if (!request.email.trim()) {
            newErrors.email = 'Please enter your email.';
        }
        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email)
        ) {
            newErrors.email =
                'Please enter a valid email address.';
        }

        if (!request.projectDetails.trim()) {
            newErrors.projectDetails =
                'Please tell us a little about your project.';
        }

        setErrors(newErrors);

        return !Object.values(newErrors).some(Boolean);
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {

            const response = await fetch(
                      'https://api.planotechnologypartners.com/api/consultations',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(request)
                }
            );

            if (!response.ok) {
                throw new Error();
            }

            setModal({
                success: true,
                title: 'Thank You, We\'ve Received Your Request.',
                message:
                    "Your consultation request has been received successfully. A member of the Plano Technology Partners team will review your request and respond within one business day."
            });

            setModalOpen(true);

            setRequest({
                name: '',
                email: '',
                company: '',
                phone: '',
                projectDetails: ''
            });

            setErrors({
                name: '',
                email: '',
                projectDetails: ''
            });

        }
        catch {

            setModal({
                success: false,
                title: 'Unable to Submit Request',
                message:
                    "We couldn't process your request at this time. Please try again in a few minutes or contact us directly by email."
            });

            setModalOpen(true);
        }
    };

    const isFormReady =
        request.name.trim() &&
        request.email.trim() &&
        request.projectDetails.trim();

    return (
        <main className={styles.container}>
            <h1>Request a Consultation</h1>

            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <div className={styles.formGroup}>
                    <label>
                        Name <span>*</span>
                    </label>

                    <input
                        className={
                            errors.name
                                ? styles.invalid
                                : ''
                        }
                        name="name"
                        value={request.name}
                        onChange={handleChange}
                    />

                    {errors.name && (
                        <div className={styles.fieldError}>
                            {errors.name}
                        </div>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label>
                        Email <span>*</span>
                    </label>

                    <input
                        type="email"
                        className={
                            errors.email
                                ? styles.invalid
                                : ''
                        }
                        name="email"
                        value={request.email}
                        onChange={handleChange}
                    />

                    {errors.email && (
                        <div className={styles.fieldError}>
                            {errors.email}
                        </div>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label>Company</label>

                    <input
                        name="company"
                        value={request.company}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Phone</label>

                    <input
                        name="phone"
                        value={request.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>
                        Project Details <span>*</span>
                    </label>

                    <textarea
                        className={
                            errors.projectDetails
                                ? styles.invalid
                                : ''
                        }
                        rows={6}
                        name="projectDetails"
                        value={request.projectDetails}
                        onChange={handleChange}
                    />

                    {errors.projectDetails && (
                        <div className={styles.fieldError}>
                            {errors.projectDetails}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!isFormReady}
                >
                    Submit Request
                </button>
            </form>
            {modalOpen && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className={`${styles.modalCard} ${modal.success
                                ? styles.success
                                : styles.error
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>{modal.title}</h2>

                        <p>{modal.message}</p>

                        <div className={styles.modalActions}>
                            <button
                                type="button"
                                onClick={() => setModalOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Consultation;