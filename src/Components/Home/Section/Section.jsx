import React from 'react'
import "./Section.scss"
export default function Section() {
    return (
        <section className='we'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>Sizi tanıyan, ayrılamayacağınız, keyifli bir öğrenme ortamı: Mor Kurumsal</h4>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mb-5">
                        <div className="box d-flex flex-column align-items-center text-center">
                            <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/1icons.svg'} alt="banner-img" />
                            <span className='first'>20+</span>
                            <span> yıl deneyim</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mb-5">
                        <div className="box d-flex flex-column align-items-center text-center">
                            <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/2icons.svg'} alt="banner-img" />
                            <span className='first'>500+</span>
                            <span>müşteri</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mb-5">
                        <div className="box d-flex flex-column align-items-center text-center">
                            <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/3icons.svg'} alt="banner-img" />
                            <span className='first'>3 Milyon+</span>
                            <span>Aktif Kullanıcı</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mb-5">
                        <div className="box d-flex flex-column align-items-center text-center">
                            <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/4icons.svg'} alt="banner-img" />
                            <span>Türkiye’nin İLK ve en yaygın Öğrenme Deneyimi Platformu</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
