'use client';

export default function KurumModulleri() {
    const modulleri = [
        {
            icon: (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Kurumlarım",
            description: "Kurum bilgilerini, faaliyet raporlarını ve imza sirkülerini tek yerde yönetin."
        },
        {
            icon: (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Konutlarım",
            description: "Gayrimenkul fotoğrafları, tapu ve DASK belgelerini dijital ortamda saklayın."
        },
        {
            icon: (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V11L18 7H13V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V11L5 7H10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="15.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
            ),
            title: "Araçlarım",
            description: "Kuruma ait araçların plaka, muayene, sigorta bilgilerini kaydedin."
        },
        {
            icon: (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Kararlar",
            description: "Yönetim kararlarını PDF olarak yükleyin ve kurum bazlı filtreleyin."
        },
        {
            icon: (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H16L13 21L8 3L5 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3H22V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 3L13 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Gelen Evraklar",
            description: "Kurumunuza gelen evrakları kolayca arşivleyin."
        },
        {
            icon: (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H16L13 3L8 21L5 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3H2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 3L11 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Giden Evraklar",
            description: "Gönderilen belgeleri kaydedin, PDF ekleyin ve takibini yapın."
        }
    ];

    return (
        <section id="modulleri" className="modules-section">
            <div className="container">
                <div className="section-header">
                    <h2>Kurum Yönetimi Modülleri</h2>
                    <p>Vakıf, dernek veya kurum süreçlerinizi dijitalleştirin.</p>
                </div>

                <div className="modules-grid">
                    {modulleri.map((modul, index) => (
                        <div key={index} className="module-card">
                            <div className="module-icon">
                                {modul.icon}
                            </div>
                            <h3>{modul.title}</h3>
                            <p>{modul.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .modules-section {
                    background: white;
                    padding: 100px 0;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
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

                .modules-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .module-card {
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 16px;
                    padding: 2.5rem;
                    text-align: center;
                }

                .module-card:hover {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                }

                .module-icon {
                    color: #1e3a5f;
                    margin-bottom: 1.5rem;
                    display: flex;
                    justify-content: center;
                }

                .module-card h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #1e3a5f;
                    margin-bottom: 1rem;
                }

                .module-card p {
                    font-size: 1rem;
                    color: #666;
                    line-height: 1.6;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .modules-section {
                        padding: 60px 0;
                    }

                    .section-header h2 {
                        font-size: 2rem;
                    }

                    .modules-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
}

