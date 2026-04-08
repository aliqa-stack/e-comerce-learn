import React from 'react'
import img1 from '../../assets/hero/product.jpg'
import { MdDescription } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

const productsData = [

    {
        id:1,
        img: img1,
        title: "product",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officiis!",
    },
       {
        id:2,
        img: img1,
        title: "product",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officiis!",
    },
       {
        id:3,
        img: img1,
        title: "product",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officiis!",
    },
]

const TopProducts = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className=' mb-30 mx-w-[600px] '>
                <p className='text-xl text-orange-400'>Top Rated Products</p>
                <h1 className='font-bold text-3xl'>Best Products</h1>
                <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatib</p>
                
            </div>
            {/* body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-25 md:gap-5 place-items-center'>
                {productsData.map((data) => (
                    <div key={data.id} className=' rounded-md bg-white dark:bg-gray-600 text-center dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-orange-400 hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                        <div className='h-[100px]'>
                            <img src={data.img} alt="" className=' max-w-[140px] block mx-auto transform -translate-y-20'/>
                        </div>
                        <div className='p-4 text-center'>
                                
                            <div className='flex items-center justify-center my-5 w-full'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>  
                            <h2 className='font-bold text-lg mt-2'>{data.title}</h2>
                                <p className='text-gray-500 text-sm mt-1'>{data.description}</p>
                                <button className='bg-amber-400 hover:scale-105 duration-300 rounded-full text-white py-1 px-4 mt-4 group-hover:bg-white group-hover:text-orange-400'>add to cart</button>
                            
                         </div>
                        
                </div>
                ))}
              

                
            </div>

        </div>
    </div>
  )
}

export default TopProducts;