'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { FiBookmark, FiDribbble, FiFacebook, FiInstagram, FiLinkedin, FiShoppingCart, FiTwitter } from '../assets/icons/vander';
import { fetchContactInfo } from '@/api/contact';

export default function Footer(){
    const [contact, setContact] = useState({
        companyName: 'AhiKariyer',
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: ''
    });

    useEffect(() => {
        const getContactInfo = async () => {
            try {
                const response = await fetchContactInfo();
                if (response?.data?.attributes) {
                    const apiContact = response.data.attributes;
                    setContact(prevContact => ({
                        ...prevContact,
                        companyName: apiContact.companyName || prevContact.companyName,
                        facebook: apiContact.facebook || prevContact.facebook,
                        instagram: apiContact.instagram || prevContact.instagram,
                        linkedin: apiContact.linkedin || prevContact.linkedin,
                        twitter: apiContact.twitter || prevContact.twitter
                    }));
                }
            } catch (error) {
                console.error('Footer bilgileri alınırken hata oluştu:', error);
            }
        };

        getContactInfo();
    }, []);

    return(
        <footer className="bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="py-5 footer-bar">
                            <div className="row align-items-center">
                                <div className="col-sm-3">
                                    <div className="text-center text-sm-start">
                                        <Link href=""><Image src='/images/logo-light.png' width={120} height={28} alt=""/></Link>
                                    </div>
                                </div>
        
                                <div className="col-sm-9 mt-4 mt-sm-0">
                                    <ul className="list-unstyled footer-list terms-service text-center text-sm-end mb-0">
                                        <li className="list-inline-item my-2"><Link href="/" className="text-foot fs-6 fw-medium me-2"><i className="mdi mdi-circle-small"></i> Ana Sayfa</Link></li>
                                        <li className="list-inline-item my-2"><Link href="/hizmetlerimiz" className="text-foot fs-6 fw-medium me-2"><i className="mdi mdi-circle-small"></i> Hizmetlerimiz</Link></li>
                                        <li className="list-inline-item my-2"><Link href="/hakkimizda" className="text-foot fs-6 fw-medium me-2"><i className="mdi mdi-circle-small"></i> Hakkımızda</Link></li>
                                        <li className="list-inline-item my-2"><Link href="/fiyatlandirma" className="text-foot fs-6 fw-medium"><i className="mdi mdi-circle-small"></i> Fiyatlarımız</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4 footer-bar">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="text-sm-start">
                                <p className="mb-0 fw-medium">© {new Date().getFullYear()} {contact.companyName}. <Link href="https://codereltech.com/" target="_blank" className="text-reset">Codereltech</Link> tarfından yapılmıştır.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                                {contact.linkedin && (
                                    <li className="list-inline-item">
                                        <Link href={contact.linkedin} target="_blank" className="rounded">
                                            <FiLinkedin className="fea icon-sm align-middle"/>
                                        </Link>
                                    </li>
                                )}
                                {contact.facebook && (
                                    <li className="list-inline-item">
                                        <Link href={contact.facebook} target="_blank" className="rounded">
                                            <FiFacebook className="fea icon-sm align-middle"/>
                                        </Link>
                                    </li>
                                )}
                                {contact.instagram && (
                                    <li className="list-inline-item">
                                        <Link href={contact.instagram} target="_blank" className="rounded">
                                            <FiInstagram className="fea icon-sm align-middle"/>
                                        </Link>
                                    </li>
                                )}
                                {contact.twitter && (
                                    <li className="list-inline-item">
                                        <Link href={contact.twitter} target="_blank" className="rounded">
                                            <FiTwitter className="fea icon-sm align-middle"/>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
