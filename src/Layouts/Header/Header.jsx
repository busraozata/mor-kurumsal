import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "./Header.scss"

export default function Header() {
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
    return (
        <header className={`${isScrolled ? `sticky` : ``} `}>
            <div className="container">
                <div className="header-inner d-flex align-items-center justify-content-between">
                    <div className="img-wrapper">
                        <a href="/">
                            <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/mor-logo.png'} alt="logo-img" />
                        </a>
                    </div>
                    <button id="toggle-btn" onClick={handleMenuToggle}><i className="fa fa-bars"></i> </button>

                    <div
                        className={`navigation ${menuOpen ? "active" : ""}`} >
                        <ul className="menu-area d-flex justify-content-center align-items-center">
                            <li className="nav-item"><Link to="banner" className="nav-link active" >Ana Sayfa</Link></li>
                            <li className="nav-item"><Link to="about" className="nav-link">Kurumsal</Link></li>
                            <li className="nav-item"><Link to="solutions" className="nav-link">Çözümlerimiz</Link></li>
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
                            <li><a href="/"><span>TR</span><img src="./img/tr.png" class="img-fluid" alt="" /></a></li>
                            <li><a href="/"><span>ENG</span><img src="./img/eng.png" class="img-fluid" alt="" /></a></li>


                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}
