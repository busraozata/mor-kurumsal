import React from 'react'
import Routers from '../../Routes/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout() {
    return (
        <>
            <Header />
            <>
                <Routers />
            </>
            <Footer />
        </>
    )
}
