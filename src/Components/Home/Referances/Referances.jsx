import React from 'react'
import "./Referances.scss"
import dummyReferances from '../../../API/dummyReferances'
export default function Referances() {
    return (
        <section className="referances" id='referances'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area">
                            <h2 className='title'>{dummyReferances.title}</h2>
                            <p>{dummyReferances.content}</p>
                        </div>
                    </div>
                </div>

                <div class="marquee-wrapper">
                    <div class="marquee">
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
