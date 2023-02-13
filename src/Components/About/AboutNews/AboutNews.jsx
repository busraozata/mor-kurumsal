import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./AboutNews.scss"
import dummyNews from '../../../API/dummyNews';
import { Link } from 'react-router-dom';
import Contact from '../../Home/Contact/Contact';
import { Autoplay} from "swiper";
import Moment from 'react-moment';
import moment from 'moment';
export default function AboutNews() {
    return (
        <>
            <section className='aboutNews'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2>Mor Kurumsal’da Neler Oluyor?</h2>
                            <p className='text'>Mor Kurumsal ile ilgili güncel haberlere buradan ulaşabilirsiniz.</p>
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
                                {dummyNews.news?.map((item, index) => {
                                    const date = moment(item.time).format('DD MMM YYYY');
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="box">
                                                <span>{date}</span>
                                                <Link to={`/blog/${item.title}`}> <h6>{item.title}</h6></Link>
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
