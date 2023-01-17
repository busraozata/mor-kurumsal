import React from 'react'
import "./Hero.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import dummyBanner from "../../../API/dummyBanner";


export default function Hero() {
    return (
        <section className='banner' id="home">
            <Swiper className="mySwiper">
                {dummyBanner?.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="container">
                                <div className="content">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <h1>{item.title}</h1>
                                            <p>
                                                {item.content}
                                            </p>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="img-wrapper">
                                                {/* <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/businessman-showing-changes-report.png'} alt="banner-img" /> */}
                                                <img className='img-fluid' src={item.img} alt="banner-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}
