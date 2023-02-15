import React, { useEffect } from 'react'
import "./AboutSection.scss"
import dummyAbout from '../../API/dummyAbout'
import HeadTitle from '../../Common/HeadTitle/HeadTitle'
import AboutNews from './AboutNews/AboutNews'
import { useTranslation } from "react-i18next";

export default function AboutSection() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { t } = useTranslation();

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
                            <h2 className='title'>{t("about.title")}</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-wrapper">
                                <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/close-up-businessman-with-digital-tablet.jpg'} alt="banner-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 right-area">
                            <div className="about-content">
                                <h3>{t("about.titleTwo")}</h3>
                                <p>
                                    <span>{t("about.smallTitle")}</span>
                                    {t("about.desc")}
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-12 mt-5">
                            <p> {t("about.bigText")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <AboutNews />
        </>

    )
}
