import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import ShowSocialIcons from '@/Components/ShowSocialIcons'

export default function Homepage() {
  return (
    <>
    {/* Navbar */}
   <div className='flex justify-evenly flex-row flex-wrap py-2 items-center grow-0'>
      
      <div className='flex items-center gap-4 justify-center '>
        <Link className='font-bold text-black italic text-2xl' href="https://www.youtube.com">BooksMandala</Link>
        <div className='flex gap-4 justify-between items-center'>
          <p className='font-sans text-dim-gray hover:text-blue-900 text-lg'>Books</p>
          <img src="./images/dropdown.png" alt="" width={30}  />
        </div>
        <Link href={"/"} className='font-sans text-dim-gray text-lg hover:text-blue-900'>Deals</Link>
        
      </div>
        <div className='flex gap-5 justify-center  '>
          <form className="flex ">   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only dark:text-white">Search</label>
                    <div className="flex relative items-center border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-200 dark:border-gray-600">
                      {/* <!-- Search Icon --> */}
                      <div className="flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 dark:text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                      </div>
                      {/* <!-- Input Field --> */}
                      <input 
                        type="search" 
                        id="default-search" 
                        className="block w-full py-3 ps-10 pe-28 text-md bg-gray-50 dark:bg-slate-200 dark:text-gray-600 outline-none" 
                        placeholder="what are you looking for...?" 
                        required 
                        dir="ltr"
                      />
                      {/* <!-- Submit Button (flex-shrink to avoid overflow) --> */}
                      <button 
                        type="submit" 
                        className="text-gray-600 px-4 mx-5  py-1 rounded-lg bg-slate-200 dark:border-gray-600 border border-gray-300 ms-auto">
                        Submit
                      </button>
                    </div>
          </form>
         
        </div>
        <div className='flex  mr-5 px-2   gap-4 items-center'>
                <ShowSocialIcons src="./images/darkmode.png" link={''} classname={''}/>
                <ShowSocialIcons src="./images/shopping-cart.png" link={''} classname={''}/>
                <Link href={"/"} className='font-sans text-lg text-dim-gray hover:text-blue-600'>Login</Link>
                <p className='hover:bg-sky-blue px-2 py-2  text-dim-gray rounded-md'>रु NPR</p> 

                
        </div>
        


   </div>

   {/* body part */}
   <div className='h-full  ' >
        <div >
            <Footer/>
        </div>
   </div>

   {/* footerpart */}
  
    

   </>
  )
}
