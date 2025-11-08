'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Footer from "../../componants/footer";
import NavbarDark from "../../componants/navbarDark";
import ScrollTop from "../../componants/scrollTop";
import MarkdownRenderer from '../../componants/markdownRenderer';

import { FiBook, FiBriefcase, FiClock, FiLayout, FiMail, FiMapPin, FiMonitor, FiPhone, FiUserCheck } from "../../assets/icons/vander";
import { fetchJobListings } from "@/api/job-listing";
import { createApplicationLog } from "@/api/application-log";

export default function JobDetailTwo(props){
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [similarJobs, setSimilarJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchJobListings({ documentId: props.params.id });
                if (response.data && response.data.length > 0) {
                    setJobData(response.data[0]);
                    
                    const similarResponse = await fetchJobListings({ 
                        pageSize: 3,
                        profession: response.data[0].profession
                    });
                    setSimilarJobs(similarResponse.data.filter(job => job.documentId !== props.params.id));

                    try {
                      const ipRes = await fetch('https://api.ipify.org?format=json');
                      const ipData = await ipRes.json();
                      await createApplicationLog({
                        jobListingId: response.data[0].id,
                        applicantIP: ipData.ip,
                        additionalData: {
                          page: "ilan-detay",
                          timestamp: new Date().toISOString()
                        }
                      });
                    } catch (e) {
                      console.error("Başvuru logu oluşturulamadı:", e);
                    }
                } else {
                    setError(new Error('İlan bulunamadı'));
                }
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, [props.params.id]);

    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata: {error.message}</div>;
    if (!jobData) return <div>İlan bulunamadı</div>;

    return(
        <>
        <NavbarDark/>
        <section className="bg-half d-table w-100 bg-light">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="d-lg-flex align-items-center p-4 rounded shadow bg-white mb-4">
                            <Image 
                                src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + jobData.image} 
                                width={110} 
                                height={110} 
                                className="avatar avatar-medium p-4 rounded-pill shadow bg-white" 
                                alt={jobData.company.name}
                            />

                            <div className="ms-lg-3 mt-3 mt-lg-0">
                                <h4>{jobData.title}</h4>

                                <ul className="list-unstyled mb-0">
                                    <li className="d-inline-flex align-items-center text-muted me-2">
                                        <FiLayout className="fea icon-sm text-primary me-1"/>
                                        {jobData.company.name}
                                    </li>
                                    <li className="d-inline-flex align-items-center text-muted">
                                        <FiMapPin className="fea icon-sm text-primary me-1" />
                                        {jobData.location}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h5>İş Tanımı: </h5>
                        <MarkdownRenderer content={jobData.details.description} />
                        
                        <h5 className="mt-4">Aranan Nitelikler: </h5>
                        <MarkdownRenderer content={jobData.details.required_qualifications} />

                        <h5 className="mt-4">İş Özellikleri: </h5>
                        <MarkdownRenderer content={jobData.details.job_nature} />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card bg-white rounded shadow sticky-bar">
                            <div className="p-4">
                                <h5 className="mb-0">İş Bilgileri</h5>
                                </div>
                            

                            <div className="card-body p-4 border-top">
                                <div className="d-flex widget align-items-center">
                                    <FiLayout className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Şirket Adı:</h6>
                                        <small className="text-primary mb-0">{jobData.company.name}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiUserCheck className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Çalışma Şekli:</h6>
                                        <small className="text-primary mb-0">{jobData.work_mode}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiMapPin className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Konum:</h6>
                                        <small className="text-primary mb-0">{jobData.location}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiMonitor className="fea icon-ex-md me-3" />
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">İstihdam Türü:</h6>
                                        <small className="text-primary mb-0">{jobData.type}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiBriefcase className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Yaş Aralığı:</h6>
                                        <small className="text-primary mb-0">{jobData.details.age}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiBook className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Eğitim:</h6>
                                        <small className="text-primary mb-0">{jobData.details.education}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiClock className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Son Başvuru:</h6>
                                        <small className="text-primary mb-0 mb-0">{jobData.details.publication_end_date}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3" hidden={!jobData.details.contact.phone}>
                                    <FiPhone className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">İletişim Telefon:</h6>
                                        <small className="text-primary mb-0 mb-0">{jobData.details.contact.phone}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3" hidden={!jobData.details.contact.email}>
                                    <FiMail className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">İletişim Email:</h6>
                                        <small className="text-primary mb-0 mb-0">{jobData.details.contact.email}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Benzer İlanlar</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Benzer pozisyonlardaki diğer iş fırsatlarını inceleyin.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {similarJobs.map((item, index) => {
                        return(
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="job-post rounded shadow bg-white">
                                    <div className="p-4">
                                        <Link href={`/ilan-detay/${item.documentId}`} className="text-dark title h5">{item.title}</Link>

                                        <p className="text-muted d-flex align-items-center small mt-3">
                                            <FiClock className="fea icon-sm text-primary me-1"/>
                                            {item.posted}
                                        </p>

                                        <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 mt-3">
                                            <li className="list-inline-item">
                                                <span className="badge bg-soft-primary">{item.type}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex align-items-center p-4 border-top">
                                        <Image 
                                            src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + item.image} 
                                            width={65} 
                                            height={65} 
                                            className="avatar avatar-small rounded shadow p-3 bg-white" 
                                            alt={item.company.name}
                                        />

                                        <div className="ms-3">
                                            <span className="h5 company text-dark">{item.company.name}</span>
                                            <span className="text-muted d-flex align-items-center mt-1">
                                                <FiMapPin className="fea icon-sm me-1"/>
                                                {item.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer />
        <ScrollTop/>
        </>
    )
}
