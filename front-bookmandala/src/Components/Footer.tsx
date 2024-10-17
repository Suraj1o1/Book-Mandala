"use client"

import ShowSocialIcons from '@/Components/ShowSocialIcons'
import Footer2 from '@/Utils/FooterData'
import GetPlatformIcon from '@/Utils/GetPlatformIcon'
import GetPlatformLink from '@/Utils/GetPlatformLink'
import SocialPlatformData from '@/Utils/SocialPlatformData'
import Link from 'next/link'
import React, { useState } from 'react'
import FooterItems, { Content } from './FooterItems'
import Buttons from './Buttons'
import { useColorMode } from '@/ContextApi/ColourContext'


export default function Footer() {
    

  // state to call the method for the icons
  const [Icondata, setIcondata] = useState(SocialPlatformData())
  // const QuickLinkData = QuickLinks();
  // const AboutData = About();
  // const GenreData = Genres();
  // const OtherData = Others();

  const footerdata=Footer2()
  const {islightmode,}=useColorMode()

  return (
    <>
    <div className=' flex flex-col   '>
            <div className=' flex justify-evenly flex-wrap'>
             <div className='flex flex-col  gap-6'>
                  <FooterItems heading={footerdata.footertopic.topic1}/> 
                   {footerdata.QuickLinks.map((item) => (
                  <Content key={item.content} content={item.content} />
                  
                   ))}
             </div>
             <div className='flex flex-col  gap-6'>
                  <FooterItems heading={footerdata.footertopic.topic2}/> 
                   {footerdata.About.map((item) => (
                  <Content key={item.content} content={item.content} />
                  
                   ))}
             </div>
             <div className='flex flex-col  gap-6'>
                  <FooterItems heading={footerdata.footertopic.topic3}/> 
                   {footerdata.Genres.map((item) => (
                  <Content key={item.content} content={item.content} />
                  
                   ))}
             </div>
             <div className='flex flex-col  gap-6'>
                  <FooterItems heading={footerdata.footertopic.topic4}/> 
                   {footerdata.Others.map((item) => (
                  <Content key={item.content} content={item.content}  />
                  
                   ))}
             </div>
             
            



              <div className=' flex flex-col sm:mt-9 md:mt-0 lg:mt-0'>
                  <div className='flex  gap-1'>
                    <span className={islightmode?'text-black font-inter font-bold text-lg':'text-snow font-inter font-bold text-lg'}>Signup and </span>
                    <span className='text-red-600 font-inter font-bold text-lg'> unlock 15% OFF</span>

                  </div>
                  <span className={islightmode?'text-black font-inter font-bold text-lg':'text-snow font-inter font-bold text-lg'}>On Your First Purchase</span>

                 <p className='text-dim-gray font-inter text-sm'> Opt in to our newsletter on BooksMandala for exclusive</p>
                 <p className='text-dim-gray font-inter text-sm'>deals, updates, and more!</p>
                 <div className='flex gap-2 mt-2'>
                      <Buttons classname={'bg-light-yellow hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-md border-gray-300 hover:bg-blue- text-blue-600 font-bold py-2 px-10 mb-3'} title={'Get 15% OFF FREE'} onclick={() => {}} />
                      <Buttons classname={'bg-blue-900 hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-md border-gray-300 hover:bg-blue- text-snow font-bold py-2 px-5 mb-3'} title={'SIGN UP'} onclick={() => {}} />

                 </div>
              
              </div>



          


                  
                 

                  
                  

            </div>
            



            <div className='font-inter text-dim-gray flex-wrap  flex justify-between gap-10 mt-16 '>
      <div className='  flex justify-evenly items-center gap-5 mx-24 text-dim-gray text-xs '>
            <p>@ 2024 Booksmandala</p>
            
                <Link className='' href="https://www.youtube.com"> *Terms of Use</Link>
                <Link href="https://www.youtube.com">*Privacy Policy</Link>
                
            
      </div>
      <div className=' font-verdana text-dim-gray text-xs flex justify-evenly items-center gap-5 mr-10  '>
            <p>Connect with us : </p>
            {Icondata.map((Icondata) => (
              <ShowSocialIcons click={() => {}} src={GetPlatformIcon(Icondata.src) || ''}  link={GetPlatformLink(Icondata.platform) || '#'} classname='rounded-full'/>
            ))}
            
      </div>
    </div>
    </div>

    
    </>
  )
}
