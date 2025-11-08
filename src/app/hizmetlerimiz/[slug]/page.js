import { fetchServiceBySlug } from '@/api/services';
import Link from 'next/link';
import Footer from "../../componants/footer";
import Navbar from "../../componants/navbar";
import MarkdownRenderer from '@/app/componants/markdownRenderer';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const service = await fetchServiceBySlug(slug);
  const seo = service.data.seo;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords,
    robots: seo.metaRobots,
    canonical: seo.canonicalURL,
    openGraph: {
      images: seo.metaImage ? [
        {
          url: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${seo.metaImage.url}`,
          width: 800,
          height: 600,
        }
      ] : [],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = await fetchServiceBySlug(slug);

  return (
    <>
      <Navbar navClass="defaultscroll sticky" navLight={true} />
      <section className="bg-half-170 d-table w-100" style={{ backgroundImage: 'url("/images/hero/bg.jpg")', backgroundPosition: 'top' }}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h1 className="title mb-4 text-white">{service.data.title}</h1>
                <p className="text-muted para-desc mx-auto mb-0">{service.data.description}</p>
              </div>
            </div>
          </div>

          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item"><Link href="/">AhİKariyer</Link></li>
                <li className="breadcrumb-item"><Link href="/hizmetlerimiz">Hizmetler</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{service.data.title}</li>
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
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="me-lg-5">
                <MarkdownRenderer content={service.data.content} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 rounded shadow">
                <div className="card-body">
                  {service.data.image && (
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${service.data.image.url}`}
                      alt={service.data.title}
                      className="img-fluid rounded shadow mb-4"
                    />
                  )}
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