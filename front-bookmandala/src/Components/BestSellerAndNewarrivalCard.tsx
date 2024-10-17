import Link from 'next/link'
import React from 'react'
import Buttons from './Buttons'
import { useColorMode } from '@/ContextApi/ColourContext'
type Props={
    
    img:string
    
    price:string
    booktitle:string
    author:string
    
    
    
}
type Dis={
    title:string
    discription:string
}
export function Information({title,discription}:Dis) {
    const {islightmode,ToggleColorMode}=useColorMode();
    return (
       <div className='flex font-sansflex justify-between mx-10 items-center py-4'>
       <div className='flex flex-col flex-wrap gap-3'>
           <h1 className={islightmode?" text-black font-bold font-title text-2xl":"text-white font-bold font-title text-2xl"}>{title}</h1>
           <p className=' text-dim-gray font-title text-sm'>{discription}</p>
       </div>
            <div className='flex flex-wrap'>
            <Link className='text-dim-gray rounded-lg font-bold hover:bg-blue-200 px-2 py-2' href="/">Show All</Link>
        </div>
   
      
     
   
   
   </div>
    )
   }
export default function BestSellerAndNewarrivalCard({img,price,booktitle,author,}:Props) {
    const {islightmode,ToggleColorMode}=useColorMode();
    
  return (
    <>
    
        
    
        
                <div className=' flex flex-col py-2 gap-3 '>
                        {/* <img className='rounded-3xl ' src={img} alt="" width="190px" height={"250px"} style={{height:"300px "}} /> */}
                        <img className='rounded-lg w-52 h-80 ' src={img} alt="" />

                        <p className={islightmode?" text-black font-bold  font-title text-lg":"text-white font-bold  font-title text-lg"}>{booktitle}</p>
                        <p className=' text-dim-gray font-bold font-title  text-sm'>by {author}</p>
                        <p className={islightmode?" text-black font-bold font-title":"text-dim-gray font-bold font-title"}>{price}</p>

                        <div >
                    <Buttons title="Add To Cart" classname="bg-blue-whote hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-md border-gray-300 hover:bg-blue- text-blue-600 font-bold py-2 px-16 mb-3 "  onclick={() => {}}></Buttons>
                </div>
                </div>
                
        
        
      
       
    
    
   
    </>
  )
}






