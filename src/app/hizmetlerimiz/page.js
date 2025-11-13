export const dynamic = 'force-dynamic';
import Link from "next/link";

import { fetchServices } from '@/api/services';
import { Icon } from "@iconify/react";
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import ScrollTop from "../componants/scrollTop";

export async function generateMetadata() {
    return {
        title: 'Hizmetlerimiz - Ahikurumsal İnsan Kaynakları',
        description: 'İşletmenizin ihtiyaç duyduğu tüm insan kaynakları hizmetlerini profesyonel ekibimizle sunuyoruz.',
        keywords: 'insan kaynakları hizmetleri, işe alım, özlük işlemleri, sgk işlemleri, iş sağlığı ve güvenliği',
        robots: 'index, follow',
        openGraph: {
            title: 'Hizmetlerimiz - Ahikurumsal İnsan Kaynakları',
            description: 'İşletmenizin ihtiyaç duyduğu tüm insan kaynakları hizmetlerini profesyonel ekibimizle sunuyoruz.',
            type: 'website',
            locale: 'tr_TR',
        },
    };
}

export default async function Services(){
    const services = await fetchServices();

    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:'url("/images/hero/bg.jpg")', backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4 text-white">Hizmetlerimiz</h4>
                            <p className="text-muted para-desc mx-auto mb-0">İşletmenizin ihtiyaç duyduğu tüm insan kaynakları hizmetlerini profesyonel ekibimizle sunuyoruz.</p>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Ahikurumsal</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Hizmetler</li>
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
                <div className="row g-4">
                    {services.data?.map((item, index)=>{
                        return(
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                            <div className="position-relative features text-center p-4 rounded shadow bg-white h-100">
                                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                <Icon icon={item.icon} className="fea icon-ex-md"/>
                                </div>
        
                                <div className="mt-4">
                                    <Link href={`/hizmetlerimiz/${item.slug}`} className="title h5 text-dark d-block" style={{height: '48px', overflow: 'hidden'}}>{item.title}</Link>
                                    <p className="text-muted mt-3 mb-0" style={{overflow: 'hidden'}}>{item.description}</p>
                                    <div className="mt-3">
                                        <Link href={`/hizmetlerimiz/${item.slug}`} className="btn btn-link primary text-dark">Detayları Gör <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}