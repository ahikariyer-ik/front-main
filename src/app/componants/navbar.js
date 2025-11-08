'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { LuSearch } from "../assets/icons/vander";

export default function Navbar({navClass, navLight}){
    let [isOpen, setMenu] = useState(false);
    let [scroll, setScroll] = useState(false);
    let [search, setSearch] = useState(false);

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
        <div className="container-xl d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <Link className="logo" href="/">
                <span className="logo-light-mode">
                    <Image src='/images/logo-dark.png' width={120} height={40} className="l-dark" alt=""/>
                    <Image src='/images/logo-light.png' width={120} height={40} className="l-light" alt=""/>
                </span>
                <Image src='/images/logo-light.png' width={120} height={40} className="logo-dark-mode" alt=""/>
            </Link>
            <div className="menu-extras order-3 order-lg-2">
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

            <ul className="buy-button list-inline mb-0 order-2 order-lg-3 d-flex align-items-center">
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
    
            <div id="navigation" className="order-4 order-lg-2 ms-auto ms-lg-5" style={{display: isOpen ? 'block' : undefined}}>  
                <ul className="navigation-menu nav-right nav-light d-flex align-items-center gap-3 mb-0">
                    <li className={`${["/"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/">Ana Sayfa</Link>
                    </li>

                    <li className={`${["/blogs"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/blogs">Blog</Link>
                    </li>

                    <li className={`${["/iletisim"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/iletisim">İletişim</Link>
                    </li>

                    <li className={`${["/fiyatlandirma"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/fiyatlandirma">Fiyatlandırma</Link>
                    </li>

                    <li className={`${["/demo"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/demo">Demo</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}
