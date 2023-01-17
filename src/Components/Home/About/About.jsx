/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./About.scss"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import dummyAbout from "../../../API/dummyAbout";
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section className='about' id='about'>
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

                            <Link to={dummyAbout.buttonPath} className='btn'>{dummyAbout.buttonTitle}  <HiOutlineArrowNarrowRight /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
