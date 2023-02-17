import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./AboutNews.scss"
import { Link } from 'react-router-dom';
import Contact from '../../Home/Contact/Contact';
import { Autoplay} from "swiper";
import moment from 'moment';
import { useTranslation } from "react-i18next";

export default function AboutNews() {
    const { t, ready } = useTranslation();
    if (!ready) return 'loading translations...';

    const news = t('news', { returnObjects: true });
    return (
        <>
            <section className='aboutNews'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2>{t("blogTitle")}</h2>
                            <p className='text'>{t("blogText")}</p>
                        </div>
                        <div className="col-lg-8">
                            <Swiper
                                spaceBetween={20}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1000: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1400: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 70,
                                    },
                                }}
                                loop={true}
                                className="mySwiper"
                            >
                                {news.map((item, index) => {
                                    const date = moment(item.time).format('DD MMM YYYY');
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="box">
                                                <span>{date}</span>
                                                <Link to={`/blog/${item.id}`}> <h6>{item.title}</h6></Link>
                                                <p>{item.smallContent.substring(0, 140)}...</p>

                                            </div>
                                        </SwiperSlide>
                                    )
                                })}


                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    )
}
