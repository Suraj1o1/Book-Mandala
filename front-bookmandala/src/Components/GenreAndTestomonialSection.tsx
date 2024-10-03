
import React from 'react'
import { Icon } from 'lucide-react-native';
import { profile } from 'console';
type Props = {

    img:string
    
    profile:string
}
export default function GenreAndTestomonialSection({profile,img,}:Props) {

  return (
    <>
      <div className= '  flex  flex-col gap-3 my-4 items-center  text-center content-center '>
      <div className='rounded-xl  hover:bg-blue-900'><img src={img} alt="" width={50} height={50} /></div>
      <p className='font-sans  text-dim-gray hover:text-blue-900 text-lg'>{profile}</p>
      </div>
      
      
       
        
    
    </>
  )
}
