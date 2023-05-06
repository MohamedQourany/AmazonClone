import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-22 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000 }>
        <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/61zgmqDeusL._SX3000_.jpg" alt="" />
        </div>
        <div>
        <img loading='lazy' src="https://m.media-amazon.com/images/I/71IGpCILJjL._SX3000_.jpg" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/7102I1D+77L._SX3000_.jpg" alt="" />
        </div>
        </Carousel>
    </div>
  )
}

export default Banner