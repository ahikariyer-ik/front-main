'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HeroTabs() {
    const router = useRouter();

    const handleTabChange = (tab) => {
        if (tab === 'ik') {
            router.push('/insan-kaynaklari');
        }
    };

    return (
        <div className="title-heading text-center">
            <h1 className="heading text-white fw-bold mb-4">Ahikurumsal'a Hoş Geldiniz</h1>
            <p className="para-desc text-white-50 mx-auto mb-4">Hizmet türünüzü seçin</p>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link 
                    href="/"
                    className="btn btn-lg px-5 py-3"
                    style={{
                        minWidth: '200px', 
                        fontSize: '1.1rem', 
                        fontWeight: '600',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                        border: 'none',
                        color: 'white',
                        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                    }}
                >
                    <i className="mdi mdi-briefcase me-2"></i>
                    AHİ-KARİYER
                </Link>
                <button 
                    onClick={() => handleTabChange('ik')}
                    className="btn btn-lg px-5 py-3"
                    style={{
                        minWidth: '200px', 
                        fontSize: '1.1rem', 
                        fontWeight: '600',
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: '2px solid rgba(255, 255, 255, 0.5)',
                        color: 'white',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <i className="mdi mdi-account-group me-2"></i>
                    <span style={{position: 'relative', display: 'inline-block'}}>
                        AHİ <span style={{position: 'relative', display: 'inline-block'}}>
                            -<span style={{fontSize: '0.6em', position: 'absolute', top: '-12px', left: '100%', marginLeft: '2px', lineHeight: '1', whiteSpace: 'nowrap'}}>360°</span>
                            İK
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
}

