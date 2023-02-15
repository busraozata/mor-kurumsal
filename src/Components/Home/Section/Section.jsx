import React from 'react'
import "./Section.scss"
import dummyWeUs from '../../../API/dummyWeUs'
import { useTranslation } from "react-i18next";

export default function Section() {
    const { t, i18n, ready } = useTranslation();
    if (!ready) return 'loading translations...';

    const weUs = t('weUs', { returnObjects: true });
    console.log(weUs);
    return (
        <section className='we'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>{weUs.title}</h4>
                    </div>
                    {
                        weUs.weUs?.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-3 col-6 mb-5" key={index}>
                                    <div className="box d-flex flex-column align-items-center text-center">
                                        <img className='img-fluid' src={item.img} alt="banner-img" />
                                        <span className='first'>{item.year}</span>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
