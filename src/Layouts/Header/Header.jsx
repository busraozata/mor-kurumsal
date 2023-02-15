import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from "react-i18next";
import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import "./Header.scss"

export default function Header() {

    const { t, i18n, ready } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false); //Header scroll
    const [active, setActive] = useState(-1); //Active , Pasive
    const [menuOpen, setMenuOpen] = useState(false); //Menu open, close
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    //Click open , close menu
    const handleMenuToggle = () => {
        setMenuOpen((p) => !p);
    };

    const handleMenuToggleTest = (lng) => {
        i18n.changeLanguage(lng);
        console.log(i18n.changeLanguage(lng),"dil");
    };

    return (

        <>
            <header className={`${isScrolled ? `sticky` : ``} `}>
                <div className="top-header w-100">
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className='d-flex'>
                                    <li><a href="tel:0 (212) 466 29 20">0 (212) 466 29 20</a></li>
                                    <li><a href="mailto:info@morkurumsal.com">info@morkurumsal.com</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                                <div className="social-media">
                                    <ul className='d-flex align-items-center'>
                                        <li><a href="/#"><RiLinkedinFill /></a></li>
                                        <li><a href="/#"><AiOutlineTwitter /></a></li>
                                        <li><a href="/#"><FaFacebookF /></a></li>
                                        <li><a href="/#"><AiOutlineInstagram /></a></li>
                                        <li><a href="/#"><AiFillYoutube /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="header-inner d-flex align-items-center justify-content-between">
                        <div className="img-wrapper">
                            <a href="/">
                                {/* <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/mor-logo.png'} alt="logo-img" /> */}
                                <div className="logo">
                                    <h6>MOR</h6>
                                    <span>KURUMSAL DANIŞMANLIK</span>
                                </div>
                            </a>
                        </div>
                        <button id="toggle-btn" onClick={handleMenuToggle}><i className="fa fa-bars"></i> </button>

                        <div
                            className={`navigation ${menuOpen ? "active" : ""}`} >
                            <ul className="menu-area d-flex justify-content-center align-items-center">
                                <li className="nav-item"><a href="/" className="nav-link">Ana Sayfa</a></li>
                                <li className="nav-item"><Link to="about" className="nav-link">Kurumsal</Link></li>
                                <li className="nav-item"><Link to="news" className="nav-link">Haberler</Link></li>
                                <li className="nav-item"><Link to="referances" className="nav-link">Referanslar</Link></li>
                                <li className="nav-item"><a href="/blogs" className="nav-link">Blog</a></li>
                                <li className="nav-item"><Link to="contact" className="nav-link"> İletişim</Link></li>
                            </ul>
                            <div class="dropdown lang-area d-xl-none d-block">
                                <button class="btn d-flex align-items-center dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>TR</span> <img src="./img/tr.png" class="img-fluid" alt="" />
                                </button>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a href="/"><span>TR</span><img src="./img/tr.png" class="img-fluid" alt="" /></a></li>
                                    <li><a href="/"><span>ENG</span><img src="./img/eng.png" class="img-fluid" alt="" /></a></li>


                                </ul>
                            </div>
                        </div>

                        <div class="dropdown lang-area d-xl-block d-none">
                            <button class="btn d-flex align-items-center dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>TR</span> <img src="./img/tr.png" class="img-fluid" alt="" />
                            </button>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button onClick={() => handleMenuToggleTest("tr")}><span>TR</span><img src="./img/tr.png" class="img-fluid" alt="" /></button></li>
                                <li><button onClick={() => handleMenuToggleTest("en")}><span>EN</span><img src="./img/eng.png" class="img-fluid" alt="" /></button></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </header>
        </>
    )
}
