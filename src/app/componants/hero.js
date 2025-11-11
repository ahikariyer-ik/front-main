'use client';
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: '85vh' }}>
                    <div className="col-lg-7">
                        <h1 className="hero-title">
                            Dijital İnsan Kaynakları ve Kurum Yönetiminiz Bir Arada
                        </h1>
                        <p className="hero-subtitle">
                            Vakıf, dernek ve işletmeler için tasarlanmış kapsamlı yönetim yazılımı.
                            <br />
                            Tüm süreçlerinizi tek panelden yönetin.
                        </p>
                        <div className="hero-buttons">
                            <Link href="/demo" className="btn btn-primary btn-lg">
                                Demo Talep Et
                            </Link>
                            <Link href="#modulleri" className="btn btn-outline-primary btn-lg">
                                Modülleri Keşfet
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="hero-illustration">
                            <div className="illustration-wrapper">
                                <div className="icon-box">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="icon-box">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="icon-box">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-section {
                    background: linear-gradient(135deg, #1e3a5f 0%, #0f1e3a 100%);
                    color: white;
                    padding: 80px 0 40px;
                }

                .hero-title {
                    font-size: 3.5rem;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 2rem;
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    margin-bottom: 2.5rem;
                    color: rgba(255, 255, 255, 0.9);
                }

                .hero-buttons {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .btn-primary {
                    background-color: white;
                    color: #1e3a5f;
                    border: none;
                    padding: 0.875rem 2rem;
                    font-weight: 600;
                }

                .btn-primary:hover {
                    background-color: #f0f0f0;
                    color: #1e3a5f;
                }

                .btn-outline-primary {
                    background-color: transparent;
                    color: white;
                    border: 2px solid white;
                    padding: 0.875rem 2rem;
                    font-weight: 600;
                }

                .btn-outline-primary:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                    border-color: white;
                }

                .hero-illustration {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .illustration-wrapper {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                    max-width: 400px;
                }

                .icon-box {
                    background: rgba(255, 255, 255, 0.1);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    border-radius: 16px;
                    padding: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .icon-box:first-child {
                    grid-column: 1 / -1;
                    justify-self: center;
                    max-width: 200px;
                }

                @media (max-width: 991px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .hero-subtitle {
                        font-size: 1.1rem;
                    }

                    .hero-illustration {
                        margin-top: 3rem;
                    }
                }

                @media (max-width: 576px) {
                    .hero-title {
                        font-size: 2rem;
                    }

                    .hero-buttons {
                        flex-direction: column;
                    }

                    .hero-buttons .btn {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}

