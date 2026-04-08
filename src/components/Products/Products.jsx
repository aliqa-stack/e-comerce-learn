import React from 'react'
import img1 from '../../assets/hero/shirt.png'
import img2 from '../../assets/hero/shirt2.png'
import img3 from '../../assets/hero/shirt3.png'

const ProductsData = [
    {
        id:1,
        img: img1,
        title: 'shirt',
        price: "Rp. 100.000",
        rating: 4.5,
        color: "red",
    },
       {
        id:2,
        img: img2,
        title: 'shirt',
        price: "Rp. 100.000",
        rating: 4.5,
        color: "red",
    },
   {
        id:3,
        img: img3,
        title: 'shirt',
        price: "Rp. 100.000",
        rating: 4.5,
        color: "red",
    },
       {
        id:4,
        img: img1,
        title: 'shirt',
        price: "Rp. 100.000",
        rating: 4.5,
        color: "red",
    },
       {
        id:5,
        img: img1,
        title: 'shirt',
        price: "Rp. 100.000",
        rating: 4.5,
        color: "red",
    }




]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container mx-auto'>
            {/*  headers */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-orange-400'>top selling products</p>
                <h1 className='text-3xl font-bold'>products</h1>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officiis!</p>
            </div>


            <div className='bg-gray-100 dark:bg-gray-600  py-5'>
                <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-2'>
                    {ProductsData.map((data) => (
                        <div key={data.id} >
                            <div className='bg-orange-400  shadow-[5px_5px_7px_0px_#808080] dark:bg-white p-2 hover:scale-105 transition-all duration-300'>
                            <img src={data.img} alt="" className='h-[220px] w-[150px] object-fill rounded-md' />

                            </div>
                            
                            <div className='my-4'>
                            <h1 className='font-bold font-xl '>{data.title}</h1>
                            <p>{data.price}</p>

                            </div>
                            
                        </div>
                        
                        
                    ))}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Products