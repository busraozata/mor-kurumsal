import React from 'react'
import About from '../../Components/Home/About/About'
import Contact from '../../Components/Home/Contact/Contact'
import Hero from '../../Components/Home/Hero/Hero'
import News from '../../Components/Home/News/News'
import OurSolitions from '../../Components/Home/OurSolitions/OurSolitions'
import Referances from '../../Components/Home/Referances/Referances'
import Section from '../../Components/Home/Section/Section'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <OurSolitions />
            <News />
            <Section />
            <Referances />
            <Contact />
        </>
    )
}
