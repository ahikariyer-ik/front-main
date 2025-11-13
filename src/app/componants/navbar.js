'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Navbar({navClass, navLight}){
    let [isOpen, setMenu] = useState(false);
    let [scroll, setScroll] = useState(false);

    let [manu , setManu] = useState('');
    let pathname = usePathname();

    useEffect(() => {
        setManu(pathname)
        function scrollHandler() {
            setScroll(window.scrollY > 50)
          }
          if (typeof window !== "undefined") {
            window.addEventListener('scroll', scrollHandler);
            window.scrollTo(0, 0);
          }

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };

    }, [setManu]);

    const toggleMenu = () => {
        setMenu(!isOpen);
    }

    return(
    <>
        <header className={`navbar-wrapper ${scroll ? 'nav-sticky' : ''}`}>
            <div className="container">
                <div className="navbar-content">
            <Link className="logo" href="/">
                        <Image src='/images/ahikurumsal-logo.svg' width={140} height={40} alt="ahiKurumsal"/>
            </Link>

                    <button className="mobile-toggle" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                    </button>

                    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                        <Link 
                            href="/" 
                            className={`nav-link ${manu === "/" ? "active" : ""}`}
                        >
                            Ana Sayfa
                        </Link>
                        <Link 
                            href="/hakkimizda" 
                            className={`nav-link ${manu === "/hakkimizda" ? "active" : ""}`}
                        >
                            Hakkımızda
                        </Link>
                        <Link 
                            href="/hizmetlerimiz" 
                            className={`nav-link ${manu === "/hizmetlerimiz" ? "active" : ""}`}
                        >
                            Hizmetlerimiz
                        </Link>
                        <Link 
                            href="/iletisim" 
                            className={`nav-link ${manu === "/iletisim" ? "active" : ""}`}
                        >
                            İletişim
                        </Link>
                        <Link 
                            href="/demo" 
                            className="nav-link demo-button"
                        >
                            Demo Talep Et
                    </Link>
                    </nav>
                </div>
            </div>
        </header>

        <style jsx>{`
            .navbar-wrapper {
                background: white;
                border-bottom: 1px solid #e5e7eb;
                padding: 1rem 0;
                position: sticky;
                top: 0;
                z-index: 1000;
            }

            .navbar-wrapper.nav-sticky {
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            .navbar-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .logo {
                display: flex;
                align-items: center;
            }

            .mobile-toggle {
                display: none;
                flex-direction: column;
                gap: 4px;
                background: none;
                border: none;
                cursor: pointer;
                padding: 8px;
            }

            .mobile-toggle span {
                width: 25px;
                height: 3px;
                background: #1e3a5f;
                border-radius: 2px;
            }

            .nav-menu {
                display: flex;
                align-items: center;
                gap: 2rem;
            }

            .nav-link {
                color: #1e3a5f;
                text-decoration: none;
                font-weight: 500;
                font-size: 1rem;
                padding: 0.5rem 0;
                position: relative;
            }

            .nav-link:hover {
                color: #0f1e3a;
            }

            .nav-link.active::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: #1e3a5f;
            }

            .demo-button {
                background: #1e3a5f;
                color: white;
                padding: 0.625rem 1.5rem;
                border-radius: 6px;
                margin-left: 1rem;
            }

            .demo-button:hover {
                background: #0f1e3a;
                color: white;
            }

            .demo-button.active::after {
                display: none;
            }

            @media (max-width: 991px) {
                .mobile-toggle {
                    display: flex;
                }

                .nav-menu {
                    position: fixed;
                    top: 70px;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 2rem;
                    gap: 1.5rem;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                }

                .nav-menu.open {
                    transform: translateX(0);
                }

                .demo-button {
                    margin-left: 0;
                    width: 100%;
                    text-align: center;
                }

                .nav-link {
                    width: 100%;
                }
            }
        `}</style>
    </>
    )
}
