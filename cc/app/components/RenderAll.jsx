// "use client"

import React from 'react'
import Link from 'next/link'

async function RenderAll(props) {
  async function getAllProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    return await res.json()
  }
  const allProducts = await getAllProducts()
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-8">
      {allProducts.map((product) => (
        <Link href={`/product/${product.id}`}>
          <div key={product.id} className='flex flex-col place-content-between items-center gap-3 p-4 bg-white rounded border-2 border-[#cbcbcb] hover:border-[#e78200d1] w-80 h-full'>
            <div className="h-60 bg-white">
              <img className="w-full h-full p-4" src={product.image} alt="product-img" />
            </div>
            <div className="self-start">
              <p className='font-light text-sm bg-white'>{product.title}</p>
              <p className='text-xl font-medium bg-white'>${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>

  )
}

export default RenderAll