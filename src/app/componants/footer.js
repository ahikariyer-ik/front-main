'use client';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <p>© 2025 AhiKurumsal | Tüm Hakları Saklıdır.</p>
                    </div>
                    <div className="footer-right">
                        <Link href="/privacy">Gizlilik Politikası</Link>
                        <span className="separator">–</span>
                        <Link href="/iletisim">İletişim</Link>
                        <span className="separator">–</span>
                        <Link href="/demo">Demo Talebi</Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer {
                    background: #f1f5f9;
                    padding: 2rem 0;
                    border-top: 1px solid #e5e7eb;
                }

                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .footer-left p {
                    margin: 0;
                    color: #666;
                    font-size: 0.95rem;
                }

                .footer-right {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }

                .footer-right a {
                    color: #1e3a5f;
                    text-decoration: none;
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                .footer-right a:hover {
                    color: #0f1e3a;
                    text-decoration: underline;
                }

                .separator {
                    color: #666;
                }

                @media (max-width: 768px) {
                    .footer-content {
                        flex-direction: column;
                        text-align: center;
                    }

                    .footer-left,
                    .footer-right {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </footer>
    );
}
