'use client';
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import Footer from "./componants/footer";
import Navbar from "./componants/navbar";
import ScrollTop from "./componants/scrollTop";

const moduleHighlights = [
    {
        title: 'Dijital Özlük Dosyaları',
        description: 'Çalışanların tüm özlük bilgileri bulut tabanlı güvenli ortamda. Sözleşmeler, belgeler, eğitim kayıtları tek tıkla erişilebilir. KVKK uyumlu veri yönetimi ile tam denetim.',
        icon: 'mdi:folder-account',
        color: '#10b981',
    },
    {
        title: 'PDKS - Personel Devam Takip',
        description: 'QR kod teknolojisi ile temasız giriş-çıkış takibi. Gerçek zamanlı izleme, otomatik raporlama ve yapay zeka destekli anomali tespiti. Mesai ve vardiya yönetimi entegre.',
        icon: 'mdi:qrcode-scan',
        color: '#ef4444',
    },
    {
        title: 'Kıdem ve İhbar Tazminatı',
        description: 'Çalışan kıdemleri otomatik hesaplanır. İhbar ve kıdem tazminatı takibi anlık güncellenir. Yasal değişiklikler sistemde otomatik yansır, raporlama tek tıkla.',
        icon: 'mdi:calculator-variant',
        color: '#6366F1',
    },
    {
        title: 'Dijital İK Merkezi',
        description: 'Çalışan yaşam döngüsünü uçtan uca planlayın. İşe alımdan ayrışa kadar her adım tek kronolojide. Onay akışları ve süreç otomasyonları hazır.',
        icon: 'mdi:robot',
        color: '#3b82f6',
    },
    {
        title: 'İzin Takip Sistemi',
        description: 'İzin hakedişleri otomatik hesaplanır. Onay akışlarını şeffaf biçimde tüm ekip takip eder. Yıllık izin, mazeret ve raporlu izin yönetimi entegre.',
        icon: 'mdi:calendar-check',
        color: '#0ea5e9',
    },
    {
        title: 'Performans ve Hedef Yönetimi',
        description: 'Bireysel ve takım hedeflerini tanımlayın. Performans değerlendirmelerini standartlaştırın. OKR ve KPI takibi ile sürekli gelişimi destekleyin.',
        icon: 'mdi:target',
        color: '#8b5cf6',
    },
];

const experienceHighlights = [
    {
        title: 'Gerçek Zamanlı İçgörüler',
        description: 'AHİ-İK 360 panoları, çalışan devamsızlık, izin ve performans metriklerini anlık olarak günceller.',
    },
    {
        title: 'Rol Bazlı Deneyim',
        description: 'Yöneticiler, İK uzmanları ve ekip liderleri için kişiselleştirilebilir widget’lar ile net ekranlar.',
    },
    {
        title: 'Mobil Öncelikli Erişim',
        description: 'iOS, Android ve web arayüzlerinde 1 saniyenin altındaki açılış süreleriyle kesintisiz kullanım.',
    },
];

const promiseStats = [
    { label: 'İşten Çıkış Süreçlerinde Tasarruf', value: '%58' },
    { label: 'İzin Onay Yanıt Süresi', value: '3 saat' },
    { label: 'Aktif Kullanıcı Memnuniyeti', value: '%94' },
];

