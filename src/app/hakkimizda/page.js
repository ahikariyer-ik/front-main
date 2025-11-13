export const dynamic = 'force-dynamic';
import Link from "next/link";
import { fetchServices } from '@/api/services';
import { Icon } from "@iconify/react";
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import ScrollTop from "../componants/scrollTop";
import { FiHelpCircle } from "../assets/icons/vander";
import {fetchAboutPage} from "@/api/about-us";

export async function generateMetadata() {
  return {
    title: 'Hakkımızda | AhiKurumsal - Dijital İnsan Kaynakları Yönetimi',
    description: 'AhiKurumsal, işletmelerin dijital dönüşümünü kolaylaştırmak ve insan kaynakları yönetimini daha verimli hale getirmek amacıyla geliştirilmiş yenilikçi bir kurumsal yönetim platformudur.',
    keywords: 'ahikurumsal, hakkımızda, kurumsal yönetim, insan kaynakları, dijital dönüşüm, KOBİ, KVKK, personel takibi',
    robots: 'index, follow',
    openGraph: {
      title: 'Hakkımızda | AhiKurumsal',
      description: 'AhiKurumsal ile kurumunuzu dijital geleceğe taşıyın. KOBİ dostu fiyatlandırma ve güçlü yönetim altyapısı.',
      type: 'website',
      locale: 'tr_TR',
    },
    alternates: {
      canonical: '/hakkimizda',
    },
  };
}

