import React from 'react'
import "./Contact.scss"
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    return (
        <section className='contact' id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 left-area">
                        <h4>{t("formTitle")}</h4>
                        <span>{t("formText")}</span>
                        <form action="">
                            <div className="form-area">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder={t("name")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder={t("surname")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder={t("email")}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder={t("corparate")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder={t("phone")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                    <div className="mb-3 form-check d-flex">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">{t("approval")}</label>
                                    </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className='btn'>{t("button")}</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 d-lg-block d-none">
                        <div className="img-wrapper">
                            <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/contact.jpg'} alt="banner-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
