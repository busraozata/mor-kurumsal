/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./News.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import dummyNews from '../../../API/dummyNews';
import { Link } from 'react-router-dom';

export default function News() {

    return (
        <section className="news" id="news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area">
                            <h2 className='title'>{dummyNews.title}</h2>
                            <p>{dummyNews.content}</p>
                        </div>
                    </div>
                    <div className="swiper-area" /* style={{paddingLeft:"20rem"}} */>
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                            /* loop */
                            className="mySwiper"
                        >
                            {dummyNews.news?.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="img-wrapper">
                                                    <img src={item.img} className='img-fluid' alt={item.title} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>{item.time}</span>
                                                <h6>{item.title}</h6>
                                                <p>{item.smallContent}</p>
                                                <Link to={`/blog/${item.title}`} className='btn'>{item.buttonTitle}  <HiOutlineArrowNarrowRight /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}


                        </Swiper>
                    </div>
                </div>
            </div>

        </section>
    )
}
