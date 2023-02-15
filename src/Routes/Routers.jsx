import React from 'react'
import { Routes, Route } from "react-router-dom";
import AboutSection from '../Components/About/AboutSection';
import Blog from '../Components/Blog/Blog';
import Home from '../Pages/Home/Home';
import dummyNews from '../API/dummyNews';
import Blogs from '../Components/Blogs/Blogs';
import { useTranslation } from "react-i18next";
export default function Routers() {
    const { t, i18n, ready } = useTranslation();
    if (!ready) return 'loading translations...';

    const blogs = t('news', { returnObjects: true });
    /* let blogs = dummyNews.news */
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<AboutSection />} />
            <Route path='/blogs' element={<Blogs />} />
            {/* <Route path='/blog/:title' element={<Blog blogs={blogs} />} /> */}
            <Route path='/blog/:id' element={<Blog blogs={blogs} />} />
        </Routes>)
}
