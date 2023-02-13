import React from 'react'
import "./Btn.scss"
import { Link } from 'react-router-dom'
export default function Btn(link,route) {
    return (
        <div className='position-relative'>
            <Link to={`${link.route}`} className='btn-link'><span className='link-span'></span>{link.title}</Link>
        </div>
    )
}
