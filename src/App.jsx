import React from 'react'
import Navbar from './component/Navbar'
import BannerSection from './section/BannerSection'
import QuoteSection from './section/QuoteSection'
import PortfolioSection from './section/PortfolioSection'
import Stories from './section/Stories'
import Awards from './section/Awards'
import About from './section/About'
import MyStyle from './section/MyStyle'
import Albums from './section/Albums'
import InstagramImage from './section/InstagramImage'
import WeddingTips from './section/WeddingTips'
import LocationList from './section/LocationList'
import ContactForm from './section/ContactForm'
import Footer from './section/Footer'
import FristAddSec from './section/FristAddSec'
import SecondAddSec from './section/SecondAddSec'
import ContactsSection from './section/ContactsSection'
import PricingQuoteSection from './section/PricingQuoteSection'

function App() {
    return (
        <>
            <Navbar />
            <BannerSection />
            <QuoteSection />
            <PortfolioSection />
            <Stories />
            <Awards />
            <FristAddSec />
            <About />
            <MyStyle />
            <PricingQuoteSection />
            <Albums />
            <SecondAddSec />
            <InstagramImage />
            <WeddingTips />
            <LocationList />
            <ContactsSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default App