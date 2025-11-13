export const dynamic = 'force-dynamic'

import Image from 'next/image'
import Link from 'next/link'

// Component Imports
import Footer from '../componants/footer'
import Navbar from '../componants/navbar'
import ScrollTop from '../componants/scrollTop'

// Service Imports
import { fetchCompanies } from '../../api/company-profile'

// Icon Imports
import { FiMapPin } from '../assets/icons/vander'


export default async function IsVerenler() {
  const { companies, pagination } = await fetchCompanies({ page: 1, pageSize: 12 })

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
                  İşverenler / Şirketler
                </h5>
              </div>
            </div>
          </div>

          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link href="/">Ahikurumsal</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Şirketler
                </li>
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
          <div className="row g-4 gy-5">
            {companies.length === 0 ? (
              <div className="col-12">
                <p className="text-muted text-center">Henüz şirket profili bulunmamaktadır.</p>
              </div>
            ) : (
              companies.map((company) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={company.id}>
                  <div className="employer-card position-relative bg-white rounded shadow p-4 mt-3">
                    <div className="employer-img d-flex justify-content-center align-items-center bg-white shadow-md rounded">
                      {company.logo?.url ? (
                        <Image
                          src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + company.logo.url}
                          width={36}
                          height={36}
                          className="avatar avatar-ex-small"
                          alt={company.companyName}
                        />
                      ) : (
                        <div className="avatar avatar-ex-small bg-light text-muted d-flex align-items-center justify-content-center">
                          {company.companyName.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="content mt-3">
                      <Link href={`/is-veren-detay/${company.id}`} className="title text-dark h5">
                        {company.companyName}
                      </Link>
                      <p className="text-muted mt-2 mb-0">
                        {company.companyAbout
                          ? company.companyAbout.slice(0, 50) + (company.companyAbout.length > 50 ? '...' : '')
                          : 'Şirket açıklaması mevcut değil'}
                      </p>
                    </div>

                    <ul className="list-unstyled d-flex justify-content-between align-items-center border-top mt-3 pt-3 mb-0">
                      <li className="text-muted d-inline-flex align-items-center">
                        <FiMapPin className="fea icon-sm me-1 align-middle" />
                        {company.city && company.district ? `${company.district}, ${company.city}` : 'Konum belirtilmemiş'}
                      </li>
                      <li className="list-inline-item text-primary fw-medium">{company.jobCount} İlan</li>
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>

          {pagination.pageCount > 1 && (
            <div className="row">
              <div className="col-12 mt-4 pt-2">
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item">
                    <Link
                      className="page-link"
                      href={`?page=${pagination.page - 1}`}
                      aria-label="Previous"
                      style={{ pointerEvents: pagination.page === 1 ? 'none' : 'auto', opacity: pagination.page === 1 ? 0.5 : 1 }}
                    >
                      <span aria-hidden="true">
                        <i className="mdi mdi-chevron-left fs-6"></i>
                      </span>
                    </Link>
                  </li>
                  {Array.from({ length: pagination.pageCount }, (_, i) => i + 1).map(page => (
                    <li key={page} className={`page-item ${pagination.page === page ? 'active' : ''}`}>
                      <Link className="page-link" href={`?page=${page}`}>
                        {page}
                      </Link>
                    </li>
                  ))}
                  <li className="page-item">
                    <Link
                      className="page-link"
                      href={`?page=${pagination.page + 1}`}
                      aria-label="Next"
                      style={{
                        pointerEvents: pagination.page === pagination.pageCount ? 'none' : 'auto',
                        opacity: pagination.page === pagination.pageCount ? 0.5 : 1,
                      }}
                    >
                      <span aria-hidden="true">
                        <i className="mdi mdi-chevron-right fs-6"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  )
}