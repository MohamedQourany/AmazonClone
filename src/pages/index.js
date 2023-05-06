import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Header'
import Banner from './Banner'
import ProductFeed from './ProductFeed'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [products,setProducts] = useState([])
  useEffect(()=>{
     fetch("https://fakestoreapi.com/products")
      .then((res)=>res.json())
      .then(res=>setProducts(res))
      console.log(products)
  },[])
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/categories")
    .then((res)=>res.json())
    .then(res=>setCategories(res))
    console.log(categories)
},[])
  return (
      <div className='bg-gray-100'>
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
    {/* Banner */}
    <Banner/>
    {/* Product Feed */}
    <ProductFeed products={products} categories={categories}/>
    
      </main>
      </div>
  )
}