export default function Index() {
    return (
        <>
            <Navbar navClass="defaultscroll sticky" navLight={true}/>

            <main>
                <section
                    className="py-5 py-lg-5 position-relative overflow-hidden text-white"
                    style={{
                        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #312E81 100%)',
                    }}
                >
                    <div className="container">
                        <div className="row align-items-center justify-content-between g-5">
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <span className="badge bg-light text-dark rounded-pill px-4 py-2">
                                        Yeni Nesil Bulut Tabanlı İK Platformu
                                    </span>
                                </div>
                                <h1 className="display-5 fw-semibold mb-4">
                                    Modern İnsan Kaynakları Deneyimini hızlandırın
                                </h1>
                                <p className="fs-5 text-white-50 mb-4">
                                    AHİ-İK 360, bulut tabanlı mimarisi ile tüm İK operasyonlarını tek bir akıllı kontrol panelinde toplar.
                                    İşe alımdan PDKS'ye, bordrodan performansa kadar tüm süreçler otomatik beslenen veri katmanı sayesinde
                                    anlık olarak güncellenir.
                                </p>
                                <ul className="list-unstyled text-white-50 mb-4">
                                    <li className="d-flex align-items-start mb-2">
                                        <Icon icon="mdi:check-circle" className="me-2 mt-1" style={{ fontSize: '1.25rem' }} />
                                        <span>Modüler akış tasarımcısı ile kod yazmadan iş kuralları tanımlayın</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <Icon icon="mdi:check-circle" className="me-2 mt-1" style={{ fontSize: '1.25rem' }} />
                                        <span>PDKS QR kod, izin ve bordro verilerini tek zaman çizelgesinde eşitleyin</span>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <Icon icon="mdi:check-circle" className="me-2 mt-1" style={{ fontSize: '1.25rem' }} />
                                        <span>Rol bazlı dashboard'lar ile yöneticilere ve İK ekiplerine kişiselleştirilmiş içgörüler sunun</span>
                                    </li>
                                </ul>
                                <div className="d-flex flex-wrap gap-3">
                                    <Link href="/demo" className="btn btn-light btn-lg px-4">
                                        Hemen Deneyimleyin
                                    </Link>
                                    <Link href="/fiyatlandirma" className="btn btn-outline-light btn-lg px-4">
                                        Planları Keşfedin
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div
                                    className="rounded-4 shadow-lg p-4 p-lg-5 position-relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(14,165,233,0.25) 0%, rgba(59,130,246,0.25) 50%, rgba(99,102,241,0.3) 100%)',
                                        border: '1px solid rgba(148, 163, 184, 0.2)'
                                    }}
                                >
                                    <div
                                        className="position-absolute rounded-circle"
                                        style={{
                                            width: '280px',
                                            height: '280px',
                                            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 65%)',
                                            top: '-120px',
                                            right: '-80px'
                                        }}
                                    ></div>
                                    <div className="position-relative">
                                        <span className="badge bg-white text-primary fw-semibold px-4 py-2 rounded-pill">
                                            AHİ-İK 360 • Anlık Veri Akışı
                                        </span>
                                        <h3 className="text-white fw-semibold mt-4 mb-4">AHİ-İK 360'ın Temel Özellikleri</h3>
                                        <div className="d-grid gap-3">
                                            <div className="d-flex align-items-center bg-white bg-opacity-90 rounded-3 p-3">
                                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                                                    <Icon icon="mdi:file-document-check" style={{ fontSize: '2rem', color: '#10b981' }} />
                                                </div>
                                                <div>
                                                    <p className="text-dark fw-semibold mb-1">Dijital Özlük Dosyaları</p>
                                                    <p className="text-muted mb-0 small">Çalışanların tüm bilgileri güvenli bulutta, anında erişim.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center bg-white bg-opacity-90 rounded-3 p-3">
                                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                                                    <Icon icon="mdi:qrcode-scan" style={{ fontSize: '2rem', color: '#ef4444' }} />
                                                </div>
                                                <div>
                                                    <p className="text-dark fw-semibold mb-1">PDKS QR Kod Sistemi</p>
                                                    <p className="text-muted mb-0 small">Temasız giriş-çıkış, gerçek zamanlı takip ve raporlama.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center bg-white bg-opacity-90 rounded-3 p-3">
                                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                                                    <Icon icon="mdi:calculator-variant" style={{ fontSize: '2rem', color: '#6366f1' }} />
                                                </div>
                                                <div>
                                                    <p className="text-dark fw-semibold mb-1">Kıdem ve İhbar Tazminatı</p>
                                                    <p className="text-muted mb-0 small">Otomatik hesaplama, anlık takip ve raporlama sistemi.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-white">
                    <div className="container">
                        <div className="row justify-content-between align-items-end mb-5">
                            <div className="col-lg-7">
                                <h2 className="fw-semibold mb-3">AHİ-İK 360'ın Güçlü Modülleriyle Tanışın</h2>
                                <p className="text-muted mb-0">
                                    Dijital özlük dosyalarından PDKS'ye, kıdem tazminatı takibinden performans yönetimine kadar
                                    tüm İK süreçlerinizi hızlandıran modern modüllerimizi keşfedin. Her modül, işinizi kolaylaştırmak 
                                    için tasarlandı.
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                                <Link href="/insan-kaynaklari" className="btn btn-primary px-4">
                                    Tüm Modülleri İncele
                                </Link>
                            </div>
                        </div>

                        <div className="row g-4">
                            {moduleHighlights.map((item) => (
                                <div key={item.title} className="col-md-6 col-xl-4">
                                    <div className="card h-100 border-0 shadow-sm" style={{transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '';
                                        }}>
                                        <div className="position-relative d-flex align-items-center justify-content-center" style={{
                                            minHeight: '280px',
                                            background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}30 100%)`,
                                            borderTopLeftRadius: 'calc(0.375rem - 1px)',
                                            borderTopRightRadius: 'calc(0.375rem - 1px)'
                                        }}>
                                            <Icon 
                                                icon={item.icon} 
                                                style={{
                                                    fontSize: '8rem',
                                                    color: item.color,
                                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                                                }}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="fw-semibold mb-2">{item.title}</h5>
                                            <p className="text-muted mb-0">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section" style={{ backgroundColor: '#f5f7fb' }}>
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <div
                                    className="rounded-4 position-relative overflow-hidden shadow-sm p-5"
                                    style={{
                                        background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 45%, #C7D2FE 100%)',
                                        border: '1px solid rgba(99, 102, 241, 0.15)'
                                    }}
                                >
                                    <div
                                        className="position-absolute rounded-circle"
                                        style={{
                                            width: '280px',
                                            height: '280px',
                                            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
                                            top: '-80px',
                                            right: '-80px'
                                        }}
                                    ></div>
                                    <div className="position-relative">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-white shadow-lg rounded-4 p-4">
                                            <Icon
                                                icon="mdi:monitor-dashboard"
                                                style={{
                                                    fontSize: '4.5rem',
                                                    color: '#4F46E5'
                                                }}
                                            />
                                        </div>
                                        <h3 className="fw-bold text-primary mt-4 mb-3">AHİ-İK 360 Deneyim Merkezi</h3>
                                        <p className="text-muted mb-4">
                                            Modüller arası tek tıklama ile geçiş, rol bazlı görünümler ve gerçek zamanlı veri akışıyla
                                            ekibiniz en güncel bilgiye anında ulaşır. Sezgisel arayüz, 7/24 erişilebilirlik ve yüksek
                                            performans puanları sunar.
                                        </p>
                                        <ul className="list-unstyled mb-0 text-muted">
                                            <li className="d-flex align-items-start mb-3">
                                                <Icon icon="mdi:flash" className="me-3 mt-1" style={{ color: '#6366F1', fontSize: '1.5rem' }} />
                                                <span>Ön-belleğe alınmış kritik panolar sayesinde 1 saniyenin altındaki yükleme süreleri.</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-3">
                                                <Icon icon="mdi:account-tie" className="me-3 mt-1" style={{ color: '#4F46E5', fontSize: '1.5rem' }} />
                                                <span>Yönetici, İK ve çalışan rollerine özel dashboard şablonları.</span>
                                            </li>
                                            <li className="d-flex align-items-start">
                                                <Icon icon="mdi:shield-check" className="me-3 mt-1" style={{ color: '#4338CA', fontSize: '1.5rem' }} />
                                                <span>KVKK uyumlu veri akışı ve detaylı giriş-çıkış logları ile tam denetim.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span className="text-uppercase text-primary fw-semibold">Kullanıcı Deneyimi</span>
                                <h2 className="fw-semibold mt-3 mb-4">
                                    AHİ-İK 360, ekibinizin tüm ekranlarında sezgisel ve hız odaklı bir deneyim sunar.
                                </h2>
                                <p className="text-muted mb-4">
                                    Bulut altyapısı, canlı veriler ve modüler tasarım sayesinde İK süreçleri tek panelde birleşir.
                                    Yetkilendirme seviyelerine göre içerik otomatik güncellenir, çalışanlar ihtiyaç duydukları
                                    bilgiye saniyeler içinde ulaşır.
                                </p>
                                <div className="row g-4">
                                    {experienceHighlights.map((item) => (
                                        <div key={item.title} className="col-sm-6">
                                            <div className="h-100">
                                                <h5 className="fw-semibold mb-2">{item.title}</h5>
                                                <p className="text-muted mb-0">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-white">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="fw-semibold mb-3">İK ekibinizin her sorusu için hazır panolar</h2>
                                <p className="text-muted mb-0">
                                    Dijital bordro upload’larından, çıkış görüşme notlarına kadar her şey bulut üzerinde tutulur.
                                    Şube ve departman sekmelerine tek tıkla geçerek filtreleyin, raporları XLSX olarak dışa aktarın.
                                </p>
                            </div>
                        </div>

                        <div className="row g-4">
                            {promiseStats.map((item) => (
                                <div key={item.label} className="col-md-4">
                                    <div className="bg-dark text-white rounded-4 p-4 p-lg-5 h-100 d-flex flex-column justify-content-between">
                                        <h3 className="display-6 fw-semibold mb-3">{item.value}</h3>
                                        <p className="mb-0 text-white-50">{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section" style={{ backgroundColor: '#0f172a' }}>
                    <div className="container">
                        <div className="row align-items-center g-5 text-white">
                            <div className="col-lg-6">
                                <h2 className="fw-semibold mb-3">AHİ-İK 360 ile Tüm İK Süreçlerini Dijitalleştirin</h2>
                                <p className="text-white-50 mb-4">
                                    Dijital özlük dosyalarından PDKS'ye, kıdem tazminatı hesaplamalarından performans yönetimine kadar
                                    tüm İK operasyonlarınızı tek platformda yönetin. Yapay zeka destekli otomasyonlar ve akıllı 
                                    raporlama ile verimliliğinizi katlamaya hazır olun.
                                </p>
                                <ul className="list-unstyled text-white-50 mb-4">
                                    <li className="mb-2">•  Çalışan özlük dosyaları bulutta güvenle saklanır, KVKK uyumlu erişim kontrolü</li>
                                    <li className="mb-2">•  QR kod tabanlı PDKS sistemi ile temasız devam takibi ve otomatik raporlama</li>
                                    <li className="mb-2">•  Kıdem ve ihbar tazminatları otomatik hesaplanır, yasal güncellemeler anında yansır</li>
                                </ul>
                                <Link href="/iletisim" className="btn btn-light px-4">
                                    İK Ekibinizle Tanıştırın
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <div
                                    className="rounded-4 p-4 shadow-lg position-relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(15,118,110,0.35) 0%, rgba(16,185,129,0.25) 50%, rgba(59,130,246,0.25) 100%)'
                                    }}
                                >
                                    <div
                                        className="position-absolute rounded-circle"
                                        style={{
                                            width: '240px',
                                            height: '240px',
                                            background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)',
                                            bottom: '-70px',
                                            right: '-70px'
                                        }}
                                    ></div>
                                    <div className="position-relative">
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <div className="bg-white rounded-3 p-3 d-flex align-items-center">
                                                    <div className="rounded-circle bg-success bg-opacity-10 p-3 me-3">
                                                        <Icon icon="mdi:rocket-launch" style={{ fontSize: '2rem', color: '#0ea5e9' }} />
                                                    </div>
                                                    <div>
                                                        <p className="text-dark fw-semibold mb-1">99.95% Uptime</p>
                                                        <p className="text-muted mb-0 small">Sunucu tarafı render ile kesintisiz erişim.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="bg-white rounded-3 p-3 d-flex align-items-center">
                                                    <div className="rounded-circle bg-success bg-opacity-10 p-3 me-3">
                                                        <Icon icon="mdi:timeline-clock" style={{ fontSize: '2rem', color: '#22c55e' }} />
                                                    </div>
                                                    <div>
                                                        <p className="text-dark fw-semibold mb-1">Önceden çizilen kritik içerikler</p>
                                                        <p className="text-muted mb-0 small">Lazy-loading yerine stratejik preload.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="bg-white rounded-3 p-3 d-flex align-items-center">
                                                    <div className="rounded-circle bg-success bg-opacity-10 p-3 me-3">
                                                        <Icon icon="mdi:lock-check" style={{ fontSize: '2rem', color: '#14b8a6' }} />
                                                    </div>
                                                    <div>
                                                        <p className="text-dark fw-semibold mb-1">KVKK uyumlu içerik yönetimi</p>
                                                        <p className="text-muted mb-0 small">Veri maskeleme ve erişim logları hazır.</p>
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

                <section className="section bg-white">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <h2 className="fw-semibold mb-3">Tüm modülleri kaydırarak deneyimleyin</h2>
                                <p className="text-muted mb-4">
                                    Çalışanlar, işten ayrılanlar, izin takip sistemi, görev yönetimi, şubelerim, departmanlarım...
                                    Hepsi modern bir hikâye akışıyla ziyaretçilere tanıtılır.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link href="/demo" className="btn btn-primary px-4">
                                        Canlı Demo Talep Et
                                    </Link>
                                    <Link href="/hakkimizda" className="btn btn-outline-secondary px-4">
                                        Neden AHİ-İK 360?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
            <ScrollTop/>
        </>
    );
}
