import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Autoplay } from "swiper";
import "./Widgets.scss"
import moment from 'moment';
import { useTranslation } from "react-i18next";

export default function Widget() {
    const { t, i18n, ready } = useTranslation();
    if (!ready) return 'loading translations...';

    const news = t('news', { returnObjects: true });
    return (
        <div className="widgets">
            <div className="last-blogs">
                <h3>Benzer Yenilikler</h3>
                <Swiper
                    direction={"vertical"}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper lastblog"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {news.map((item, index) => {
                        const date = moment(item.time).format('DD MMM YYYY');
                        return (
                            <SwiperSlide key={index}>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="img-wrapper">
                                            <Link to={`/blog/${item.id}`}>
                                                <img src={item.smallImg} className='img-fluid' alt={item.title} />
                                            </Link>
                                            

                                        </div>

                                    </div>
                                    <div className="col-lg-7">
                                        <span>{date}</span>
                                        <Link to={`/blog/${item.id}`}> <h6>{item.title}</h6></Link>
                                        <Link to={`/blog/${item.id}`} className='btn'>{item.buttonTitle}  <HiOutlineArrowNarrowRight /></Link>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
            <div className="form">
                <h3>İletişimde Kalın!</h3>
                <p>En yeni haber yazılarımızı anında okumak için iletişim bilgilerinizi bizimle paylaşın.
                </p>
                <form action="">
                    <div className="form-area">
                        <div className="row">
                            <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='Adınız Soyadınız' />
                                </div>
                            </div>

                            <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='E-Posta Adresiniz' />
                                </div>
                            </div>
                            <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='Kurum Adı' />
                                </div>
                            </div>
                            <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='Telefon Numaranız' />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <button className='btn'>Gönder</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
