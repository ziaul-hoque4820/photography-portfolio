import React from 'react'
import BannerPhoto from '../assets/advertisement-2.jpeg'
import Advertisement from '../component/Advertisement'

function SecondAddSec() {
    return (
        <Advertisement
            onHeaeding="Looking for a professional photographer?"
            onBackground={BannerPhoto}
        />
    )
}

export default SecondAddSec