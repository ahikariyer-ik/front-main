export const dynamic = 'force-dynamic';
import Link from "next/link";
import { fetchContactInfo } from '@/api/contact';
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import ScrollTop from "../componants/scrollTop";
import ContactForm from "../componants/contactForm";

export async function generateMetadata() {
    try {
        const contactData = await fetchContactInfo();
        const contact = contactData.data;
        const seo = contact?.seo || {};

        return {
            title: seo.metaTitle || 'İletişim - AhiKariyer',
            description: seo.metaDescription || 'AhiKariyer ile iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.',
            keywords: seo.metaKeywords || 'iletişim, ahikariyer, insan kaynakları, danışmanlık',
            robots: seo.metaRobots || 'index, follow',
            canonical: seo.canonicalURL || 'https://ahikariyer.com/iletisim',
            openGraph: {
                title: seo.metaTitle || 'İletişim - AhiKariyer',
                description: seo.metaDescription || 'AhiKariyer ile iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.',
                images: seo.metaImage ? [
                    {
                        url: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${seo.metaImage.url}`,
                        width: 800,
                        height: 600,
                    }
                ] : [],
                type: 'website',
                locale: 'tr_TR',
            },
        };
    } catch (error) {
        console.error('Meta verileri alınırken hata oluştu:', error);
        return {
            title: 'İletişim - AhiKariyer',
            description: 'AhiKariyer ile iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.',
        };
    }
}

export default async function Contact() {
    let contact = {
        companyName: 'AhiKariyer',
        phone: '+90 (326) 614 01 53',
        email: 'info@ahikariyer.com',
        address: 'Yeni Mahalle, Şehit Fuat Bey Caddesi No:1/3',
        city: 'İskenderun',
        country: 'Hatay',
        weekdayHours: '09:00 - 18:00',
        weekendHours: 'Kapalı',
        isWeekendOpen: false,
        mapLat: 36.72561847227377,
        mapLng: 36.17263937536775,
        facebook: '',
        instagram: 'https://instagram.com/ahikariyercom',
        linkedin: '',
        whatsappmsj: 'https://api.whatsapp.com/send?phone=+905335652036&text=İlan%20vermek%20istiyorum.'
    };

    try {
        const response = await fetchContactInfo();
        if (response?.data) {
            const apiContact = response.data[0];
            contact = {
                ...contact,
                companyName: apiContact.companyName || contact.companyName,
                phone: apiContact.phone || contact.phone,
                email: apiContact.email || contact.email,
                address: apiContact.address || contact.address,
                city: apiContact.city || contact.city,
                country: apiContact.country || contact.country,
                weekdayHours: apiContact.weekdayHours || contact.weekdayHours,
                weekendHours: apiContact.weekendHours || contact.weekendHours,
                isWeekendOpen: apiContact.isWeekendOpen ?? contact.isWeekendOpen,
                mapLat: apiContact.mapLat || contact.mapLat,
                mapLng: apiContact.mapLng || contact.mapLng,
                facebook: apiContact.facebook || contact.facebook,
                instagram: apiContact.instagram || contact.instagram,
                linkedin: apiContact.linkedin || contact.linkedin
            };
        }
    } catch (error) {
        console.error('İletişim bilgileri alınırken hata oluştu:', error);
    }

    return (
        <>
            <Navbar navClass="defaultscroll sticky" navLight={true} />
            <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">İletişim</h5>
                                <p className="text-white-50 para-desc mx-auto mb-0">Bizimle İletişime Geçin!</p>ü
                                <a
  href={contact.whatsappmsj}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 999999,
    backgroundColor: "#25D366",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="white"
  >
    <path d="M16.003 3C9.373 3 4 8.373 4 15.003c0 2.646.873 5.091 2.353 7.063L4 29l7.125-2.313a12.96 12.96 0 004.878.947c6.63 0 12.003-5.373 12.003-11.997C28.006 8.373 22.633 3 16.003 3zm0 21.992c-1.569 0-3.054-.44-4.312-1.204l-.309-.184-4.21 1.366 1.388-4.1-.203-.318A9.945 9.945 0 016.998 15c0-5.52 4.482-10.002 10.005-10.002S27.008 9.48 27.008 15c0 5.521-4.482 9.992-10.005 9.992zm5.725-7.478c-.31-.156-1.833-.906-2.118-1.008-.284-.101-.492-.156-.7.156s-.8 1.008-.981 1.217c-.183.208-.364.234-.673.078a8.3 8.3 0 01-2.434-1.507 9.16 9.16 0 01-1.693-2.076c-.178-.306-.002-.471.134-.627.137-.155.306-.362.458-.543.153-.18.204-.309.306-.514.102-.205.05-.388-.025-.543-.077-.155-.7-1.681-.958-2.304-.253-.61-.511-.526-.7-.536a3.038 3.038 0 00-.59-.012c-.203 0-.535.078-.816.388-.28.311-1.072 1.045-1.072 2.55s1.097 2.958 1.248 3.165c.153.208 2.14 3.263 5.184 4.575.725.313 1.29.5 1.73.639.727.231 1.39.198 1.913.12.584-.087 1.833-.748 2.093-1.469.258-.72.258-1.338.18-1.469-.077-.13-.28-.208-.59-.364z" />
  </svg>
</a>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">AHİKariyer</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">İletişim</li>
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

            <section className="section pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="me-lg-5">
                                <div className="title-heading mb-4">
                                    <h4 className="display-5 fw-bold">İletişim</h4>
                                    <p className="text-muted para-desc mb-0">Bizimle iletişime geçin.</p>
                                </div>

                                <div className="contact-detail mt-3">
                                    <div className="content mt-3">
                                        <h5 className="title">Adres :</h5>
                                        <p className="text-muted">{contact.address}, {contact.city}/{contact.country}</p>
                                    </div>

                                    <div className="content mt-3">
                                        <h5 className="title">Telefon :</h5>
                                        <p className="text-muted">{contact.phone}</p>
                                    </div>

                                    <div className="content mt-3">
                                        <h5 className="title">Email :</h5>
                                        <p className="text-muted">{contact.email}</p>
                                    </div>

                                    <div className="content mt-3">
                                        <h5 className="title">Çalışma Saatleri :</h5>
                                        <p className="text-muted mb-0">Pazartesi - Cuma: {contact.weekdayHours}</p>
                                        <p className="text-muted">Cumartesi - Pazar: {contact.weekendHours}</p>
                                    </div>

                                    {(contact.facebook || contact.instagram || contact.linkedin) && (
                                        <div className="content mt-3">
                                            <h5 className="title">Sosyal Medya :</h5>
                                            <ul className="list-unstyled social-icon mb-0 mt-2">
                                                {contact.facebook && (
                                                    <li className="list-inline-item me-1">
                                                        <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="rounded">
                                                            <i className="uil uil-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                )}
                                                {contact.instagram && (
                                                    <li className="list-inline-item me-1">
                                                        <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="rounded">
                                                            <i className="uil uil-instagram"></i>
                                                        </a>
                                                    </li>
                                                )}
                                                {contact.linkedin && (
                                                    <li className="list-inline-item me-1">
                                                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="rounded">
                                                            <i className="uil uil-linkedin"></i>
                                                        </a>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                            <div className="card shadow rounded border-0">
                                <div className="card-body">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className="card map border-0">
                                <div className="card-body p-0">
                                    <iframe 
                                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.2024560279484!2d${contact.mapLng}!3d${contact.mapLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152f5d8e1c1f4c75%3A0x1b8fc6e3c87f04aa!2zQWhpa2FyaXllciBEYW7EscWfbWFubMSxaw!5e0!3m2!1str!2str!4v1710347432695!5m2!1str!2str`}
                                        style={{ border: 0 }}
                                        className="rounded"
                                        allowFullScreen=""
                                        loading="lazy"
                                        width="100%"
                                        height="450"
                                    ></iframe>
                                </div>
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
