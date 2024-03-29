import React from 'react'

import {client} from '../lib/Client' 
import {Product,FooterBanner,HeroBanner} from '../components'

const Home = (props) => {
  return (
    <div>
      <HeroBanner heroBanner={props.bannerData.length && props.bannerData[0]}/>

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
       {props.products?.map((product) => 
       
       <Product key={product._id} product={product}/>

       )}
      </div>


      <FooterBanner footerBanner={props?.bannerData[0]}/>

    </div>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props:{products, bannerData}
  }
}

export default Home;