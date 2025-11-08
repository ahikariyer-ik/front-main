import React from 'react';
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../componants/navbar'));
const Footer = dynamic(() => import('../componants/footer'));

export const metadata = {
    title: 'Fiyatlandırma | AHİ-İK 360',
    description: 'AHİ-İK 360 İnsan Kaynakları Yönetim Sistemi fiyatlandırma planları'
};

export default function FiyatlandirmaPage() {
    return (
        <>
            <Navbar navClass="defaultscroll sticky" logolight={true} menuClass="navigation-menu nav-left nav-light" />

            <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url('/images/hero/bg4.jpg')`, backgroundPosition:'center'}}>
                <div className="bg-overlay bg-gradient-overlay-2"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Fiyatlandırma Planları</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center mb-4 pb-2">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">İhtiyacınıza Uygun Planı Seçin</h4>
                                <p className="text-muted para-desc mx-auto mb-0">
                                    Çalışan sayınıza göre uygun paketi seçin ve insan kaynakları yönetiminizi dijitalleştirin
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 mt-4 pt-2">
                            <div className="card pricing pricing-primary border-0 p-4 rounded-md shadow">
                                <div className="card-body p-0">
                                    <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">Plan 1</span>
                                    <h2 className="fw-bold mt-3 mb-0">0-10 Çalışan</h2>
                                    <p className="text-muted">Küçük işletmeler için ideal</p>

                                    <div className="d-flex justify-content-center mt-4">
                                        <span className="price h1 mb-0">₺</span>
                                        <span className="h1 mb-0">2.000</span>
                                        <span className="align-self-end mb-1">/ay</span>
                                    </div>

                                    <ul className="list-unstyled mt-4 mb-0 ps-0">
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Tüm modüller dahil</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>10 çalışan kapasitesi</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Email desteği</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Çalışan yönetimi</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>İzin takip sistemi</li>
                                    </ul>

                                    <div className="mt-4">
                                        <Link href="/demo" className="btn btn-primary w-100">Demo İsteyin</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-4 pt-2">
                            <div className="card pricing pricing-primary border-0 p-4 rounded-md shadow">
                                <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Popüler</span></div>
                                <div className="card-body p-0">
                                    <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">Plan 2</span>
                                    <h2 className="fw-bold mt-3 mb-0">10-40 Çalışan</h2>
                                    <p className="text-muted">Orta ölçekli işletmeler için</p>

                                    <div className="d-flex justify-content-center mt-4">
                                        <span className="price h1 mb-0">₺</span>
                                        <span className="h1 mb-0">4.000</span>
                                        <span className="align-self-end mb-1">/ay</span>
                                    </div>

                                    <ul className="list-unstyled mt-4 mb-0 ps-0">
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Tüm modüller dahil</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>40 çalışan kapasitesi</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Öncelikli destek</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Özel eğitim</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Görev yönetimi</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Raporlama araçları</li>
                                    </ul>

                                    <div className="mt-4">
                                        <Link href="/demo" className="btn btn-primary w-100">Demo İsteyin</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-4 pt-2">
                            <div className="card pricing pricing-primary border-0 p-4 rounded-md shadow">
                                <div className="card-body p-0">
                                    <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">Plan 3</span>
                                    <h2 className="fw-bold mt-3 mb-0">40-1000 Çalışan</h2>
                                    <p className="text-muted">Büyük işletmeler için</p>

                                    <div className="d-flex justify-content-center mt-4">
                                        <span className="price h1 mb-0">₺</span>
                                        <span className="h1 mb-0">6.000</span>
                                        <span className="align-self-end mb-1">/ay</span>
                                    </div>

                                    <ul className="list-unstyled mt-4 mb-0 ps-0">
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Tüm modüller dahil</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>1.000 çalışan kapasitesi</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>7/24 destek</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Özel eğitim ve danışmanlık</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Gelişmiş raporlama</li>
                                        <li className="text-muted mb-0"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>API entegrasyonu</li>
                                    </ul>

                                    <div className="mt-4">
                                        <Link href="/demo" className="btn btn-primary w-100">Demo İsteyin</Link>
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
