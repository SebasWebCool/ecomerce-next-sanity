import Link from 'next/link'
import React from 'react'

import {urlFor} from '../lib/Client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img className='hero-banner-image' src={urlFor(heroBanner.image)} alt="" />
      </div>

      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type='button'> {heroBanner.buttonText}</button>
        </Link>
      </div>
      <div className='desc'>
        <h5>Description</h5>
        <p>{heroBanner.desc}</p>
      </div>
      

    </div>
  )
}

export default HeroBanner
