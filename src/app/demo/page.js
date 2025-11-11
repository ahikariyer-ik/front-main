'use client'
import React, { useState } from 'react';
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../componants/navbar'));
const Footer = dynamic(() => import('../componants/footer'));

export default function DemoPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // API'ye demo isteği gönder
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
                setMessage('Demo talebiniz başarıyla iletildi! Kısa süre içinde sizinle iletişime geçeceğiz.');
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    message: ''
                });
            } else {
                const error = await response.json();
                setMessage(error.error?.message || error.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
            }
        } catch (error) {
            console.error('Demo talep hatası:', error);
            setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar navClass="defaultscroll sticky" logolight={true} menuClass="navigation-menu nav-left nav-light" />

            <section className="d-table w-100" style={{ 
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                paddingTop: '100px',
                paddingBottom: '60px'
            }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="card border-0 shadow rounded-md" style={{ 
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <div className="card-body p-5">
                                    <h3 className="text-center mb-4">Ücretsiz Demo İsteyin</h3>
                                    <p className="text-muted text-center mb-4">
                                        Kurum360'ı ücretsiz deneyin ve insan kaynakları yönetiminizi dijitalleştirin
                                    </p>

                                    {message && (
                                        <div className={`alert ${message.includes('başarıyla') ? 'alert-success' : 'alert-danger'} mb-4`}>
                                            {message}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <label className="form-label">
                                                    Ad Soyad <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    placeholder="Adınız ve Soyadınız"
                                                    required
                                                />
                                            </div>

                                            <div className="col-12 mb-3">
                                                <label className="form-label">
                                                    Email <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="ornek@firma.com"
                                                    required
                                                />
                                            </div>

                                            <div className="col-12 mb-3">
                                                <label className="form-label">
                                                    Telefon <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="0555 123 45 67"
                                                    required
                                                />
                                            </div>

                                            <div className="col-12 mb-3">
                                                <label className="form-label">
                                                    Şirket Adı
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    placeholder="Şirket adınız (opsiyonel)"
                                                />
                                            </div>

                                            <div className="col-12 mb-4">
                                                <label className="form-label">
                                                    Mesajınız
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="İhtiyaçlarınız hakkında kısa bir bilgi verebilirsiniz (opsiyonel)"
                                                    rows="3"
                                                />
                                            </div>

                                            <div className="col-12 mb-3">
                                                <div className="form-check">
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
                                            </div>

                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary w-100"
                                                    disabled={loading}
                                                >
                                                    {loading ? 'Gönderiliyor...' : 'Ücretsiz Demo İste'}
                                                </button>
                                            </div>

                                            <div className="col-12 text-center mt-4">
                                                <p className="mb-0">
                                                    Zaten hesabınız var mı?{' '}
                                                    <Link href="http://localhost:3001/login" className="text-primary fw-bold">
                                                        Giriş Yapın
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="mt-5 pt-4 border-top">
                                        <div className="row text-center">
                                            <div className="col-md-4 mb-3 mb-md-0">
                                                <div className="d-flex flex-column align-items-center">
                                                    <i className="mdi mdi-check-circle text-success h2 mb-2"></i>
                                                    <h6 className="mb-0">Ücretsiz</h6>
                                                    <small className="text-muted">30 Gün</small>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3 mb-md-0">
                                                <div className="d-flex flex-column align-items-center">
                                                    <i className="mdi mdi-account-check text-success h2 mb-2"></i>
                                                    <h6 className="mb-0">Kredi Kartı</h6>
                                                    <small className="text-muted">Gerekmez</small>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="d-flex flex-column align-items-center">
                                                    <i className="mdi mdi-headset text-success h2 mb-2"></i>
                                                    <h6 className="mb-0">Destek</h6>
                                                    <small className="text-muted">7/24</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

