import Link from "next/link";

export default function NasilCalisir() {
    const adimlar = [
        {
            number: "1",
            title: "Kurumunu oluştur",
            description: "Kurum bilgilerinizi sisteme ekleyin ve yapılandırmanızı tamamlayın."
        },
        {
            number: "2",
            title: "Modülleri aktif et",
            description: "İhtiyacınıza göre İK ve Kurum Yönetimi modüllerini aktifleştirin."
        },
        {
            number: "3",
            title: "Tüm süreçlerini dijitalleştir",
            description: "Tüm operasyonlarınızı tek panelden kolayca yönetin."
        }
    ];

    return (
        <section className="nasil-calisir-section">
            <div className="container">
                <div className="section-header">
                    <h2>Nasıl Çalışır</h2>
                </div>

                <div className="steps-container">
                    {adimlar.map((adim, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{adim.number}</div>
                            <h3>{adim.title}</h3>
                            <p>{adim.description}</p>
                        </div>
                    ))}
                </div>

                <div className="cta-button">
                    <Link href="/demo" className="btn btn-primary btn-lg">
                        Demo Talep Et
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .nasil-calisir-section {
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
                }

                .steps-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 3rem;
                    margin-bottom: 3rem;
                }

                .step-item {
                    text-align: center;
                    padding: 2rem;
                }

                .step-number {
                    width: 80px;
                    height: 80px;
                    background: #1e3a5f;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin: 0 auto 1.5rem;
                }

                .step-item h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #1e3a5f;
                    margin-bottom: 1rem;
                }

                .step-item p {
                    font-size: 1rem;
                    color: #666;
                    line-height: 1.6;
                    margin: 0;
                }

                .cta-button {
                    text-align: center;
                    margin-top: 3rem;
                }

                .btn-primary {
                    background-color: #1e3a5f;
                    color: white;
                    border: none;
                    padding: 1rem 3rem;
                    font-weight: 600;
                    border-radius: 8px;
                }

                .btn-primary:hover {
                    background-color: #152a47;
                }

                @media (max-width: 768px) {
                    .nasil-calisir-section {
                        padding: 60px 0;
                    }

                    .section-header h2 {
                        font-size: 2rem;
                    }

                    .steps-container {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}

