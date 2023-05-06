import React from 'react'
import Product from './Product'
import CatCard from './CatCard';
import { Carousel } from 'react-responsive-carousel';

function ProductFeed({products,categories}) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ded2ee0c (main)
    <>
            <div className="grid grid-flow-row-dense -mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        <CatCard/>
          </div>
          <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          <img src="Capture_EN.PNG" className='md:col-span-full m-auto' alt="" />
          </div>
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
        {products && products.slice(0,9).map(({id,title,description,category,image,price})=>
<<<<<<< HEAD
=======
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
        {products && products.slice(0,4).map(({id,title,description,category,image,price})=>
>>>>>>> origin/main
=======
>>>>>>> ded2ee0c (main)
        <Product
        key={id}
        id={id}
        title={title}
        description={description}
        category={category}
        image={image}
        price={price}
        />
        )}
        <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />
<<<<<<< HEAD
<<<<<<< HEAD
        {products && products.slice(6,products.length).map(({id,title,description,category,image,price})=>
=======
        <div className='md:col-span-2'>
        {products && products.slice(4,5).map(({id,title,description,category,image,price})=>
>>>>>>> origin/main
=======
        {products && products.slice(6,products.length).map(({id,title,description,category,image,price})=>
>>>>>>> ded2ee0c (main)
        <Product
        key={id}
        id={id}
        title={title}
        description={description}
        category={category}
        image={image}
        price={price}
        />
        )}
    </div></>
  )
}

export default ProductFeed;
