import React from 'react'
import Advertisement from '../component/Advertisement'
import { getImageUrl } from '../utils/getImage'

function FristAddSec() {
    return (
        <Advertisement 
        onHeaeding= "Want to hire me to capture your big day?"
        onBackground={getImageUrl("advertisement-1.jpeg")}
        />
    )
}

export default FristAddSec
