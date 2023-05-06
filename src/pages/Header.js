import Image from 'next/image'
import React, { useState } from 'react'
import {MenuIcon,SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '@/slices/slices/basketSlice';
function Header() {
    const { data: session } = useSession();
    const router = useRouter()
    const items = useSelector(selectItems)
      return (
    <header>
        {/* Top Nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image src='https://links.papareact.com/f90'
                onClick={()=>router.push('/')}
                width={100}
                height={40}
                objectFit= "contain"
                className='cursor-pointer'/>
            </div>
            {/* Search */}
            <div className='hidden sm:flex flex-col mx-2 cursor-pointer text-white items-start'>
                <p className='text-sm'>Deliver To Muhamed</p>
                <p className='text-xs'>Maadi</p>
            </div>
            <div className=' hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input placeholder='Search Amazon.eg' className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                <SearchIcon className='h-12 p-4'/>
            </div>
            {/* Right */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6'>
                <div className="cursor-pointer flex flex-row font-extrabold">
                <img width={20}
                height={15} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png" />
                    <select className="bg-transparent mx-1 font-extrabold" name="" id="">
                        <option value="EN" className="bg-transparent">    EN</option>        
                    </select>
                </div>
                <div onClick={!session ? signIn : signOut} className='cursor-pointer link'>
                    <p>{session ? `Hello, ${session.user.name}`: 'Sign In'}</p>
                    <p className='font-extrabold md:text-sm'>Account & List</p>
                </div>
                <div className='cursor-pointer align-bottom link'>
                    <p className='font-extrabold md:text-sm'>Orders</p>
                </div>
                <div onClick={()=>router.push('/Checkout')} className='cursor-pointer relative flex items-center link'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                        {items.length}</span>
                    <ShoppingCartIcon className='h-10'/>
                    <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                </div>
            </div>
        </div>
        {/* Bottom Nav */}
        <div className='flex items-center space-x-3 text-white bg-amazon_blue-light'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1'/>
                All</p>
                <p className='link'>Today's Deals</p>
                <p className='link'>Fashion</p>
                <p className="link"><span><span class="link shrink">muham...</span>'s amazon.eg</span></p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Video Games</p>
                <p className="link hidden lg:inline-flex">Mobile Phones</p>
                <p className='link hidden lg:inline-flex'>Appliances</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <img className='hidden lg:inline-flex' src="https://m.media-amazon.com/images/G/42/3P/400x39_EN_N11._CB643596067_.png" alt="" />
        </div>
    </header>
  )
}

export default Header