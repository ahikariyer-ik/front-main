'use client';
import { useState } from 'react';
import { sendContactForm } from '@/api/contact';

export default function IletisimAlani() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            await sendContactForm({
                data: {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }
            });

            setSubmitMessage('Mesajınız alınmıştır.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="iletisim-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-header">
                            <h2>Bize Ulaşın</h2>
                            <p>Sorularınız veya demo talepleriniz için formu doldurun.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Ad Soyad</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-posta</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mesaj</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                                </button>
                            </div>

                            {submitMessage && (
                                <div className={`alert ${submitMessage.includes('alınmıştır') ? 'alert-success' : 'alert-danger'}`}>
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .iletisim-section {
                    background: #f8fafc;
                    padding: 100px 0;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .section-header h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1e3a5f;
                    margin-bottom: 1rem;
                }

                .section-header p {
                    font-size: 1.2rem;
                    color: #666;
                }

                .contact-form {
                    background: white;
                    padding: 3rem;
                    border-radius: 16px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-weight: 600;
                    color: #1e3a5f;
                    margin-bottom: 0.5rem;
                }

                .form-control {
                    width: 100%;
                    padding: 0.875rem 1rem;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    font-size: 1rem;
                    color: #333;
                }

                .form-control:focus {
                    outline: none;
                    border-color: #1e3a5f;
                    box-shadow: 0 0 0 3px rgba(30, 58, 95, 0.1);
                }

                .btn-primary {
                    background-color: #1e3a5f;
                    color: white;
                    border: none;
                    padding: 1rem 3rem;
                    font-weight: 600;
                    border-radius: 8px;
                    cursor: pointer;
                    width: 100%;
                }

                .btn-primary:hover:not(:disabled) {
                    background-color: #152a47;
                }

                .btn-primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .alert {
                    padding: 1rem;
                    border-radius: 8px;
                    margin-top: 1rem;
                }

                .alert-success {
                    background-color: #d1fae5;
                    color: #065f46;
                }

                .alert-danger {
                    background-color: #fee2e2;
                    color: #991b1b;
                }

                @media (max-width: 768px) {
                    .iletisim-section {
                        padding: 60px 0;
                    }

                    .section-header h2 {
                        font-size: 2rem;
                    }

                    .contact-form {
                        padding: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}

