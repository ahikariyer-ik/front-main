export const dynamic = 'force-dynamic';
import Image from "next/image";
import Link from "next/link";
import { fetchServices } from '@/api/services';
import { fetchJobListings } from '@/api/job-listing';
import { Icon } from "@iconify/react";

import Footer from "./componants/footer";
import Navbar from "./componants/navbar";
import ScrollTop from "./componants/scrollTop";
import HeroTabs from "./componants/heroTabs";

import { FiClock, FiMapPin } from "./assets/icons/vander";

export async function generateMetadata() {
    return {
        title: 'AHİ-İK 360 | İnsan Kaynakları Yönetim Sistemi',
        description: 'Dijital İK çözümleri ile işletmenizin insan kaynakları süreçlerini kolayca yönetin. Çalışan takibi, izin yönetimi, görev atama ve daha fazlası.',
        keywords: 'insan kaynakları, İK yazılımı, çalışan takibi, izin yönetimi, bordro, İK 360',
        robots: 'index, follow',
        openGraph: {
            title: 'AHİ-İK 360 | İnsan Kaynakları Yönetim Sistemi',
            description: 'Dijital İK çözümleri ile işletmenizin insan kaynakları süreçlerini kolayca yönetin.',
            type: 'website',
            locale: 'tr_TR',
        },
    };
}

export default async function Index(){
    const services = await fetchServices();

    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>

        {/* Hero Section */}
        <section className="bg-half-260 d-table w-100" style={{backgroundImage:'url("/images/hero/bg.jpg")'}}>
            <div className="bg-overlay" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(99, 102, 241, 0.9) 50%, rgba(139, 92, 246, 0.9) 100%)'}}></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="title-heading">
                            <h1 className="heading mb-3">
                                <span
                                    className="d-inline-flex justify-content-center align-items-center bg-primary text-white px-5 py-3 rounded-4 shadow-sm"
                                    style={{ textTransform: 'none', letterSpacing: '0.08em' }}
                                >
                                    ahi-İK 360
                                </span>
                            </h1>
                            <h4 className="text-white-50 mb-4">İnsan Kaynakları Yönetim Sistemi</h4>
                            <p className="para-desc mx-auto text-white-50">
                                İşletmenizin tüm İK süreçlerini tek platformdan yönetin. Dijital çözümlerle zamandan tasarruf edin, verimliliği artırın.
                            </p>
                            <div className="mt-4 pt-2">
                                <Link href="/demo" className="btn btn-light me-2">
                                    <i className="mdi mdi-play-circle me-1"></i> Demo İzle
                                </Link>
                                <Link href="/satin-al" className="btn btn-outline-light">
                                    <i className="mdi mdi-cart me-1"></i> Satın Al
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        {/* Özellikler */}
        <section className="section">
            <div className="container">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Neden AHİ-İK 360?</h4>
                            <p className="text-muted para-desc mx-auto mb-0">
                                İşletmenizin insan kaynakları süreçlerini dijitalleştirin, zamandan ve maliyetten tasarruf edin
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card border-0 text-center features feature-clean">
                            <div className="icons text-primary text-center mx-auto">
                                <i className="mdi mdi-account-multiple d-block rounded h3 mb-0"></i>
                            </div>
                            <div className="card-body p-0 mt-4">
                                <h5 className="title">Çalışan Yönetimi</h5>
                                <p className="text-muted mb-0">Tüm çalışanlarınızı tek panelden yönetin. Excel ile toplu ekleme, özlük dosyaları ve daha fazlası.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card border-0 text-center features feature-clean">
                            <div className="icons text-primary text-center mx-auto">
                                <i className="mdi mdi-calendar-check d-block rounded h3 mb-0"></i>
                            </div>
                            <div className="card-body p-0 mt-4">
                                <h5 className="title">İzin Takip Sistemi</h5>
                                <p className="text-muted mb-0">Çalışanlarınızın izin taleplerini kolayca yönetin. Otomatik izin hesaplama ve onay süreçleri.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card border-0 text-center features feature-clean">
                            <div className="icons text-primary text-center mx-auto">
                                <i className="mdi mdi-clipboard-list d-block rounded h3 mb-0"></i>
                            </div>
                            <div className="card-body p-0 mt-4">
                                <h5 className="title">Görev Yönetimi</h5>
                                <p className="text-muted mb-0">Çalışanlarınıza görev atayın, ilerleyişi takip edin. Tekrarlayan görevler ve hatırlatmalar.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card border-0 text-center features feature-clean">
                            <div className="icons text-primary text-center mx-auto">
                                <i className="mdi mdi-file-document d-block rounded h3 mb-0"></i>
                            </div>
                            <div className="card-body p-0 mt-4">
                                <h5 className="title">Dijital Özlük Dosyaları</h5>
                                <p className="text-muted mb-0">Çalışan belgelerini dijital ortamda saklayın. WhatsApp ile kolay belge yükleme.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card border-0 text-center features feature-clean">
                            <div className="icons text-primary text-center mx-auto">
                                <i className="mdi mdi-chart-line d-block rounded h3 mb-0"></i>
                            </div>
                            <div className="card-body p-0 mt-4">
                                <h5 className="title">Raporlama ve İstatistikler</h5>
                                <p className="text-muted mb-0">Departman ve şube bazlı detaylı raporlar. Görselleştirilmiş istatistikler ve analizler.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card border-0 text-center features feature-clean">
                            <div className="icons text-primary text-center mx-auto">
                                <i className="mdi mdi-calculator d-block rounded h3 mb-0"></i>
                            </div>
                            <div className="card-body p-0 mt-4">
                                <h5 className="title">Tazminat Hesaplama</h5>
                                <p className="text-muted mb-0">Kıdem ve ihbar tazminatını otomatik hesaplayın. Net maaş üzerinden hassas hesaplama.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fiyatlandırma CTA */}
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Fiyatlandırma Planları</h4>
                            <p className="text-muted para-desc mx-auto mb-4">
                                Çalışan sayınıza göre uygun paketi seçin ve işletmenizi dijitalleştirin
                            </p>
                            <Link href="/fiyatlandirma" className="btn btn-primary btn-lg">Planları İncele</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        <ScrollTop/>
        </>
    )
}
