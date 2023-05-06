import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket,removeFromBasket } from '@/slices/slices/basketSlice'
function CheckoutProduct({id,title,description,category,image,price,rating}) {
    const dispatch = useDispatch()
    const addItemToBasket = ()=>{
        const product = {id,title,description,category,image,price,rating}
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket = ()=>{
        dispatch(removeFromBasket({id}))
    }
    return (
    <div className='grid grid-cols-5'>
        <Image src={image} height={200} width={200} objectFit='contain'/>
        {/* Mid */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <p className='uppercase'>{category}</p>
            <div className='flex'>
                {Array(rating).fill().map((_,i)=>(
                    <StarIcon key={i} className='h-5 text-yellow-500' />
                ))}
            </div>
            <p className='text-xs mt-2 mb-2 line-clamp-3'>{description}</p>
            <p>{price} usd</p>
        </div>
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button mt-auto' onClick={addItemToBasket}>Add</button>
        <button className="button mt-auto" onClick={removeItemFromBasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
