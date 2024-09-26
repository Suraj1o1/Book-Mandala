"use client"

import ShowSocialIcons from '@/Components/ShowSocialIcons'
import GetPlatformIcon from '@/Utils/GetPlatformIcon'
import GetPlatformLink from '@/Utils/GetPlatformLink'
import SocialPlatformData from '@/Utils/SocialPlatformData'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Footer() {
    

  // state to call the method for the icons
  const [Icondata, setIcondata] = useState(SocialPlatformData())

 

  return (
    <div className='font-tahoma text-dim-gray flex-wrap  flex justify-between px-8 py-8 items-center'>
      <div className='  flex justify-evenly items-center gap-5'>
            <p>@ 2024 Booksmandala</p>
            
                <Link href="https://www.youtube.com"> *Terms of Use</Link>
                <Link href="https://www.youtube.com">*Privacy Policy</Link>
                
            
      </div>
      <div className=' font-verdana text-dim-gray flex justify-evenly items-center gap-5'>
            <p>Connect with us : </p>
            {Icondata.map((Icondata) => (
              <ShowSocialIcons src={GetPlatformIcon(Icondata.src) || ''}  link={GetPlatformLink(Icondata.platform) || '#'} classname='rounded-full'/>
            ))}
            
      </div>
    </div>
  )
}
