'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogsSidebars from "../../componants/blogsSidebars";
import Footer from "../../componants/footer";
import Navbar from "../../componants/navbar";
import ScrollTop from "../../componants/scrollTop";
import { fetchBlogPostById } from "@/api/blog";
import { blogData } from "../../data/data";

export default function BlogDetail(props){

    const [error, setError] = useState(null);
    const [similarJobs, setSimilarJobs] = useState([]);
    const [blogPostData, setblogPostData] = useState();

    useEffect(() => {
        const fetchData = async () => { 

            const blogDetail = await fetchBlogPostById(props.params.id)
            setblogPostData(blogDetail);
            console.log(blogDetail);

        };
        fetchData();
    }, [props.params.id]);

    

    let data = blogData.find((blog)=>blog.id === parseInt(props.params.id))
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <span className="badge bg-primary">{data?.tag }</span>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-4">{data?.title}</h5>

                            <ul className="list-inline text-center mb-0">
                                <li className="list-inline-item mx-4 mt-4">
                                    <span className="text-white-50 d-block">Author</span>
                                    <Link href="#" className="text-white title-dark">AhİKariyer</Link>
                                </li>

                                <li className="list-inline-item mx-4 mt-4">
                                    <span className="text-white-50 d-block">Date</span>
                                    <span className="text-white title-dark">{blogPostData?.releaseDate}</span>
                                </li>

                                <li className="list-inline-item mx-4 mt-4">
                                    <span className="text-white-50 d-block">Read Time</span>
                                    <span className="text-white title-dark">5 min read</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item"><Link href="/blogs">Blogs</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Detail</li>
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
                    <div className="col-lg-8 col-md-7">
                        <div className="card border-0 shadow rounded overflow-hidden">
                            { blogPostData?.image.url && <Image src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + blogPostData?.image.url} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}}  className="img-fluid" alt=""/>}

                            <div className="card-body">
                                {blogPostData?.content && <div dangerouslySetInnerHTML={{ __html: blogPostData.content }} />}
                            </div>
                        </div>
                    </div>
                    <BlogsSidebars/>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}