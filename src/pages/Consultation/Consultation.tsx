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

    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;

        setRequest({
            ...request,
            [name]: value
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError('');

        if (!request.name.trim()) {
            setError('Name is required');
            return;
        }

        if (!request.email.trim()) {
            setError('Email is required');
            return;
        }

        if (!request.projectDetails.trim()) {
            setError('Project Details are required');
            return;
        }

        await fetch(
            'http://54.224.215.184:8080/api/consultations',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            }
        );
    };

    return (
        <main className={styles.container}>
            <h1>Request a Consultation</h1>

            {
                error &&
                <div className={styles.error}>
                    {error}
                </div>
            }

            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input
                        name="name"
                        value={request.name}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={request.email}
                        onChange={handleChange}
                    />
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
                    <label>Project Details</label>
                    <textarea
                        name="projectDetails"
                        value={request.projectDetails}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">
                    Submit Request
                </button>
            </form>
        </main>
    );
}

export default Consultation;