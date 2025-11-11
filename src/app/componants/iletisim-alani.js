'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function IletisimAlani() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
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
            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}/api/demo-requests/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    companyName: formData.companyName,
                    message: formData.message
                }),
            });

            if (response.ok) {
                setSubmitMessage('Demo talebiniz başarıyla iletildi! Kısa süre içinde sizinle iletişime geçeceğiz.');
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    message: ''
                });
            } else {
                const error = await response.json();
                setSubmitMessage(error.error?.message || error.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
            }
        } catch (error) {
            console.error('Demo talep hatası:', error);
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
                            <h2>Ücretsiz Demo İsteyin</h2>
                            <p>Kurum360'ı ücretsiz deneyin ve insan kaynakları yönetiminizi dijitalleştirin</p>
                        </div>

                        {submitMessage && (
                            <div className={`alert ${submitMessage.includes('başarıyla') ? 'alert-success' : 'alert-danger'} mb-4`}>
                                {submitMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="fullName">
                                    Ad Soyad <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="form-control"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Adınız ve Soyadınız"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="ornek@firma.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                    Telefon <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="0555 123 45 67"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="companyName">
                                    Şirket Adı
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    className="form-control"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Şirket adınız (opsiyonel)"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="İhtiyaçlarınız hakkında kısa bir bilgi verebilirsiniz (opsiyonel)"
                                ></textarea>
                            </div>

                            <div className="form-group form-check-group">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="acceptTerms"
                                    required
                                />
                                <label className="form-check-label" htmlFor="acceptTerms">
                                    <Link href="/terms" className="text-primary">
                                        Kullanım koşullarını
                                    </Link> ve{' '}
                                    <Link href="/privacy" className="text-primary">
                                        gizlilik politikasını
                                    </Link>{' '}
                                    kabul ediyorum.
                                </label>
                            </div>

                            <div className="form-group">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Gönderiliyor...' : 'Ücretsiz Demo İste'}
                                </button>
                            </div>
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

                .text-danger {
                    color: #dc3545;
                }

                .form-check-group {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }

                .form-check-input {
                    width: 18px;
                    height: 18px;
                    margin-top: 0.2rem;
                    cursor: pointer;
                    flex-shrink: 0;
                }

                .form-check-label {
                    font-weight: 400;
                    color: #666;
                    font-size: 0.9rem;
                    line-height: 1.5;
                    cursor: pointer;
                }

                .text-primary {
                    color: #1e3a5f;
                    text-decoration: underline;
                }

                .text-primary:hover {
                    color: #152a47;
                }

                .mb-4 {
                    margin-bottom: 1.5rem;
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

