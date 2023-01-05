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
            <div class="container">
                <div class="header-inner d-flex align-items-center justify-content-between">
                    <div class="img-wrapper">
                        <a href="index.html">
                            <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/mor-logo.png'} alt="logo-img" />
                        </a>
                    </div>
                    <button id="toggle-btn" onClick={handleMenuToggle}><i class="fa fa-bars"></i> </button>

                    <div
                        className={`navigation ${menuOpen ? "active" : "" }`} >
                        <ul class="menu-area d-flex justify-content-center align-items-center">
                            <li class="nav-item"><Link to="banner"  class="nav-link active" >Ana Sayfa</Link></li>
                            <li class="nav-item"><Link to="about" class="nav-link">Kurumsal</Link></li>
                            <li class="nav-item"><Link to="solutions" class="nav-link">Çözümlerimiz</Link></li>
                            <li class="nav-item"><Link to="news" class="nav-link">Haberler</Link></li>
                            <li class="nav-item"><Link to="referances" class="nav-link">Referanslar</Link></li>
                            <li class="nav-item"><Link to="contact" class="nav-link"> İletişim</Link></li>
                        </ul>

                    </div>

                </div>
            </div>
        </header>
    )
}
