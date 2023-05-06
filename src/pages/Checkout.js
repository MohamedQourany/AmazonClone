import React from 'react'
import Header from './Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '@/slices/slices/basketSlice'
import CheckoutProduct from './CheckoutProduct'
import { useRouter } from 'next/router'
import AmazonFooter from './AmazonFooter'

function Checkout() {
  const items = useSelector(selectItems)
  const Total = useSelector(selectTotal)
  const router = useRouter()

  return (
    <div className='bg-gray-100'>
        <Header/>
        <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left */}
    <div className='flex-grow m-5 shadow-sm relative'>
        <Image
         src='https://m.media-amazon.com/images/G/42/Sunrise/Events/2023/RMD23/LU/WLP_Background_Desktop.gif'
         width={1020}
         height={250}
         objectFit='contain'/>
         <h1 className="absolute top-5 mx-3 text-xl text-center text-white">Enjoy Free Delivery With Prime</h1>
         <button className='absolute top-3 left-60 text-xl text-center text-white button'>Prime</button>
        <div className="flex flex-col p-5 space-y-10 bg-white">
        <h1 className='text-3xl pb-4'>
        {items.length === 0 ? "Your Basket Is Empty" : "Shopping Basket"}
        </h1>
          {items.map((item,id)=>(
              <CheckoutProduct              
             id={item.id}
             title={item.title}
             description={item.description}
             rating={item.rating}
             category={item.category}
             image={item.image}
             price={item.price}
              />
          ))}
        </div>
    </div>
    <div>
    </div>
        {/* Right */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
            <h2>Subtotal ({items.length}items):
            <span className='font-bold'>
              {Total} USD
            </span>
            </h2>
            <button role='link' className='button w-100' onClick={()=>{alert("Complete")}}>ProceedToBuy</button>
            </>
          )}
        </div>
        </main>
        <AmazonFooter/>
    </div>
  )
}

export default Checkout
