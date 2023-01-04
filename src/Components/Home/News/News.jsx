/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./News.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function News() {
    return (
        <section className="news" id="news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area">
                            <h2 className='title'>Haberler</h2>
                            <p>Enocta ile ilgili son gelişmeler, müşterilerimiz ve iş ortaklarımız ile ilgili en güncel haberlere buradan ulaşabilirsiniz.</p>
                        </div>
                    </div>
                    <div className="swiper-area" /* style={{paddingLeft:"20rem"}} */>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    /* loop */
                    className="mySwiper"
                >
                   <SwiperSlide>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="img-wrapper">
                                    <img src="https://uploads-ssl.webflow.com/604e5c4008cd1b39ec1a9cee/6399accb86e7bc5e4662d67c_ISO_10002_Duyurusu_Haber_Enocta-min.jpg" className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span>14.12.2022</span>
                                <h6>ISO 10002 Müşteri Memnuniyeti Sertifikamızı aldık!</h6>
                                <p>Enocta olarak sektörümüzün ilklerinden birine daha imza atarak ISO 10002 Müşteri Memnuniyeti Sertifikamızı almanın mutluluğunu yaşıyoruz!</p>
                                <a href="#" className='btn'>Devamını Oku  <HiOutlineArrowNarrowRight/></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="img-wrapper">
                                    <img src="https://uploads-ssl.webflow.com/604e5c4008cd1b39ec1a9cee/6399accb86e7bc5e4662d67c_ISO_10002_Duyurusu_Haber_Enocta-min.jpg" className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span>14.12.2022</span>
                                <h6>ISO 10002 Müşteri Memnuniyeti Sertifikamızı aldık!</h6>
                                <p>Enocta olarak sektörümüzün ilklerinden birine daha imza atarak ISO 10002 Müşteri Memnuniyeti Sertifikamızı almanın mutluluğunu yaşıyoruz!</p>
                                <a href="#" className='btn'>Devamını Oku  <HiOutlineArrowNarrowRight/></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="img-wrapper">
                                    <img src="https://uploads-ssl.webflow.com/604e5c4008cd1b39ec1a9cee/6399accb86e7bc5e4662d67c_ISO_10002_Duyurusu_Haber_Enocta-min.jpg" className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span>14.12.2022</span>
                                <h6>ISO 10002 Müşteri Memnuniyeti Sertifikamızı aldık!</h6>
                                <p>Enocta olarak sektörümüzün ilklerinden birine daha imza atarak ISO 10002 Müşteri Memnuniyeti Sertifikamızı almanın mutluluğunu yaşıyoruz!</p>
                                <a href="#" className='btn'>Devamını Oku  <HiOutlineArrowNarrowRight/></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="img-wrapper">
                                    <img src="https://uploads-ssl.webflow.com/604e5c4008cd1b39ec1a9cee/6399accb86e7bc5e4662d67c_ISO_10002_Duyurusu_Haber_Enocta-min.jpg" className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span>14.12.2022</span>
                                <h6>ISO 10002 Müşteri Memnuniyeti Sertifikamızı aldık!</h6>
                                <p>Enocta olarak sektörümüzün ilklerinden birine daha imza atarak ISO 10002 Müşteri Memnuniyeti Sertifikamızı almanın mutluluğunu yaşıyoruz!</p>
                                <a href="#" className='btn'>Devamını Oku  <HiOutlineArrowNarrowRight/></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="img-wrapper">
                                    <img src="https://uploads-ssl.webflow.com/604e5c4008cd1b39ec1a9cee/6399accb86e7bc5e4662d67c_ISO_10002_Duyurusu_Haber_Enocta-min.jpg" className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span>14.12.2022</span>
                                <h6>ISO 10002 Müşteri Memnuniyeti Sertifikamızı aldık!</h6>
                                <p>Enocta olarak sektörümüzün ilklerinden birine daha imza atarak ISO 10002 Müşteri Memnuniyeti Sertifikamızı almanın mutluluğunu yaşıyoruz!</p>
                                <a href="#" className='btn'>Devamını Oku  <HiOutlineArrowNarrowRight/></a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
                </div>
            </div>
       
        </section>
    )
}
