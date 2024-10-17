import { useColorMode } from '@/ContextApi/ColourContext'
import React from 'react'
type Heading={
    heading:string
 
}
type Content={
    content:string
}

export default function FooterItems({heading }:Heading) {
  const {islightmode,}=useColorMode()

  return (
    <>

    <h1 className={islightmode?' text-black  font-inter text-lg ':'text-snow font-inter text-lg'}>{heading}</h1>
   
   
   
   
    </>
  )
}
export function Content({content}:Content){
    return(
       
            <p className='text-dim-gray font-inter'>{content}</p>
       
    )
}

