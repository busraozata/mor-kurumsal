/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./About.scss"
import dummyAbout from "../../../API/dummyAbout";
import Btn from '../../../UI/Btn/Btn';
import { useTranslation } from "react-i18next";
export default function About() {
    const { t } = useTranslation();
    return (
        <section className='about' id='about'>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="img-wrapper">
                            <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/close-up-businessman-with-digital-tablet.jpg'} alt="banner-img" />
                        </div>
                    </div>
                    <div className="col-lg-6 right-area">
                        <div className="about-content d-flex flex-column justify-content-between h-100">
                            <div>
                                <h3>{/* {dummyAbout.titleTwo} */} {t("about.titleTwo")}</h3>
                                <p>
                                    <span>{/* {dummyAbout.smallTitle} */}  {t("about.smallTitle")}</span>
                                    {/* {dummyAbout.desc}  */}{t("about.desc")}
                                </p>
                            </div>
                            <div className="link-div">
                                <Btn route={`${dummyAbout.buttonPath}`} title={`${t("about.buttonTitle")}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
