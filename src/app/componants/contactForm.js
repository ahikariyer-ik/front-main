'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-forms`, {
                data: formData
            });
            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus({
                loading: false,
                success: false,
                error: 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.'
            });
        }
    };

    if (status.success) {
        return (
            <div className="alert alert-success">
                Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
            </div>
        );
    }

    return (
        <div className="p-4 rounded shadow">
            <h4>Bizimle İletişime Geçin!</h4>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Adınız Soyadınız <span className="text-danger">*</span></label>
                            <input 
                                name="name" 
                                type="text" 
                                className="form-control" 
                                placeholder="Ad Soyad"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label fw-semibold">E-posta Adresiniz <span className="text-danger">*</span></label>
                            <input 
                                name="email" 
                                type="email" 
                                className="form-control" 
                                placeholder="E-posta"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Konu</label>
                            <input 
                                name="subject" 
                                type="text" 
                                className="form-control" 
                                placeholder="Konu"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Mesajınız <span className="text-danger">*</span></label>
                            <textarea 
                                name="message" 
                                rows="4" 
                                className="form-control" 
                                placeholder="Mesajınız"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>

                {status.error && (
                    <div className="alert alert-danger mb-3">
                        {status.error}
                    </div>
                )}

                <div className="row">
                    <div className="col-12">
                        <div className="d-grid">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                disabled={status.loading}
                            >
                                {status.loading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
} 