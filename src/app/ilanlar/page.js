'use client'
export const dynamic = 'force-dynamic';
import Image from "next/image";
import Link from "next/link";
import Navbar from "../componants/navbar";
import { useState, useEffect } from 'react';
import { FiClock, FiMapPin } from "../assets/icons/vander";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";
import { fetchJobListings, fetchFilterOptions } from '@/api/job-listing';
import { useSearchParams } from 'next/navigation'

export default function JobListTwo(){
    const searchParams = useSearchParams()
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterOptions, setFilterOptions] = useState(null);
    const [filters, setFilters] = useState({
        search: '',
        city: '',
        department: '',
        workMode: '',
        position: '',
        employmentType: '',
        educationRequirement: '',
        gender: '',
        disabilityFriendly: undefined,
        company: searchParams.get('company') || '',
    });
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: 0
    });

    useEffect(() => {
        const fetchFilters = async () => {
            try {
                const options = await fetchFilterOptions();
                setFilterOptions(options);
            } catch (err) {
                console.error('Filtre seçenekleri yüklenirken hata oluştu:', err);
            }
        };
        fetchFilters();
    }, []);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetchJobListings({ 
                    ...filters,
                    page: pagination.page 
                });
                setJobData(response.data);
                setPagination(response.meta.pagination);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchJobs();
    }, [pagination.page, filters]);

    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
        setPagination(prev => ({ ...prev, page: 1 })); // Reset to first page when filter changes
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.searchItem2.value;
        handleFilterChange('search', searchValue);
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.pageCount) {
            setPagination(prev => ({ ...prev, page: newPage }));
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:'url("/images/hero/bg.jpg")', backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">İlanlar</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">AhİKariyer</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">İlanlar</li>
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
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card bg-white p-4 rounded shadow sticky-bar">
                            <div>
                                <h6 className="mb-0">Arama Filtreleri</h6>
    
                                <div className="search-bar mt-2">
                                    <div id="itemSearch2" className="menu-search mb-0">
                                        <form role="search" method="get" id="searchItemform2" className="searchform" onSubmit={handleSearch}>
                                            <input 
                                                type="text" 
                                                className="form-control rounded border" 
                                                name="s" 
                                                id="searchItem2" 
                                                placeholder="İlan Ara..."
                                                defaultValue={filters.search}
                                            />
                                            <input type="submit" id="searchItemsubmit2" value="Ara"/>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {filterOptions && (
                                <>

                                
                                        <div className="mt-4">
                                        <h6 className="mb-0">Departman</h6>
                                        <select 
                                            className="form-select form-control border mt-2" 
                                            value={filters.department}
                                            onChange={(e) => handleFilterChange('department', e.target.value)}
                                        >
                                            <option value="">Tümü</option>
                                            {filterOptions.departments.map(dept => (
                                                <option key={dept.id} value={dept.id}>{dept?.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <h6 className="mb-0">Çalışma Şekli</h6>
                                        <select 
                                            className="form-select form-control border mt-2"
                                            value={filters.workMode}
                                            onChange={(e) => handleFilterChange('workMode', e.target.value)}
                                        >
                                            <option value="">Tümü</option>
                                            {filterOptions.workModes.map(mode => (
                                                <option key={mode.id} value={mode.id}>{mode?.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                  
                                        <div className="mt-4">
                                        <h6 className="mb-0">Pozisyon</h6>
                                        <select 
                                            className="form-select form-control border mt-2"
                                            value={filters.position}
                                            onChange={(e) => handleFilterChange('position', e.target.value)}
                                        >
                                            <option value="">Tümü</option>
                                            {filterOptions.positions.map(pos => (
                                                <option key={pos.id} value={pos.id}>{pos?.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <h6 className="mb-0">İstihdam Türü</h6>
                                        <select 
                                            className="form-select form-control border mt-2"
                                            value={filters.employmentType}
                                            onChange={(e) => handleFilterChange('employmentType', e.target.value)}
                                        >
                                            <option value="">Tümü</option>
                                            {filterOptions.employmentTypes.map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <h6 className="mb-0">Eğitim Seviyesi</h6>
                                        <select 
                                            className="form-select form-control border mt-2"
                                            value={filters.educationRequirement}
                                            onChange={(e) => handleFilterChange('educationRequirement', e.target.value)}
                                        >
                                            <option value="">Tümü</option>
                                            {filterOptions.educationLevels.map(level => (
                                                <option key={level} value={level}>{level}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <h6 className="mb-0">Cinsiyet</h6>
                                        <select 
                                            className="form-select form-control border mt-2"
                                            value={filters.gender}
                                            onChange={(e) => handleFilterChange('gender', e.target.value)}
                                        >
                                            <option value="">Tümü</option>
                                            {filterOptions.genderOptions.map(gender => (
                                                <option key={gender} value={gender}>{gender}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="disabilityFriendly"
                                                checked={filters.disabilityFriendly === true}
                                                onChange={(e) => handleFilterChange('disabilityFriendly', e.target.checked)}
                                            />
                                            <label className="form-check-label" htmlFor="disabilityFriendly">
                                                Engelli Dostu
                                            </label>
                                        </div>
                                    </div>
                                </>
                            )}
    
                            <div className="mt-4">
                                <button 
                                    className="btn btn-primary w-100"
                                    onClick={() => setFilters({
                                        search: '',
                                        city: '',
                                        department: '',
                                        workMode: '',
                                        position: '',
                                        employmentType: '',
                                        educationRequirement: '',
                                        gender: '',
                                        disabilityFriendly: undefined
                                    })}
                                >
                                    Filtreleri Temizle
                                </button>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="row g-4">
                            {jobData.map((item,index)=>{
                                return(
                                    <div className="col-12" key={index}>
                                        <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
                                            <div className="d-flex align-items-center w-250px">
                                                <Image src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + item.image} width={65} height={65} className="avatar avatar-small rounded shadow p-3 bg-white" alt={item.company.name}/>
                
                                                <div className="ms-3">
                                                    <Link href={`/ilan-detay/${item.documentId}`} className="h5 title text-dark">{item.title}</Link>
                                                    <div className="text-muted small">
                                                        {item.profession} - {item.department}
                                                    </div>
                                                </div>
                                            </div>
                
                                            <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                                                <span className="badge bg-soft-primary rounded-pill">{item.type}</span>
                                                <span className="text-muted d-flex align-items-center fw-medium mt-md-2">
                                                    <FiClock className="fea icon-sm me-1 align-middle"/>
                                                    {item.posted}
                                                </span>
                                            </div>
                
                                            <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                                                <span className="text-muted d-flex align-items-center"><FiMapPin className="fea icon-sm me-1 align-middle"/>{item.location}</span>
                                            </div>
                
                                            <div className="mt-3 mt-md-0">
                                                <Link href={`/ilan-detay/${item.documentId}`} className="btn btn-sm btn-primary w-full ms-md-1">Detay</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="row">
                            <div className="col-12 mt-4 pt-2">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className={`page-item ${pagination.page === 1 ? 'disabled' : ''}`}>
                                        <button 
                                            className="page-link" 
                                            onClick={() => handlePageChange(pagination.page - 1)}
                                            disabled={pagination.page === 1}
                                        >
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-left fs-6"></i></span>
                                        </button>
                                    </li>
                                    
                                    {[...Array(pagination.pageCount)].map((_, index) => (
                                        <li key={index + 1} className={`page-item ${pagination.page === index + 1 ? 'active' : ''}`}>
                                            <button 
                                                className="page-link" 
                                                onClick={() => handlePageChange(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    
                                    <li className={`page-item ${pagination.page === pagination.pageCount ? 'disabled' : ''}`}>
                                        <button 
                                            className="page-link" 
                                            onClick={() => handlePageChange(pagination.page + 1)}
                                            disabled={pagination.page === pagination.pageCount}
                                        >
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-right fs-6"></i></span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
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


