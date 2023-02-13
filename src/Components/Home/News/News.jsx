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
import Moment from 'react-moment';
import moment from 'moment';
import Btn from '../../../UI/Btn/Btn';

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
                            loop={true}
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
                                const date = moment(item.time).format('DD MMM YYYY');
                                console.log(date);
                                /* let [first, last, ...child] = serviceItem.title.split(" "); */
                                let [first, last] = date.split(" ");
                                console.log(first, last);
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <div className="top">
                                                    <div className="img-wrapper">
                                                        <Link to={`/blog/${item.title}`} ><img src={item.img} className='img-fluid' alt={item.title} /></Link>
                                                    </div>
                                                </div>
                                                <div className="body">
                                                    <div className='d-flex'>

                                                        <div className='date d-flex flex-column'>
                                                            <span className='text-white'>{first}</span>
                                                            <span className='text-white'>{last}</span>
                                                        </div>
                                                        <div>
                                                            <Link to={`/blog/${item.title}`}> <h6>{item.title}</h6></Link>

                                                        </div>
                                                    </div>
                                                    <p>{item.smallContent}</p>
                                                    {/*  <Link to={`/blog/${item.title}`} className='btn'>{item.buttonTitle}  <HiOutlineArrowNarrowRight /></Link> */}
                                                    <div className="link-div">
                                                        <Btn route={`/blog/${item.title}`} link={`${item.title}`} title="Devamını Oku..." />
                                                    </div>
                                                </div>
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
