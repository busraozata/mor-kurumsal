import React from 'react'
import "./Hero.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import OurSolutiouns from './OurSolitiouns/OurSolutiouns';


export default function Hero() {
    const { t,  ready } = useTranslation();

    if (!ready) return 'loading translations...';

    const banners = t('banner', { returnObjects: true });
    return (
        <>
            <section className='banner' id="home">
                <Swiper className="mySwiper">
                    {banners.map((item) => (
                        <SwiperSlide style={{
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
                                            <h1>{item.title} {/* {t("title")} */}</h1>
                                            <p>
                                                {item.content}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </section>

            <OurSolutiouns />
        </>
    )
}
