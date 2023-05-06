import Image from 'next/image'
import React from 'react'

function CatCard() {
  return (
    <>
        <div className='cursor-pointer relative flex flex-col m-5 bg-white z-30 p-10'>
        <h4 className='my-3 text-xl font-extrabold'>
    Kitchen appliances | Buy with installments*
    </h4>    <Image src="/kit.jpg" height={600} width={600} style={{objectFit:"contain"}}/>
    <p className='text-xs my-2 line-clamp-2'></p>
</div>
<div className='cursor-pointer relative flex flex-col m-5 bg-white z-30 p-10'>
<h4 className='my-3 text-xl font-extrabold'>
New in Shoes |<br></br> Buy with installments*
    </h4>
    <Image src="/j.jpg" height={600} width={600} style={{objectFit:"contain"}}/>
</div>
<div className='cursor-pointer relative flex flex-col m-5 bg-white z-30 p-10'>
<h4 className='my-3 text-xl font-extrabold'>
Security cameras | Starting 250 EGP
    </h4>
    <Image src="/c.jpg" height={200} width={200} style={{objectFit:"cover"}}/>
    <div className='flex'>
    </div>
    <p className='text-xs my-2 line-clamp-2'></p>
</div>
<div className='cursor-pointer relative flex flex-col m-5 bg-white z-30 p-10'>
<h4 className='my-3 text-xl font-extrabold'>
Makeup equipments | New arrivals
    </h4>
    <Image src="/mu.jpg" height={600} width={600} style={{objectFit:"cover"}}/>
    <div className='flex'>
    </div>
    <p className='text-xs my-2 line-clamp-2'></p>
</div>
    </>
  )
}

export default CatCard