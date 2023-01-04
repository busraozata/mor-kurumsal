import React from 'react'
import "./Hero.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


export default function Hero() {
    return (
        <section className='banner' id="home">
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <div className="container">
                        <div className="content">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <h1>Gelişim Planlama Çözümü</h1>
                                    <p>
                                        Enocta Platform ile tam entegre çalışan bu sistemle, bir çalışan için öncelikli gelişim alanlarında (yetkinlikler, beceriler vb.) gelişim sürecinin bireysel olarak planlanmasına ve buradaki ihtiyaçlara en uygun gelişim çözümlerinin haritalanmasına olanak veriyoruz.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="img-wrapper">
                                        <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/businessman-showing-changes-report.png'} alt="banner-img" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="content">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <h1>Gelişim Planlama Çözümü</h1>
                                    <p>
                                        Enocta Platform ile tam entegre çalışan bu sistemle, bir çalışan için öncelikli gelişim alanlarında (yetkinlikler, beceriler vb.) gelişim sürecinin bireysel olarak planlanmasına ve buradaki ihtiyaçlara en uygun gelişim çözümlerinin haritalanmasına olanak veriyoruz.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="img-wrapper">
                                        <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/businessman-showing-changes-report.png'} alt="banner-img" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}
