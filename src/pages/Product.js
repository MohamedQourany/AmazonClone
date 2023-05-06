import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '@/slices/slices/basketSlice'
import { useRouter } from 'next/router'
function Product({id,title,description,category,image,price}) {
    const dispatch = useDispatch()
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )
  const [hasPrime] = useState(Math.random() < 0.5)
  const addItemToBasket = ()=>{
    const product = {id,title,description,category,image,price};
    dispatch(addToBasket(product))
  }  
  const router = useRouter()
  return (
    <div className='cursor-pointer relative flex  flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <Image src={image} height={400} width={400} className='md:h-1/2' style={{objectFit:"contain"}}/>
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
            {Array(rating).fill().map((_, i)=>(
            <StarIcon className='h-5 text-yellow-500'/>
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <p>{price} USD</p>
        </div>
        {hasPrime && (
            <div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png" alt="" />
                <p className='text-xstext-gray-500'>Free Next Day Delivery</p>
            </div>
        )}
        <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product
