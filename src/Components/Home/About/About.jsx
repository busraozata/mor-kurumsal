/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./About.scss"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import dummyAbout from "../../../API/dummyAbout";
import { Link } from 'react-router-dom';
import Btn from '../../../UI/Btn/Btn';

export default function About() {
    return (
        <section className='about' id='about'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    
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
                            <div className="link-div">
                                <Btn route={`${dummyAbout.buttonPath}`} title="Devamını Oku..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
