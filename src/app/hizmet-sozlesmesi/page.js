import Link from "next/link";

import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import ScrollTop from "../componants/scrollTop";

export default function ServiceAgreement() {
    return (
        <>
            <Navbar navClass="defaultscroll sticky" navLight={true} />
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: "url('/images/hero/bg.jpg')", backgroundPosition: 'top' }}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Hizmet Akdi ve İlan Yayınlama Sözleşmesi</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Ahikurumsal</Link></li>
                                <li className="breadcrumb-item"><Link href="/fiyatlandirma">Paketler</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Hizmet Akdi</li>
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
                        <div className="col-lg-9">
                            <div className="card shadow rounded border-0">
                                <div className="card-body">
                                    <h5 className="card-title mt-4">
                                        <span>Bu Sözleşme, aşağıda belirtilen taraflar arasında akdedilmiştir:</span><br />
                                        <span>Taraflar:</span><br />
                                    </h5>
                                    <p>
                                        
                                    <span>1. Ahikurumsal.com (Bundan sonra "Site" olarak anılacaktır)</span><br />
                                    <span> 2. [İŞVERENİN ADI] (Bundan sonra "İşveren" olarak anılacaktır)</span>
                                    </p>

                                    <h5 className="card-title mt-4">Madde 1 - Konu</h5>
                                    <p className="text-muted">
                                        Bu sözleşme, İşveren'in Ahikurumsal.com platformu üzerinden iş ilanı yayınlamasına ilişkin şartları, tarafların hak ve yükümlülüklerini düzenlemektedir.
                                    </p>

                                    <h5 className="card-title mt-4">Madde 2 - Tarafların Hak ve Yükümlülükleri</h5>
                                    <p className="text-muted">
                                        <strong>2.1.</strong> İşveren, Site'de yayınlayacağı tüm iş ilanlarının Türkiye Cumhuriyeti İş Hukuku'na uygun olduğunu beyan ve taahhüt eder.<br />
                                        <strong>2.2.</strong> <strong>İslami Değerlere Uygunluk Şartı:</strong> İşverenlerin, ahikurumsal.com platformunda yayımlayacakları iş ilanlarının İslamî değerlere, genel ahlak kurallarına ve kamu düzenine uygun olması tavsiye edilir. Bu çerçevede; faizli işlemler, alkol, kumar, fuhuş, İslam dinince haram kılınmış ürünlerin üretimi, tanıtımı veya satışına ilişkin işler ile karma (kadın-erkek karışık) ve İslamî değerlere uygun olmayan çalışma ortamlarına yönelik ilanların yayımlanmaması önemle önerilmektedir.İşverenler, ilan yayımlarken bu hassasiyetleri dikkate almalıdır. Aksi hâlde doğabilecek manevî sorumlulukların ve vebalin işverene ait olacağı unutulmamalıdır. ahikurumsal.com, İslami değerlere aykırı olduğunu tespit ettiği ilanları gerekçe göstermeksizin yayından kaldırma ve ilgili üyelikleri askıya alma veya sonlandırma hakkını saklı tutar.<br />
                                        <strong>2.3.</strong> İşveren, yayınladığı ilanlarda ayrımcılık yapmayacağını, eşitlik ilkesine uygun hareket edeceğini taahhüt eder.<br />
                                        <strong>2.4.</strong> İşveren, verdiği ilanlarda gerçeğe aykırı beyanlarda bulunmayacağını, yanıltıcı bilgiler vermeyeceğini kabul eder.<br />
                                        <strong>2.5.</strong> İşveren, Site’nin belirlediği ilan yayınlama kurallarına ve teknik gereksinimlere uygun şekilde ilan vereceğini kabul eder.<br />
                                        <strong>2.6.</strong> Site, ilan içeriklerini denetleme hakkına sahiptir ve uygun bulunmayan ilanları yayından kaldırabilir.
                                    </p>

                                    <h5 className="card-title mt-4">Madde 3 - Kişisel Verilerin Korunması (KVKK)</h5>
                                    <p className="text-muted">
                                        <strong>3.1.</strong> Taraflar, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuata uygun hareket edeceklerini kabul ederler.<br />
                                        <strong>3.2.</strong> İşveren, Site aracılığıyla edindiği aday bilgilerini yalnızca iş başvurusu amacıyla kullanacağını, üçüncü kişilerle paylaşmayacağını ve verileri hukuka aykırı şekilde işlemeyeceğini taahhüt eder.<br />
                                        <strong>3.3.</strong> Site, İşveren tarafından iletilen verileri KVKK'ya uygun şekilde işleyecek, saklayacak ve yetkisiz erişime karşı gerekli güvenlik önlemlerini alacaktır.<br />
                                        <strong>3.4.</strong> İşveren, adaylardan topladığı kişisel verileri sadece mevzuata uygun şekilde işleyeceğini, gerektiğinde adaylardan açık rıza alacağını kabul eder.<br />
                                        <strong>3.5.</strong> Taraflar, kişisel verilerin güvenliğini sağlamak için gerekli teknik ve idari tedbirleri almakla yükümlüdür.
                                    </p>

                                    <h5 className="card-title mt-4">Madde 4 - Sorumluluk Reddi</h5>
                                    <p className="text-muted">
                                        <strong>4.1.</strong> Ahikurumsal.com, İşveren tarafından yayınlanan ilanların doğruluğunu garanti etmez ve bu ilanların içeriğinden sorumlu tutulamaz.<br />
                                        <strong>4.2.</strong> İşveren, yayınladığı ilanların hukuka aykırı bir içerik içermesi halinde doğacak tüm hukuki ve cezai sorumluluğun kendisine ait olduğunu kabul eder.
                                    </p>

                                    <h5 className="card-title mt-4">Madde 5 - Hizmet Bedeli ve Ödeme Koşulları</h5>
                                    <p className="text-muted">
                                        <strong>5.1.</strong> İşveren, Site üzerinden ilan yayınlamak için belirlenen hizmet bedelini ödemeyi kabul eder.<br />
                                        <strong>5.2.</strong> Ödeme, Site tarafından belirtilen yöntemler ile yapılacaktır.
                                    </p>

                                    <h5 className="card-title mt-4">Madde 6 - Sözleşmenin Feshi</h5>
                                    <p className="text-muted">
                                        <strong>6.1.</strong> Site, sözleşmeye aykırı davrandığını tespit etmesi halinde sözleşmeyi tek taraflı olarak feshedebilir.<br />
                                        <strong>6.2.</strong> Site, İşveren'in sözleşmeye aykırı hareket etmesi halinde, hiçbir geri ödeme yapmaksızın ilanı yayından kaldırma hakkına sahiptir.
                                    </p>

                                    <h5 className="card-title mt-4">Madde 7 - Uyuşmazlıkların Çözümü</h5>
                                    <p className="text-muted">
                                        İşbu sözleşmeden doğan her türlü ihtilaf, Türkiye Cumhuriyeti kanunlarına tabi olup, İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
                                    </p>

                                    <h5 className="card-title mt-4">Madde 8 - Yürürlük</h5>
                                    <p className="text-muted">
                                        Bu sözleşme, İşveren’in Site'ye üye olması ve ilan yayınlaması ile birlikte yürürlüğe girer ve taraflar arasında bağlayıcı hale gelir.
                                    </p>

                                    <p className="text-muted">
                                        Taraflar işbu sözleşmeyi okuyup, anlayarak kabul etmişlerdir.<br />
                                        <strong>Ahikurumsal.com</strong><br />
                                        Yetkili İmza: ___________<br />
                                        <strong>İşveren:</strong><br />
                                        [İŞVERENİN ADI]<br />
                                        Yetkili İmza: ___________
                                    </p>

                                    <div className="text-center mt-4">
                                        <Link href="/odeme" className="btn btn-primary">Sözleşmeyi Kabul Et ve Devam Et</Link>
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
    );
}
