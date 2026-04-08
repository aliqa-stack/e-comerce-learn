import React from 'react'
import { FaSearch } from "react-icons/fa"
import { GiAbstract015 } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from './Darkmode';
import { FaArrowDownLong } from "react-icons/fa6";


const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    }, {
      id: 2,
      name: "Top Rated",
      link: "/Services",
    },
 {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
 {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    }, {
      id: 5,
      name: "Electronics",
      link: "/#",
    },

 


]

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
   {
    id: 2,
    name: "Best Selling",
    link: "/#",
  }, {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
]

const Navbar = () => {
  return (
    <div className='shadow-md bg-white  dark:bg-gray-900 dark:text-white duration-200 relative z-10'>
      {/* upper nav */}
        <div className='bg-orange-300/40 py-3 sm:py-0'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2 ml-4'><GiAbstract015 />shope</a>
                </div>
            
            {/* search bars */}
               <div className='flex justify-between items-center gap-4 dark:text-white'>
                <div className='relative group hidden sm:block '>
                    <input type="text" placeholder="Search..." className='w-[200px] sm:w-[200px] group-hover:w-[300px] m-2 transition-all duration-200 border rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-500 bg-white text-black dark:text-white dark:bg-gray-800 dark:border-gray-500' />
                    <FaSearch className='text-gray-500 group-hover:text-orange-500 absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
                     <button 
            onClick={() => alert("ordering not out y")} className='bg-gradient-to-r from-orange-500 to-orange-400 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                <span className='group-hover:block hidden transition-all duration-300'>order</span><FaCartShopping className='text-white text-xl drop-shadow-sm cursor-pointer'/>
            </button>
            {/* dark mode switch */}
              <div>
                <Darkmode />
              </div>

            </div>
       
            </div>
        </div>
        {/* lower nav */}
        <div className='flex justify-center '>
          <ul className='sm:flex hidden items-center gap-4'>
            {
              Menu.map((data) => (
                <li key={data.id}>
                    <a href={data.link} className='inline-block px-4 hover:text-orange-400 duration-300'>{data.name}</a>
                </li>

              ))
            }

            <li className='group relative cursor-pointer'>
              <a href="#" className='flex items-center gap-[2px] py-2'>Trending 
                <span><FaArrowDownLong
                 className='transition-all duration-200 group-hover:rotate-180'/></span>
                 </a>
                 <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black'>
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a href={data.link}
                        className='inline-block w-full rounded-md p-2 hover:bg-orange-400/20'>
                          {data.name}
                        </a>
                      </li>


                    ))}
                  </ul>
                 </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar