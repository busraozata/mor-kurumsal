import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "./OurSolutiouns.scss"
import { useTranslation } from "react-i18next";
export default function OurSolutiouns() {
    const { t, ready } = useTranslation();

    if (!ready) return 'loading translations...';

    const Solutiouns = t('solutions', { returnObjects: true });
    return (
        <section className='solution'>
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
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
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {Solutiouns.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="box">
                                    {/*  <div className="box-title">

                                        {index < 10 &&
                                            <span>0{index + 1}</span>
                                        }

                                    </div> */}
                                    <img src={item.icon} className='img-fluid' alt="" />
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </section>
    )
}
