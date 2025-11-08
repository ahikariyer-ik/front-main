export const dynamic = 'force-dynamic'

import Image from 'next/image'
import Link from 'next/link'

// Component Imports
import Footer from '../../componants/footer'
import Navbar from '../../componants/navbar'
import ScrollTop from '../../componants/scrollTop'

// API Imports
import { fetchCompanyById, fetchCompanyJobs } from '../../../api/company-profile'

// Icon Imports
import { FiClock, FiMapPin } from '../../assets/icons/vander'

export default async function IsVerenDetay({ params }) {
  const company = await fetchCompanyById(params.id)
  const jobs = await fetchCompanyJobs(params.id)

  if (!company) {
    return (
      <>
         <Navbar navClass="defaultscroll sticky" navLight={true} />
        <section
            className="bg-half-170 d-table w-100"
            style={{ backgroundImage: "url('/images/hero/bg4.jpg')", backgroundPosition: 'center' }}
        >
            <div className="bg-overlay bg-gradient-overlay-2"></div>
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
                    <div className="col-12 mt-4">
                        <div className="features-absolute">
                            <p className="text-muted text-center">Şirket bulunamadı.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        <ScrollTop />
      </>
    )
  }

  return (
    <>
      <Navbar navClass="defaultscroll sticky" navLight={true} />
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url('/images/hero/bg4.jpg')", backgroundPosition: 'center' }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
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
            <div className="col-12 mt-4">
              <div className="features-absolute">
                <div className="d-md-flex justify-content-between align-items-center bg-white shadow rounded p-4">
                  <div className="d-flex align-items-center">
                    {company.logo?.url ? (
                      <Image
                        src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + company.logo.url}
                        width={80}
                        height={80}
                        className="avatar avatar-md-md rounded shadow p-3 bg-white"
                        alt={company.companyName}
                      />
                    ) : (
                      <div className="avatar avatar-md-md rounded shadow p-3 bg-white d-flex align-items-center justify-content-center text-muted">
                        {company.companyName.charAt(0)}
                      </div>
                    )}
                    <div className="ms-3">
                      <h5>{company.companyName}</h5>
                      <span className="text-muted d-flex align-items-center">
                        <FiMapPin className="fea icon-sm me-1" />
                        {company.city && company.district ? `${company.district}, ${company.city}` : 'Konum belirtilmemiş'}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 mt-md-0">
                    <Link href={`/ilanlar?company=${company.id}`} className="btn btn-sm btn-soft-primary">
                      Tüm İlanları Gör
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 col-md-7 col-12">
              <h4 className="mb-4">Şirket Hakkında:</h4>
              <p className="text-muted">
                {company.companyAbout || 'Şirket hakkında bilgi mevcut değil.'}
              </p>

              {company.companyGallery?.length > 0 && (
                <div className="row g-4">
                  {company.companyGallery.slice(0, 3).map((media, index) => (
                    <div className={index === 0 ? 'col-12' : 'col-6'} key={index}>
                      <Image
                        src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + media.url}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="rounded shadow img-fluid"
                        alt={`Şirket Galerisi ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              )}

              <h4 className="my-4">İş İlanları:</h4>
              <div className="row g-4">
                {jobs.length === 0 ? (
                  <p className="text-muted">Aktif iş ilanı bulunmamaktadır.</p>
                ) : (
                  jobs.slice(0, 4).map((job) => {
                    const postedDays = Math.floor(
                      (new Date() - new Date(job.createdAt)) / (1000 * 60 * 60 * 24)
                    )
                    return (
                      <div className="col-lg-6 col-12" key={job.id}>
                        <div className="job-post rounded shadow bg-white">
                          <div className="p-4">
                            <Link href={`/ilan-detay/${job.documentId}`} className="text-dark title h5">
                              {job.title}
                            </Link>
                            <p className="text-muted d-flex align-items-center small mt-3">
                              <FiClock className="fea icon-sm text-primary me-1" />
                              {postedDays} gün önce yayınlandı
                            </p>
                            <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 mt-3">
                              <li className="list-inline-item">
                                <span className="badge bg-soft-primary">{job.employmentType}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="d-flex align-items-center p-4 border-top">
                            <div className="ms-3">
                              <span className="text-muted d-flex align-items-center">
                                <FiMapPin className="fea icon-sm me-1" />
                                {job.city && job.district ? `${job.district}, ${job.city}` : 'Konum belirtilmemiş'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-12">
              <div className="card bg-white p-4 rounded shadow sticky-bar">
                <div className="map map-400px border-0">
                  <iframe
                   // console.log("Bu kod çalışmaz."); src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    className="rounded"
                    style={{ border: '0' }}
                    title="company-map"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-3">
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <span className="text-muted fw-medium">E-posta:</span>
                    <span>{company.email}</span>
                  </div>
                  {company.sector?.name && (
                    <div className="d-flex align-items-center justify-content-between mt-2">
                      <span className="text-muted fw-medium">Sektör:</span>
                      <span>{company.sector.name}</span>
                    </div>
                  )}
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <span className="text-muted fw-medium">Aktif İlan Sayısı:</span>
                    <span>{company.jobCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  )
}
