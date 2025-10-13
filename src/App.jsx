import React from 'react'
import Navbar from './component/Navbar'
import BannerSection from './section/BannerSection'
import QuoteSection from './section/QuoteSection'
import PortfolioSection from './section/PortfolioSection'
import Stories from './section/Stories'
import Awards from './section/Awards'
import Advertisement from './section/Advertisement'
import About from './section/About'
import MyStyle from './section/MyStyle'
import Albums from './section/Albums'
import InstagramImage from './section/InstagramImage'
import WeddingTips from './section/WeddingTips'
import LocationList from './section/LocationList'

function App() {
    return (
        <>
            <Navbar />
            <BannerSection />
            <QuoteSection />
            <PortfolioSection />
            <Stories />
            <Awards />
            <Advertisement />
            <About />
            <MyStyle />
            <QuoteSection />
            <Albums />
            <Advertisement />
            <InstagramImage />
            <WeddingTips />
            <LocationList />
        </>
    )
}

export default App