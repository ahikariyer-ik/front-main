'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

import { LuSearch } from "../assets/icons/vander";

export default function NavbarDark({navClass, navLight}){
    let [isOpen, setMenu] = useState(false);
    let [scroll, setScroll] = useState(false);
    let [search, setSearch] = useState(false);
    let [cartitem, setCartitem] = useState(false);

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

        let searchModal = () => {setSearch(false)}
        document.addEventListener('mousedown',searchModal);

        let cartModal = () => {setCartitem(false)}
        document.addEventListener('mousedown',cartModal);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            document.removeEventListener('mousedown',searchModal);
            document.removeEventListener('mousedown',cartModal);
        };

    }, [setManu]);

    const toggleMenu = () => {
        setMenu(!isOpen);
        if (document.getElementById("navigation")) {
            const navigation = document.getElementById("navigation");
            if (isOpen) {
                navigation.style.display = "none";
            } else {
                navigation.style.display = "block";
            }
        }
    }

    const toggleSearch = () => {
        setSearch(!search);
    }

    return(
    <header id="topnav" className={ `${scroll ? 'nav-sticky' :''} ${navClass}`}>
        <div className="container">
            <Link className="logo" href="/">
                <div className="logo-content">
                    <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 21V11L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 15V15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="logo-text">
                        <span className="logo-title">KURUM360.COM</span>
                        <span className="logo-subtitle">Dijital İnsan Kaynakları ve Kurum Yönetiminiz Bir Arada</span>
                    </div>
                </div>
            </Link>
            <div className="menu-extras">
                <div className="menu-item">
                    <Link href='#' className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>

            <ul className="buy-button list-inline mb-0">
                <li className="list-inline-item ps-1 mb-0">
                    <div className="dropdown">
                        <button type="button" onClick={toggleSearch} className="dropdown-toggle btn btn-sm btn-icon btn-pills btn-primary">
                            <LuSearch className="icons"/>
                        </button>
                        {search && (
                            <div className="dropdown-menu dd-menu dropdown-menu-end bg-white rounded border-0 mt-3 p-0 show" style={{width:'240px', position:'absolute',right:'0'}}>
                                <div className="search-bar">
                                    <div id="itemSearch" className="menu-search mb-0">
                                        <form role="search" method="get" id="searchItemform" className="searchform">
                                            <input type="text" className="form-control rounded border" name="s" id="searchItem" placeholder="Arama Yapın..."/>
                                            <input type="submit" id="searchItemsubmit" value="Ara"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
    
            <div id="navigation" style={{display: isOpen ? 'block' : 'none'}}>  
                <ul className="navigation-menu nav-right">
                    <li className={`${["/"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/">Ana Sayfa</Link>
                    </li>

                    <li className={`${["/ilanlar"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/ilanlar">İlanlar</Link>
                    </li>

                    <li className={`${["/is-verenler"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/is-verenler">İşverenler</Link>
                    </li>

                    <li className={`${["/hakkimizda"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/hakkimizda">Hakkımızda</Link>
                    </li>

                    <li className={`${["/hizmetlerimiz"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/hizmetlerimiz">Hizmetler</Link>
                    </li>

                    <li className={`${["/fiyatlandirma"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/fiyatlandirma">Fiyatlandırma</Link>
                    </li>

                    {/* 
                    <li className={`${["/blogs", "/blog-sidebar","/blog-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="#">Blog</Link><span className="menu-arrow"></span>
                        <ul className="submenu">
                            <li className={manu === "/blogs" ? "active" : ""}><Link href="/blogs" className="sub-menu-item">Bloglar</Link></li>
                            <li className={manu === "/blog-sidebar" ? "active" : ""}><Link href="/blog-sidebar" className="sub-menu-item">Blog Kenar Çubuğu</Link></li>
                            <li className={manu === "/blog-detail" ? "active" : ""}><Link href="/blog-detail" className="sub-menu-item">Blog Detay</Link></li>
                        </ul>
                    </li> */}

                    <li className={`${["/iletisim"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/iletisim">İletişim</Link>
                    </li>
                </ul>
            </div>
        </div>
        <style jsx>{`
            .logo {
                display: flex;
                align-items: center;
                text-decoration: none;
            }

            .logo-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }

            .logo-icon {
                width: 2rem;
                height: 2rem;
                color: #1e3a5f;
                flex-shrink: 0;
            }

            .logo-text {
                display: flex;
                flex-direction: column;
                gap: 0.125rem;
            }

            .logo-title {
                font-size: 1.25rem;
                font-weight: 700;
                color: #1e3a5f;
                line-height: 1.2;
                letter-spacing: 0.5px;
            }

            .logo-subtitle {
                font-size: 0.625rem;
                font-weight: 400;
                color: #1e3a5f;
                line-height: 1.2;
                opacity: 0.8;
            }

            @media (max-width: 991px) {
                .logo-subtitle {
                    display: none;
                }

                .logo-title {
                    font-size: 1rem;
                }

                .logo-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }

            @media (max-width: 768px) {
                .logo-content {
                    gap: 0.5rem;
                }
            }
        `}</style>
    </header>
    )
}