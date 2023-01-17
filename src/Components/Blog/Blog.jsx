import React from 'react'
import "./Blog.scss"
import { useParams } from 'react-router-dom';
export default function Blog({ blogs }) {
    let { title } = useParams();
    console.log(blogs, "test");
    return (
        <section className='blog-page'>
            <div className="container">
                {
                    blogs.filter((item) => item.title === title).map((item) => (
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="content">

                                    <span>{item.time}</span>
                                    <h2>{item.title}</h2>
                                    <p>
                                        {item.desc}
                                    </p>
                                    {item.materials?.map((mat, index) => {
                                        return (
                                            <div key={index}>
                                                <strong>{mat.title}</strong>
                                                {
                                                    mat.content && (
                                                        <ul>
                                                            <li>
                                                                {mat.content}
                                                            </li>
                                                        </ul>
                                                    )
                                                }

                                            </div>
                                        )
                                    })}


                                </div>
                            </div>
                            <div className="col-lg-6">
                                {/*  <img className='img-fluid' src={process.env.PUBLIC_URL + '/img/blog-img.jpg'} alt="banner-img" /> */}
                                <img className='img-fluid' src={item.img} alt="blog-img" />
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}
