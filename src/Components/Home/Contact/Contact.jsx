import React from 'react'
import "./Contact.scss"
export default function Contact() {
    return (
        <section className='contact' id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 left-area">
                        <h4>Gelişim Planlama Çözümümüzden Hemen Faydalanın</h4>
                        <span>Detaylı bilgi almak için bize ulaşın.</span>
                        <form action="">
                            <div className="form-area">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder='Adınız' />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder='Soyadınız' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder='E-Posta Adresiniz' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder='Kurum Adı' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div className="form-group">
                                            <input type="text" className='form-control' placeholder='Telefon Numaranız' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                    <div className="mb-3 form-check d-flex">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Bu form ile toplanan kişisel verileriniz Enocta tarafından talebinize dair işlemlerin yerine getirilmesi ve paylaşmış olduğunuz iletişim adresi üzerinden tanıtım, bülten ve pazarlama içerikleri gönderilmesi amacıyla Kullanıcı Aydınlatma Metni çerçevesinde işlenebilecektir</label>
                                    </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className='btn'>Gönder</button>
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
