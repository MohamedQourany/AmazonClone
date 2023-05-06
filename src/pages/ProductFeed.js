import React from 'react'
import Product from './Product'
import CatCard from './CatCard';
import { Carousel } from 'react-responsive-carousel';

function ProductFeed({products,categories}) {
  return (
    <>
            <div className="grid grid-flow-row-dense -mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        <CatCard/>
          </div>
          <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          <img src="Capture_EN.PNG" className='md:col-span-full m-auto' alt="" />
          </div>
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
        {products && products.slice(0,9).map(({id,title,description,category,image,price})=>
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
        {products && products.slice(6,products.length).map(({id,title,description,category,image,price})=>
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
