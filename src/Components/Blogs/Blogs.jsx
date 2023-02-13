import React from 'react'
import HeadTitle from '../../Common/HeadTitle/HeadTitle';
import Widget from '../../Layouts/Widgets/Widget';
import "./Blogs.scss"
import dummyNews from '../../API/dummyNews';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Btn from '../../UI/Btn/Btn';

export default function Blogs() {
    return (
        <>
            <HeadTitle
                title="Blog"
                image="/img/close-up-businessman-with-digital-tablet.jpg"
            />
            <section className='blogs'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                {dummyNews.news?.map((item, index) => {
                                    const date = moment(item.time).format('DD MMM YYYY');
                                    console.log(date);
                                    /* let [first, last, ...child] = serviceItem.title.split(" "); */
                                    let [first, last] = date.split(" ");
                                    console.log(first, last);
                                    return (
                                        <div className="col-lg-6 col-md-6">
                                            <div className="card">
                                                <div className="top">
                                                    <div className="img-wrapper">
                                                        <Link to={`/blog/${item.title}`} ><img src={item.img} className='img-fluid' alt={item.title} /></Link>
                                                    </div>
                                                </div>
                                                <div className="body">
                                                    <div className='d-flex'>

                                                        <div className='date d-flex flex-column'>
                                                            <span className='text-white'>{first}</span>
                                                            <span className='text-white'>{last}</span>
                                                        </div>
                                                        <div>
                                                            <Link to={`/blog/${item.title}`}> <h6>{item.title}</h6></Link>

                                                        </div>
                                                    </div>
                                                    <p>{item.smallContent}</p>
                                                    {/* <Link to={`/blog/${item.title}`} className='btn'>{item.buttonTitle}  <HiOutlineArrowNarrowRight /></Link> */}
                                                    <div className='link-div'>
                                                        <Btn link={`/blog/${item.title}}`} title="Devamını Oku..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blogs-area">
                                <Widget />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
