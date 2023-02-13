import React from 'react'
import "./Hero.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import dummyBanner from "../../../API/dummyBanner";
import OurSolutiouns from './OurSolitiouns/OurSolutiouns';


export default function Hero() {
    return (
        <>
            <section className='banner' id="home">
                <Swiper className="mySwiper">
                    {dummyBanner?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} style={{
                                // eslint-disable-next-line no-useless-concat
                                backgroundImage: "url(" + "/img/businessman-showing-changes-report.png" + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className="container">
                                    <div className="content">
                                        <div className="row align-items-center">
                                            <div className="col-lg-12">
                                                <h1>{item.title}</h1>
                                                <p>
                                                    {item.content}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>

            <OurSolutiouns />
        </>
    )
}
