import React from 'react'
import BannerPhoto from '../assets/advertisement-1.jpeg'
import Advertisement from '../component/Advertisement'

function FristAddSec() {
    return (
        <Advertisement 
        onHeaeding= "Want to hire me to capture your big day?"
        onBackground={BannerPhoto}
        />
    )
}

export default FristAddSec