export default async function Hakkimizda() {
  let aboutPage = null;
  try {
    aboutPage = await fetchAboutPage();
  } catch (error) {
    console.error('About page fetch error:', error);
  }
  
  const services = await fetchServices();

  return (
    <>
      <Navbar navClass="defaultscroll sticky" navLight={true} />
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url('/images/hero/bg.jpg')", backgroundPosition: 'top' }}
      >
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  Hakkımızda
                </h5>
              </div>
            </div>
          </div>
          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item"><Link href="/">Ahikurumsal</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Hakkımızda</li>
              </ul>
            </nav>
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

      <section className="section">
        <div className="container">
          {/* Ana Tanıtım Bölümü */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-5 pb-2">
                <h4 className="title mb-4">AhiKurumsal Nedir?</h4>
                <p className="text-muted para-desc mb-4 mx-auto" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  AhiKurumsal, işletmelerin dijital dönüşümünü kolaylaştırmak ve insan kaynakları yönetimini daha verimli hale getirmek amacıyla geliştirilmiş yenilikçi bir kurumsal yönetim platformudur.
                </p>
                <p className="text-muted para-desc mb-0 mx-auto" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  KOBİ'lerden vakıf ve derneklere kadar geniş bir yelpazedeki kurumlara, kullanıcı dostu arayüzü ve uygun maliyetli çözümleriyle dijital bir yönetim deneyimi sunar.
                </p>
              </div>
            </div>
          </div>

          {/* Özellikler Kartları */}
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary explore-feature border-0 rounded text-center shadow h-100">
                <div className="card-body">
                  <div className="icon rounded-circle shadow-lg d-inline-block mx-auto" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon icon="solar:shield-check-bold" style={{ fontSize: '40px', color: 'white' }} />
                  </div>
                  <div className="mt-4">
                    <h5 className="mb-3">KVKK Uyumlu Sistem</h5>
                    <p className="text-muted">QR kod ile giriş-çıkış sistemi, personel izin ve görev yönetimi ile tam KVKK uyumu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary explore-feature border-0 rounded text-center shadow h-100">
                <div className="card-body">
                  <div className="icon rounded-circle shadow-lg d-inline-block mx-auto" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon icon="solar:users-group-two-rounded-bold" style={{ fontSize: '40px', color: 'white' }} />
                  </div>
                  <div className="mt-4">
                    <h5 className="mb-3">Personel Yönetimi</h5>
                    <p className="text-muted">Özlük dosyası takibi, izin yönetimi ve görev takibi tek platformda</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary explore-feature border-0 rounded text-center shadow h-100">
                <div className="card-body">
                  <div className="icon rounded-circle shadow-lg d-inline-block mx-auto" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon icon="solar:widget-5-bold" style={{ fontSize: '40px', color: 'white' }} />
                  </div>
                  <div className="mt-4">
                    <h5 className="mb-3">Dijital Süreç Yönetimi</h5>
                    <p className="text-muted">Kurum içi süreçlerin dijitalleştirilmesine yönelik gelişmiş modüller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vizyon ve Misyon */}
          <div className="row mt-5 pt-5">
            <div className="col-lg-6 col-md-6 mt-4 pt-2">
              <div className="card border-0 text-center features feature-primary feature-clean shadow p-4 h-100" style={{ background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)' }}>
                <div className="icons text-center mx-auto">
                  <Icon icon="solar:target-bold" className="d-block rounded-circle shadow" style={{ fontSize: '60px', color: '#667eea', padding: '15px', background: 'white', display: 'inline-block' }} />
                </div>
                <div className="content mt-4">
                  <h5 className="mb-3">Güvenilir İş Ortağı</h5>
                  <p className="text-muted mb-0">
                    AhiKurumsal, sadece yazılım değil, aynı zamanda işletmelerin dijitalleşme sürecinde güvenilir bir iş ortağı olmayı hedefler. Modern teknolojiyi, güvenli veri yönetimiyle birleştirerek kurumların operasyonel yükünü azaltır ve yöneticilere zaman kazandırır.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-4 pt-2">
              <div className="card border-0 text-center features feature-primary feature-clean shadow p-4 h-100" style={{ background: 'linear-gradient(135deg, #4facfe15 0%, #00f2fe15 100%)' }}>
                <div className="icons text-center mx-auto">
                  <Icon icon="solar:hand-money-bold" className="d-block rounded-circle shadow" style={{ fontSize: '60px', color: '#4facfe', padding: '15px', background: 'white', display: 'inline-block' }} />
                </div>
                <div className="content mt-4">
                  <h5 className="mb-3">KOBİ Dostu Fiyatlandırma</h5>
                  <p className="text-muted mb-0">
                    KOBİ dostu fiyat politikasıyla, her ölçekten işletmenin güçlü bir yönetim altyapısına sahip olmasını mümkün kılar. Satın almadan kullanıcı yönetimine, çalışan takibinden raporlamaya kadar tüm işlevleri tek bir ekrandan yönetebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Bölümü */}
          <div className="row mt-5 pt-5">
            <div className="col-12">
              <div className="card rounded shadow border-0" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="text-center text-lg-start">
                        <h3 className="text-white mb-3">Kurumunuzu Dijital Geleceğe Taşıyın</h3>
                        <p className="text-white-50 mb-0" style={{ fontSize: '1.1rem' }}>
                          AhiKurumsal ile kurumunuzu dijital geleceğe taşıyın. Hemen demo talep edin ve farkı görün!
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-0">
                      <div className="text-center text-lg-end">
                        <Link href="/demo" className="btn btn-light btn-lg">
                          <i className="uil uil-rocket"></i> Demo Talep Et
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center mb-5">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title mb-3">Hizmetlerimiz</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  AhiKurumsal ile kurumunuzun ihtiyacı olan tüm dijital çözümlere tek platformdan ulaşın
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {services.data?.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                <div className="position-relative features text-center p-4 rounded shadow bg-white">
                  <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                    <Icon icon={item.icon} className="fea icon-ex-md" />
                  </div>
                  <div className="mt-4">
                    <Link href={`/hizmetlerimiz/${item.slug}`} className="title h5 text-dark">
                      {item.title}
                    </Link>
                    <p className="text-muted mt-3 mb-0">{item.description}</p>
                    <div className="mt-3">
                      <Link href={`/hizmetlerimiz/${item.slug}`} className="btn btn-link primary text-dark">
                        Detayları Gör <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {aboutPage?.faqs && aboutPage.faqs.length > 0 && (
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Sıkça Sorulan Sorular</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">AhiKurumsal hakkında merak ettiğiniz her şey</p>
                </div>
            </div>
          </div>

          <div className="row mt-4 pt-2">
            {aboutPage.faqs.map((faq, index) => (
              <div className="col-md-6 col-12 mt-4 pt-2" key={index}>
                <div className="d-flex">
                  <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1" />
                  <div className="flex-1">
                    <h5 className="mt-0">{faq.question}</h5>
                    <p className="answer text-muted mb-0">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        )}

        <div className="container mt-100 mt-60">
          <div className="row mt-md-5 pt-md-3 mt-4 pt-2 justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">Bizimle İletişime Geçin</h4>
                <p className="text-muted para-desc mx-auto">Sorularınız veya demo talepleriniz için bize ulaşın, size yardımcı olmaktan mutluluk duyarız</p>
                <Link href="/iletisim" className="btn btn-primary mt-3">
                  <i className="uil uil-phone"></i> Bize Ulaşın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
