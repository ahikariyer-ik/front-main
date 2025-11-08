'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from "@iconify/react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";
import ScrollReveal from "../componants/scrollReveal";

export default function InsanKaynaklari() {
    const [activeSection, setActiveSection] = useState('satinal');

    const features = [
        {
            id: 'digital-ik',
            title: 'Dijital İK',
            icon: 'mdi:robot',
            description: 'Yapay zeka destekli akıllı belge yönetimi. Blockchain güvenliği ile özlük dosyalarından adliye sicil kayıtlarına kadar tüm belgeleriniz bulut tabanlı dijital arşivde. Anlık erişim, sıfır kayıp riski.',
            color: 'primary'
        },
        {
            id: 'izin-takip',
            title: 'İzin Takip Sistemi',
            icon: 'mdi:calendar-check',
            description: 'Akıllı otomasyon ile izin süreçlerinizi yeniden tanımlayın. Otomatik onay akışları, gerçek zamanlı takip ve analitik raporlarla her detayı kontrolünüzde. Dijital dönüşüm, burada başlıyor.',
            color: 'success'
        },
        {
            id: 'calisanlar',
            title: 'Çalışanlarım',
            icon: 'mdi:account-group',
            description: '360 derece çalışan profilleri. Fotoğraflardan performans metriklerine, tüm bilgilere tek bakışta ulaşın. AI destekli arama ve filtreleme ile saniyeler içinde bulun. Görsel veri yönetimi, maksimum verimlilik.',
            color: 'info'
        },
        {
            id: 'isten-ayrilanlar',
            title: 'İşten Ayrılan Çalışanlarım',
            icon: 'mdi:account-remove',
            description: 'Ayrılma süreçlerinin tam dijital haritası. Tarih, neden ve detaylı analitik ile ayrılış trendlerini görün. Makine öğrenmesi ile öngörüsel analizler. Her veri, stratejik karar için.',
            color: 'warning'
        },
        {
            id: 'devam-takip',
            title: 'Personel Devam Takip Sistemi',
            icon: 'mdi:qrcode-scan',
            description: 'QR kod teknolojisi ile temasız giriş-çıkış takibi. Gerçek zamanlı izleme, otomatik raporlama ve yapay zeka destekli anomali tespiti. Mobil uyumlu, her yerden kontrol.',
            color: 'danger'
        }
    ];

    const plans = [
        {
            name: 'Başlangıç',
            price: 100,
            period: 'Aylık',
            unit: 'Çalışan başına',
            features: [
                'Çalışanlarım sekmesi',
                'İşten Ayrılanlar sekmesi',
                'Temel raporlama',
                'Email desteği'
            ],
            color: 'primary',
            popular: false
        },
        {
            name: 'Orta Paket',
            price: 200,
            period: 'Aylık',
            unit: 'Çalışan başına',
            features: [
                'Başlangıç paketindeki tüm özellikler',
                'İzin Takibi sekmesi',
                'Dijital İK sekmesi',
                'Gelişmiş raporlama',
                'Öncelikli email desteği'
            ],
            color: 'success',
            popular: true
        },
        {
            name: 'Üst Paket',
            price: 400,
            period: 'Aylık',
            unit: 'Çalışan başına',
            features: [
                'Orta paketindeki tüm özellikler',
                'Personel Devam Takip Sistemi (QR Kod)',
                'Tüm sistemler',
                'Özel raporlama',
                '7/24 telefon desteği',
                'Özel eğitimler'
            ],
            color: 'danger',
            popular: false
        }
    ];

    return (
        <>
            <Navbar navClass="defaultscroll sticky" navLight={true} />
            
            {/* Hero Section */}
            <section className="bg-primary position-relative overflow-hidden" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)'}}>
                <div className="bg-overlay" style={{background: 'rgba(30, 41, 59, 0.3)'}}></div>
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <ScrollReveal>
                                <h1 className="text-white fw-bold mb-4" style={{fontSize: '3.5rem'}}>
                                    İnsan Kaynakları Yönetim Sistemi
                                </h1>
                                <p className="text-white-50 mb-5" style={{fontSize: '1.25rem'}}>
                                    Yapay zeka destekli, bulut tabanlı İK yönetim platformu. Personel yönetiminden izin takibine, QR kod ile devam kontrollerine kadar tüm süreçlerinizi tek platformda, maksimum verimlilikle yönetin.
                                </p>
                                <div className="d-flex justify-content-center gap-3 flex-wrap">
                                    <Link href="#satinal" className="btn btn-lg btn-light px-5 py-3">
                                        <i className="mdi mdi-cart me-2"></i>
                                        Satın Al
                                    </Link>
                                    <Link href="#demo" className="btn btn-lg btn-outline-light px-5 py-3">
                                        <i className="mdi mdi-play-circle me-2"></i>
                                        Demo
                                    </Link>
                                    <Link href="/login" className="btn btn-lg btn-outline-light px-5 py-3">
                                        <i className="mdi mdi-login me-2"></i>
                                        Giriş Yap
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
                <div className="position-absolute bottom-0 start-0 end-0">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </section>

            {/* Features Sections */}
            {features.map((feature, index) => {
                // Starting from Dijital İK (index 0), apply gradient backgrounds
                const isGradientSection = index === 0;
                const gradientVariations = [
                    'linear-gradient(135deg, #DBEAFE 0%, #E0E7FF 30%, #EDE9FE 70%, #F3E8FF 100%)', // Soft blue to purple
                    'linear-gradient(135deg, #E0E7FF 0%, #EDE9FE 40%, #F3E8FF 80%, #F5E6FF 100%)', // Very soft blue-purple
                    'linear-gradient(135deg, #DBEAFE 0%, #E0E7FF 50%, #EDE9FE 100%)', // Soft blue-purple blend
                    'linear-gradient(135deg, #EFF6FF 0%, #E0E7FF 30%, #EDE9FE 70%, #F3E8FF 100%)', // Light blue to purple
                    'linear-gradient(135deg, #DBEAFE 0%, #E0E7FF 45%, #EDE9FE 100%)', // Consistent soft blue-purple
                ];
                const gradientStyle = isGradientSection 
                    ? {
                        background: gradientVariations[index % gradientVariations.length],
                        position: 'relative',
                        overflow: 'hidden'
                    }
                    : {
                        background: gradientVariations[index % gradientVariations.length],
                        position: 'relative',
                        overflow: 'hidden'
                    };

                return (
                <section 
                    key={feature.id} 
                        className="py-5 position-relative"
                        style={{
                            ...gradientStyle,
                            minHeight: '90vh',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundAttachment: 'fixed'
                        }}
                    >
                        {/* Decorative elements */}
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                            background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.25) 0%, transparent 50%)',
                            pointerEvents: 'none'
                        }}></div>
                        
                        <div className="container position-relative" style={{zIndex: 1}}>
                        <div className={`row align-items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                            <div className="col-lg-6">
                                <ScrollReveal delay={index * 100}>
                                        <div className="d-inline-flex align-items-center gap-3 mb-4">
                                            <div className="bg-white rounded shadow-lg d-inline-flex p-4" style={{
                                                boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)',
                                                transform: 'rotate(-5deg)'
                                            }}>
                                                <Icon icon={feature.icon} className="fea icon-ex-xl" style={{fontSize: '4rem', color: '#6366F1'}} />
                                            </div>
                                            {index === 0 && (
                                                <span className="badge bg-white px-4 py-2 rounded-pill" style={{
                                                    fontSize: '0.9rem',
                                                    fontWeight: 'bold',
                                                    color: '#6366F1',
                                                    boxShadow: '0 5px 15px rgba(99, 102, 241, 0.3)'
                                                }}>
                                                    <i className="mdi mdi-star me-2"></i>
                                                    YENİ
                                                </span>
                                            )}
                                    </div>
                                        <h2 className="fw-bold mb-4" style={{
                                            fontSize: '3rem',
                                            color: '#4338CA',
                                            lineHeight: '1.2'
                                        }}>
                                            {feature.title}
                                        </h2>
                                        <p className="mb-4" style={{
                                            fontSize: '1.2rem',
                                            lineHeight: '1.9',
                                            color: '#6366F1',
                                            opacity: 0.9
                                        }}>
                                        {feature.description}
                                    </p>
                                        <div className="d-flex gap-3 mt-4">
                                            <button className="btn btn-lg px-4 py-2 rounded-pill shadow-lg" style={{
                                                background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                                                color: 'white',
                                                border: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.4)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(99, 102, 241, 0.3)';
                                            }}>
                                                <i className="mdi mdi-rocket-launch me-2"></i>
                                                Keşfet
                                            </button>
                                            <button className="btn btn-lg px-4 py-2 rounded-pill shadow-sm" style={{
                                                background: 'white',
                                                color: '#6366F1',
                                                border: '2px solid #6366F1',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = '#6366F1';
                                                e.currentTarget.style.color = 'white';
                                                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.3)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'white';
                                                e.currentTarget.style.color = '#6366F1';
                                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(99, 102, 241, 0.2)';
                                            }}>
                                                <i className="mdi mdi-information me-2"></i>
                                                Daha Fazla
                                            </button>
                                        </div>
                                </ScrollReveal>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <ScrollReveal delay={index * 100 + 200}>
                                    <div className="position-relative">
                                            <div className="bg-white rounded-4 shadow-lg p-5 position-relative" style={{
                                                minHeight: '450px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                                                transform: index % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = index % 2 === 0 ? 'rotate(2deg) scale(1)' : 'rotate(-2deg) scale(1)'}>
                                                <Icon icon={feature.icon} className="fea" style={{
                                                    fontSize: '12rem',
                                                    background: gradientVariations[index % gradientVariations.length],
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    opacity: 0.8
                                                }} />
                                                {/* Floating badge */}
                                                <div className="position-absolute top-0 end-0 m-3">
                                                    <div className="bg-white rounded-circle shadow-lg d-flex align-items-center justify-content-center" style={{
                                                        width: '60px',
                                                        height: '60px'
                                                    }}>
                                                        <Icon icon="mdi:check-circle" style={{fontSize: '2rem', color: '#6366F1'}} />
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>
                );
            })}

            {/* Pricing Section */}
            <section id="satinal" className="py-5 position-relative" style={{
                background: 'linear-gradient(135deg, #DBEAFE 0%, #E0E7FF 30%, #EDE9FE 70%, #F3E8FF 100%)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative background elements */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }}></div>
                <div className="position-absolute bottom-0 end-0 w-100 h-100" style={{
                    background: 'radial-gradient(circle at 80% 100%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }}></div>

                <div className="container position-relative" style={{zIndex: 1}}>
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10 text-center">
                            <ScrollReveal>
                                <div className="d-inline-block mb-3">
                                    <span className="badge bg-white px-4 py-2 rounded-pill mb-3" style={{
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        color: '#6366F1',
                                        boxShadow: '0 5px 20px rgba(99, 102, 241, 0.25)'
                                    }}>
                                        <i className="mdi mdi-tag-multiple me-2"></i>
                                        ÖZEL FİYATLAR
                                    </span>
                                </div>
                                <h2 className="fw-bold mb-3" style={{
                                    fontSize: '3.5rem',
                                    color: '#4338CA'
                                }}>
                                    Fiyatlandırma Planları
                                </h2>
                                <p className="mb-0" style={{
                                    fontSize: '1.3rem',
                                    color: '#6366F1',
                                    opacity: 0.85
                                }}>
                                    İhtiyacınıza uygun paketi seçin ve dijital dönüşümünüze başlayın
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                    <div className="row g-4">
                        {plans.map((plan, index) => (
                            <div key={plan.name} className="col-lg-4 col-md-6">
                                <ScrollReveal delay={index * 100}>
                                    <div className={`card shadow-lg border-0 h-100 position-relative ${plan.popular ? 'border border-4 border-white' : ''}`} style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        boxShadow: plan.popular ? '0 25px 60px rgba(0,0,0,0.4)' : '0 15px 40px rgba(0,0,0,0.2)',
                                        transform: plan.popular ? 'scale(1.05)' : 'scale(1)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 30px 70px rgba(0,0,0,0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = plan.popular ? 'scale(1.05)' : 'scale(1)';
                                        e.currentTarget.style.boxShadow = plan.popular ? '0 25px 60px rgba(0,0,0,0.4)' : '0 15px 40px rgba(0,0,0,0.2)';
                                    }}>
                                        {plan.popular && (
                                            <div className="position-absolute top-0 start-50 translate-middle" style={{zIndex: 10}}>
                                                 <span className="badge rounded-pill px-4 py-2 text-white fw-bold" style={{
                                                     background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                                                     fontSize: '0.9rem',
                                                     boxShadow: '0 5px 20px rgba(99, 102, 241, 0.4)',
                                                     animation: 'pulse 2s infinite'
                                                 }}>
                                                     <i className="mdi mdi-star me-2"></i>
                                                     EN POPÜLER
                                                 </span>
                                            </div>
                                        )}
                                        <div className="card-body p-5 bg-white">
                                             <div className="text-center mb-4">
                                                 <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{
                                                     width: '80px',
                                                     height: '80px',
                                                     background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                                                     boxShadow: '0 5px 15px rgba(99, 102, 241, 0.3)'
                                                 }}>
                                                     <Icon icon="mdi:package-variant" style={{fontSize: '2.5rem', color: 'white'}} />
                                                 </div>
                                                 <h4 className="fw-bold mb-3" style={{fontSize: '1.8rem', color: '#4338CA'}}>{plan.name}</h4>
                                             </div>
                                             <div className="text-center mb-4 pb-4 border-bottom">
                                                 <div className="d-flex align-items-baseline justify-content-center">
                                                     <span className="h1 fw-bold mb-0" style={{fontSize: '3.5rem', color: '#6366F1'}}>{plan.price}</span>
                                                     <span className="ms-2" style={{fontSize: '1.2rem', color: '#818CF8'}}>₺</span>
                                                 </div>
                                                 <div className="mt-2" style={{color: '#818CF8'}}>/ {plan.period}</div>
                                                 <div className="small mt-1" style={{color: '#818CF8'}}>{plan.unit}</div>
                                             </div>
                                             <ul className="list-unstyled mb-4">
                                                 {plan.features.map((feature, idx) => (
                                                     <li key={idx} className="mb-3 d-flex align-items-start">
                                                         <i className={`mdi mdi-check-circle me-3 mt-1`} style={{
                                                             fontSize: '1.3rem',
                                                             color: '#6366F1',
                                                             flexShrink: 0
                                                         }}></i>
                                                         <span style={{fontSize: '1rem', lineHeight: '1.6', color: '#555'}}>{feature}</span>
                                                     </li>
                                                 ))}
                                             </ul>
                                             <button className={`btn w-100 btn-lg rounded-pill fw-bold text-white shadow-lg`} style={{
                                                 background: plan.popular 
                                                     ? 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)'
                                                     : 'linear-gradient(135deg, #818CF8 0%, #A78BFA 100%)',
                                                 border: 'none',
                                                 padding: '15px',
                                                 fontSize: '1.1rem',
                                                 transition: 'all 0.3s ease'
                                             }}
                                             onMouseEnter={(e) => {
                                                 e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                                                 e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.4)';
                                             }}
                                             onMouseLeave={(e) => {
                                                 e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                                 e.currentTarget.style.boxShadow = '0 5px 15px rgba(99, 102, 241, 0.3)';
                                             }}>
                                                 <i className="mdi mdi-cart me-2"></i>
                                                Satın Al
                                            </button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section id="demo" className="py-5 position-relative" style={{
                background: 'linear-gradient(135deg, #DBEAFE 0%, #E0E7FF 30%, #EDE9FE 70%, #F3E8FF 100%)',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated background elements */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }}></div>
                
                <div className="container position-relative" style={{zIndex: 1}}>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <ScrollReveal>
                                <div className="mb-4">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-lg mb-4" style={{
                                        width: '120px',
                                        height: '120px',
                                        margin: '0 auto',
                                        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                                        animation: 'pulse 2s infinite'
                                    }}>
                                        <Icon icon="mdi:play-circle" style={{fontSize: '5rem', color: '#6366F1'}} />
                                    </div>
                                </div>
                                <span className="badge bg-white px-4 py-2 rounded-pill mb-3" style={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    color: '#6366F1',
                                    boxShadow: '0 5px 20px rgba(99, 102, 241, 0.25)'
                                }}>
                                    <i className="mdi mdi-gift me-2"></i>
                                    ÜCRETSİZ DENEME
                                </span>
                                <h2 className="fw-bold mb-4" style={{
                                    fontSize: '3.5rem',
                                    color: '#4338CA',
                                    lineHeight: '1.2'
                                }}>
                                    Sistemi Ücretsiz Deneyin
                                </h2>
                                <p className="mb-5 mx-auto" style={{
                                    fontSize: '1.3rem',
                                    lineHeight: '1.8',
                                    maxWidth: '700px',
                                    color: '#6366F1',
                                    opacity: 0.9
                                }}>
                                    Demo hesabımızla sistemimizi inceleyin ve tüm özelliklerimizi keşfedin.
                                    Hiçbir kredi kartı bilgisi gerektirmez, anında başlayın!
                                </p>
                                <div className="d-flex justify-content-center gap-4 flex-wrap">
                                    <button className="btn btn-lg px-5 py-3 rounded-pill shadow-lg fw-bold text-white" style={{
                                        fontSize: '1.1rem',
                                        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                                        border: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)';
                                    }}>
                                        <i className="mdi mdi-play-circle me-2"></i>
                                        Demo'yu Başlat
                                    </button>
                                    <button className="btn btn-lg px-5 py-3 rounded-pill fw-bold" style={{
                                        fontSize: '1.1rem',
                                        background: 'white',
                                        color: '#6366F1',
                                        border: '2px solid #6366F1',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#6366F1';
                                        e.currentTarget.style.color = 'white';
                                        e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.color = '#6366F1';
                                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(99, 102, 241, 0.2)';
                                    }}>
                                        <i className="mdi mdi-information me-2"></i>
                                        Daha Fazla Bilgi
                                    </button>
                                </div>
                                <div className="mt-5 pt-4">
                                    <div className="row g-4">
                                        <div className="col-md-4">
                                            <div className="text-center">
                                                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    boxShadow: '0 5px 20px rgba(99, 102, 241, 0.25)'
                                                }}>
                                                    <Icon icon="mdi:clock-fast" style={{fontSize: '2rem', color: '#6366F1'}} />
                                                </div>
                                                <h5 className="fw-bold mb-2" style={{color: '#4338CA'}}>Hızlı Kurulum</h5>
                                                <p className="mb-0" style={{fontSize: '0.95rem', color: '#6366F1', opacity: 0.9}}>5 dakikada başlayın</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-center">
                                                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    boxShadow: '0 5px 20px rgba(99, 102, 241, 0.25)'
                                                }}>
                                                    <Icon icon="mdi:shield-check" style={{fontSize: '2rem', color: '#6366F1'}} />
                                                </div>
                                                <h5 className="fw-bold mb-2" style={{color: '#4338CA'}}>Güvenli</h5>
                                                <p className="mb-0" style={{fontSize: '0.95rem', color: '#6366F1', opacity: 0.9}}>Blockchain güvenliği</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-center">
                                                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    boxShadow: '0 5px 20px rgba(99, 102, 241, 0.25)'
                                                }}>
                                                    <Icon icon="mdi:headset" style={{fontSize: '2rem', color: '#6366F1'}} />
                                                </div>
                                                <h5 className="fw-bold mb-2" style={{color: '#4338CA'}}>7/24 Destek</h5>
                                                <p className="mb-0" style={{fontSize: '0.95rem', color: '#6366F1', opacity: 0.9}}>Her zaman yanınızdayız</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollTop />
        </>
    );
}

