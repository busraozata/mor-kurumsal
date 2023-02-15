import React, { useEffect } from 'react'
import "./AboutSection.scss"
import dummyAbout from '../../API/dummyAbout'
import HeadTitle from '../../Common/HeadTitle/HeadTitle'
import AboutNews from './AboutNews/AboutNews'
export default function AboutSection() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <HeadTitle
                title="Hakkımızda"
                image="/img/close-up-businessman-with-digital-tablet.jpg"
            />
            <section className='about-page' id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className='title'>{dummyAbout.title}</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-wrapper">
                                <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/close-up-businessman-with-digital-tablet.jpg'} alt="banner-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 right-area">
                            <div className="about-content">
                                <h3>{dummyAbout.titleTwo}</h3>
                                <p>
                                    <span>{dummyAbout.smallTitle}</span>
                                    {dummyAbout.desc}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutNews />
        </>

    )
}
