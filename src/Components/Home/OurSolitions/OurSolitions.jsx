import React from 'react'
import "./OurSolitions.scss"
import dummyOurSolutions from '../../../API/dummyOurSolitions'
import { useTranslation } from "react-i18next";

export default function OurSolitions() {
    const { t, i18n, ready } = useTranslation();

    if (!ready) return 'loading translations...';

    const Solutiouns = t('Solutiouns', { returnObjects: true });
    return (
        <>
        {/* <section className="solutions" id='solutions'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area">
                                <h2 className='title'>{dummyOurSolutions.title}</h2>
                                <p>{dummyOurSolutions.content}</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className="row">
                                {dummyOurSolutions.solutions?.map((item, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-4 mb-5" key={index}>
                                            <div className="box">
                                                <div className="box-title">

                                                    {index < 10 &&
                                                        <span>0{index + 1}</span>
                                                    }

                                                </div>
                                                <h5>{item.title}</h5>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}
