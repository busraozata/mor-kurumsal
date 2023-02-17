import React from 'react'
import "./Referances.scss"
import { useTranslation } from "react-i18next";

import dummyReferances from '../../../API/dummyReferances'
export default function Referances() {
    const { t } = useTranslation();
    return (
        <section className="referances" id='referances'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area">
                            <h2 className='title'>{t("ourCustomersTitle")}</h2>
                            <p>{t("ourCustomersText")}</p>
                        </div>
                    </div>
                </div>

                <div className="marquee-wrapper">
                    <div className="marquee">
                        {
                            dummyReferances.referances?.map((item, index) => {
                                return (
                                    <img src={item.img} className="img-fluid" alt="referance" key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </section>

    )
}
