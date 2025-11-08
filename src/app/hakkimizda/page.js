export const dynamic = 'force-dynamic';
import Link from "next/link";
import { fetchServices } from '@/api/services';
import { Icon } from "@iconify/react";
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import ScrollTop from "../componants/scrollTop";
import { FiHelpCircle } from "../assets/icons/vander";
import {fetchAboutPage} from "@/api/about-us"
import MarkdownRenderer from '../componants/markdownRenderer';

export async function generateMetadata() {
  const aboutPage = await fetchAboutPage();
  return {
    title: aboutPage.seo.metaTitle,
    description: aboutPage.seo.metaDescription,
    keywords: aboutPage.seo.metaKeywords,
    robots: aboutPage.seo.metaRobots,
    openGraph: {
      title: aboutPage.seo.metaTitle,
      description: aboutPage.seo.metaDescription,
      type: 'website',
      locale: 'tr_TR',
      images: aboutPage.seo.metaImage?.data ? [{
        url: `${process.env.STRAPI_API_URL}${aboutPage.seo.metaImage.url}`,
        width: aboutPage.seo.metaImage.width,
        height: aboutPage.seo.metaImage.height,
        alt: aboutPage.seo.metaImage.alternativeText || 'AhİKariyer Hakkımızda',
      }] : [],
    },
    alternates: {
      canonical: aboutPage.seo.canonicalURL || undefined,
    },
  };
}

export default async function Hakkimizda() {
  const aboutPage = await fetchAboutPage();
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
                  {aboutPage.title}
                </h5>
              </div>
            </div>
          </div>
          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item"><Link href="/">AhİKariyer</Link></li>
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
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-4 pb-2">
                <div className="para-desc mb-0 mx-auto">
                  <MarkdownRenderer content={aboutPage.content} /> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-10">
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

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Sıkça Sorulan Sorular</h4>
                <p className="text-muted para-desc mb-0 mx-auto">AhiKariyer Değerlerinize uygun iş ilanlarını yayınlarken titizlikle seçiyoruz.</p>
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

          <div className="row mt-md-5 pt-md-3 mt-4 pt-2 justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">{aboutPage.contact_title}</h4>
                <p className="text-muted para-desc mx-auto">{aboutPage.contact_description}</p>
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
