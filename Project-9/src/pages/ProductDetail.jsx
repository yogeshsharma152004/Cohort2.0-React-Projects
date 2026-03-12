import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

   const productData =  useContext(ProductDataContext);


   const {productId} = useParams();

   let selectedProduct = '';

   if(productData.length > 0){
    selectedProduct = productData.find((elem) => {
    return  elem.id ==  productId 
   })
   }



  return (
    <div className='bg-black min-h-screen flex justify-center items-center p-6 '>
        <div className='bg-[#3e3b3b] rounded-2xl max-w-5xl w-full p-6 md:p-10 flex flex-col md:flex-row gap-10  '>

        <div className=' p-6 bg-amber-50 rounded-2xl w-full md:w-1/3 flex justify-center items-center'>
            <img className='h-60 md:h-80 object-contain ' src={selectedProduct.image} alt="" />
            
        </div>

        <div className='bg-amber-50 rounded-2xl p-6 text-center md:text-left w-full md:w-2/3  flex flex-col justify-center'>
          
            <h2 className='text-lg md:text-xl font-semibold'>{selectedProduct.title}</h2>
            <h5 className='mt-4 text-lg md:text-xl font-semibold'>Price :- ${selectedProduct.price}</h5>
            <p className='mt-6 text-sm md:text-lg'>Detail :- {selectedProduct.description}</p>

           
            
        </div>
          
        </div>
    </div>
  )
}

export default ProductDetail
