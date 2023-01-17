import React from 'react'
import { Routes, Route } from "react-router-dom";
import AboutSection from '../Components/About/AboutSection';
import Blog from '../Components/Blog/Blog';
import Home from '../Pages/Home/Home';
import dummyNews from '../API/dummyNews';

export default function Routers() {
    let blogs = dummyNews.news
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<AboutSection />} />
            <Route path='/blog/:title' element={<Blog blogs={blogs} />} />
        </Routes>)
}
