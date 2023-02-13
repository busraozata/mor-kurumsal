import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import dummyOurSolutions from '../../../../API/dummyOurSolitions'
import { Autoplay } from "swiper";

import "./OurSolutiouns.scss"

export default function OurSolutiouns() {
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
                    {dummyOurSolutions.solutions?.map((item, index) => {
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
