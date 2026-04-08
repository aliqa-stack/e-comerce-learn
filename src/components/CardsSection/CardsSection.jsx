import React from 'react'
import jeruk from '../../assets/hero/jeruk.png'
import tws from '../../assets/hero/tws.png'
import laptop from '../../assets/hero/laptop.png'

const CardsSection = () => {
  return (
    <div className='py-8 mx-22'>
            <div className='container '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='py-4 pl-5 bg-gradient-to-br from-amber-400 to-amber-600 text-white relative rounded-3xl h-[250px] flex items-end'>
                        <div className=' '>
                            <div className='mb-4 z-10 relative'>
                                    <p className=' rounded text-4xl xl:text-5xl font-bold mb-8'>Orange</p>
                                    <p className=' rounded mb-4 text-xl text-gray-300'>Enjoy</p>
                                    <p className=' rounded text-2xl font-semibold mb-[2px]'>Enjoy</p>
                                    <button className='rounded-full bg-orange-600 px-5 py-1 mt-4 text-center'>press</button>
                                    
                            </div>
                        </div>
                        <img src={jeruk} alt="Jeruk" className='w-[250px] absolute bottom-0 mb-5 ' />
                    </div>
                    <div className='py-4 pl-5 bg-gradient-to-br from-black/85 to-gray-700 text-white relative rounded-3xl h-[250px] flex items-end'>
                        <div className=' '>
                            <div className='mb-4 z-10 relative'>
                                    <p className=' rounded text-4xl xl:text-5xl font-bold mb-8'>TWS</p>
                                    <p className=' rounded mb-4 text-xl text-gray-300'>Enjoy</p>
                                    <p className=' rounded text-2xl font-semibold mb-[2px]'>Enjoy</p>
                                    <button className='rounded-full bg-red-600 px-5 py-1 mt-4 text-center'>press</button>
                                    
                            </div>
                        </div>
                        <img src={tws} alt="TWS" className='w-[250px] absolute bottom-0 mb-5 ' />
                    </div>
                      <div className=' sm:col-span-2 py-4 pl-5 bg-gradient-to-br from-blue-500 to-gray-700 text-white relative rounded-3xl h-[250px] flex items-end'>
                        <div className=' '>
                            <div className='space-y-3 z-10 relative mb-4'>
                                    <p className=' rounded text-4xl xl:text-5xl font-bold mb-8'>Laptop</p>
                                    <p className=' rounded mb-4 text-xl text-gray-300'>Enjoy</p>
                                    <p className=' rounded text-2xl font-semibold mb-[2px]'>Enjoy</p>
                                    <button className='rounded-full bg-red-600 px-5 py-1 mt-4 text-center'>press</button>
                                    
                            </div>
                        </div>
                        <img src={laptop} alt="TWS" className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0 bottom-0 mb-5 ' />
                    </div>

                    
                </div>
            </div>
    </div>
  )
}

export default CardsSection