'use client'
import Select from 'react-select';
import { FiBriefcase, FiMapPin, FiSearch } from "../assets/icons/vander";

export default function FormSelect(){
    let location = [
        { value: 'İstanbul', label: 'İstanbul' },
        { value: 'Ankara', label: 'Ankara' },
        { value: 'İzmir', label: 'İzmir' },
        { value: 'Bursa', label: 'Bursa' },
        { value: 'Antalya', label: 'Antalya' },
        { value: 'Adana', label: 'Adana' },
        { value: 'Konya', label: 'Konya' },
        { value: 'Gaziantep', label: 'Gaziantep' },
        { value: 'Kayseri', label: 'Kayseri' },
        { value: 'Mersin', label: 'Mersin' },
    ];
    let type = [
        { value: 'HR-Check up', label: 'HR-Check up' },
        { value: 'SGK İşlemleri', label: 'SGK İşlemleri' },
        { value: 'Personel Yönetimi', label: 'Personel Yönetimi' },
        { value: 'İş Sağlığı ve Güvenliği', label: 'İş Sağlığı ve Güvenliği' },
        { value: 'Yabancı Personel İstihdamı', label: 'Yabancı Personel İstihdamı' },
    ];
    return(
        <>
            <form className="card-body text-start">
                <div className="registration-form text-dark text-start">
                    <div className="row g-lg-0">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mb-3 mb-sm-0">
                                <label className="form-label d-none fs-6">Arama :</label>
                                <div className="filter-search-form position-relative filter-border">
                                    <FiSearch className="fea icon-20 icons"/>
                                    <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Anahtar kelimelerinizi girin"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mb-3 mb-sm-0">
                                <label className="form-label d-none fs-6">Konum:</label>
                                <div className="filter-search-form position-relative filter-border">
                                    <FiMapPin className="fea icon-20 icons"/>
                                    <Select options={location} placeholder="Konum seçin"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="mb-3 mb-sm-0">
                                <label className="form-label d-none fs-6">Hizmet :</label>
                                <div className="filter-search-form relative filter-border">
                                    <FiBriefcase className="fea icon-20 icons"/>
                                    <Select options={type} placeholder="Hizmet seçin"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <input type="submit" id="search" name="search" style={{height:'60px'}} className="btn btn-primary searchbtn w-100" value="Ara"/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}