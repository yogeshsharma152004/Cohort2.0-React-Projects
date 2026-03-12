import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

    let productData = useContext(ProductDataContext);

    let renderData = ''

    if(productData.length > 0){
        renderData = productData.map((elem,index) => {
      return <Link  key={index} className='block w-full p-6 bg-amber-50 text-center rounded-lg hover:scale-105 transition' to={`/products/${elem.id}`}>

          
          <div className=' flex flex-col items-center'>
            <img className='h-52 object-contain' src={elem.image} alt="" />
            <h2 className='text-lg font-semibold mt-8'>{elem.title}</h2>
            </div>
         

        </Link>
    
    })
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 p-6 bg-black min-h-screen'>
    
    {renderData}
   
    </div>
  )
}

export default Products
