/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Footer.scss"
import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t, ready } = useTranslation();
    if (!ready) return 'loading translations...';

    const news = t('news', { returnObjects: true });
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row row-area align-items-end">
                    <div className="col-lg-7 left-area">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="left">
                                    <ul>
                                        <li><a href="">Yönetim Sistemleri Bakış Açımız</a></li>
                                        <li><a href="">Site Kullanım Koşulları </a></li>
                                        <li><a href="">Gizlilik Politikası</a></li>
                                        <li><a href="">Çerez Politikası</a></li>
                                        <li><a href="">Kişisel Verilerin İşlenmesi Hakkında</a></li>
                                    </ul>
                                    <div className='row mb-2'>
                                        <div className="col-lg-3 col-md-1  col-2">
                                            <img src="https://uploads-ssl.webflow.com/604886a06525c66fe53035ec/6319e08cab8fa2447cb5a2fb_2022_TU%CC%88RKI%CC%87YE_IT.png" alt="" className='img-fluid' />
                                        </div>
                                        <div className="col-lg-3 col-md-1  col-2">
                                            <img src="https://uploads-ssl.webflow.com/604886a06525c66fe53035ec/6319e08c24229d138c11271d_logo-en-iyi-is-verenler.png" alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3  col-md-1 col-2">
                                            <img src="https://uploads-ssl.webflow.com/604886a06525c66fe53035ec/6319e08e1847b7aa24a3e381_logo-best-workplace.png" alt="" className='img-fluid' />
                                        </div>
                                        <div className="col-lg-3 col-md-1  col-2">
                                            <img src="https://uploads-ssl.webflow.com/604886a06525c66fe53035ec/6319e08e1847b7aa24a3e381_logo-best-workplace.png" alt="" className='img-fluid' />
                                        </div>
                                        <div className="col-lg-3  col-md-1 col-2">
                                            <img src="https://uploads-ssl.webflow.com/604886a06525c66fe53035ec/6319e08daa567c9a376954e5_iso.png" alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 contact-area">
                                <h3>İletişim</h3>
                                <div>
                                    <a href="mailto:info@enocta.com">info@morkurumsal.com</a>
                                </div>
                                <div>
                                    <a href="tel: 0 (212) 466 29 20"> 0 (212) 466 29 20</a>
                                </div>
                                <p>
                                    Zeytinlik Mah. Türkçü sok. Ferah Palas Apt. A blok No:16 K:4 D:9 Bakırköy / İstanbul
                                </p>
                                <div className="support">
                                    <h3>DESTEK</h3>
                                    <div>
                                        <a href="mailto:info@morkurumsal.com">info@morkurumsal.com</a>
                                    </div>
                                    <div>
                                        <a href="tel: 0 (212) 466 29 20"> 0 (212) 466 29 20</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="left-bottom-copyright d-flex justify-content-between">
                                    <span>Copyright © 2022 Mor Kurumsal All Rights Reserved.</span>
                                    <a href="www.wucize.com">
                                        <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/wucize-footer.png'} alt="banner-img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 right-area">
                        <div className="right-content">
                            <h3>{t("footerTitle")}</h3>
                            {news.map((item, index) => {
                                return (
                                    index < 2 && (
                                        <div className="blog" key={index}>
                                            <Link to={`/blog/${item.id}`}><h5>{item.title}</h5></Link>
                                            <span>09/01/2023</span>
                                        </div>
                                    )

                                )
                            })}

                           {/*  <a href="/#" className='btn'>Tüm İçerikler</a> */}
                            <div className="social-media">
                                <span>{t("followUs")}</span>
                                <ul className='d-flex align-items-center'>
                                    <li><a href="#"><RiLinkedinFill /></a></li>
                                    <li><a href="#"><AiOutlineTwitter /></a></li>
                                    <li><a href="#"><FaFacebookF /></a></li>
                                    <li><a href="#"><AiOutlineInstagram /></a></li>
                                    <li><a href="#"><AiFillYoutube /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
