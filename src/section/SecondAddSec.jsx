import React from 'react'
import Advertisement from '../component/Advertisement'
import { getImageUrl } from '../utils/getImage'

function SecondAddSec() {
    return (
        <Advertisement
            onHeaeding="Looking for a professional photographer?"
            onBackground={getImageUrl("advertisement-2.jpeg")}
        />
    )
}

export default SecondAddSec