import React, { useEffect } from 'react'
import "./Blog.scss"
import { useParams } from 'react-router-dom';
import Widget from '../../Layouts/Widgets/Widget';
import HeadTitle from '../../Common/HeadTitle/HeadTitle';
import Moment from 'react-moment';
import moment from 'moment';
export default function Blog({ blogs }) {
    let { id } = useParams();
    console.log(blogs, "test");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    /* const date = moment(item.time).format('DD MMM YYYY'); */
    /*  console.log(date); */
    /* let [first, last, ...child] = serviceItem.title.split(" "); */
    /*  let [first, last] = date.split(" ");
     console.log(first, last); */
    return (
        <>
            <HeadTitle
                title="Blog"
                image="/img/close-up-businessman-with-digital-tablet.jpg"
            />
            <section className='blog-page'>
                <div className="container">
                    {
                        blogs.filter((item) => item.id === id).map((item, index) => {
                            const date = moment(item.time).format('DD MMM YYYY');
                            return (
                                
                                <div className="row" key={index}>

                                    <div className="col-lg-8">
                                        <img className='img-fluid w-100' src={item.img} alt="blog-img" />
                                        <div className="content">

                                            <span>{date}</span>
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
                                    <div className="col-lg-4">
                                        <Widget />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>

    )
}
