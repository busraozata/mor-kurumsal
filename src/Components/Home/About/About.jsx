/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./About.scss"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';


export default function About() {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='title'>Hakkımızda</h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/close-up-businessman-with-digital-tablet.jpg'} alt="banner-img" />
                        </div>
                    </div>
                    <div className="col-lg-6 right-area">
                        <div className="about-content">
                            <h3>Enocta Katalog Web Sitesi Açıldı!</h3>
                            <p>
                                <span>7000+ Türkçe dijital içerikle ilgili tüm detaylar artık Enocta Katalog web sitesinde!</span>
                                Özgür öğrenme noktası Enocta Katalog’da aradığınızı bulmak artık çok kolay! Nasıl mı? Yeni “web sayfamız”da yer alan uygun filtrelerle, gelişim alanlarınıza, öğrenme tercihlerinize, hedef kitlenize uygun eğitimleri çok daha hızlı bularak seçim yapabilecek ve anında teklif talep edebileceksiniz. Ayrıca günden güne yeni eğitimlerle zenginleşen Enocta Katalog ve kurumunuza özel canlı webinar seçenekleri sunan Çevrimiçi Katalog’u çok daha yakından takip etme fırsatı bularak, yenilikleri kaçırmayacaksınız!
                            </p>
                           
                            <a href="/#" className='btn'>Daha fazlası için  <HiOutlineArrowNarrowRight/> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
