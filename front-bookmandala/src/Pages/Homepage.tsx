"use client"
import Link from 'next/link'
import React, { ReactNode, use, useRef, useState } from 'react'
import Footer from '../Components/Footer'
import ShowSocialIcons from '@/Components/ShowSocialIcons'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselData from '@/Utils/CarouselData'
import GenreAndTestomonialSection from '@/Components/GenreAndTestomonialSection'
import GenreandTestomonialApi from '@/Utils/GenreandTestomonialApi'
import GernreData from '@/Utils/GernreData'
import BestSellerAndNewarrivalSection, { Information } from '@/Components/BestSellerAndNewarrivalCard'
import BestSellerData, { Bestsales } from '@/Utils/BestSellerData'
import BestSellerAndNewarrivalCard from '@/Components/BestSellerAndNewarrivalCard'






export default function Homepage() {
  const [carouseldata, setCarouselData] = useState(CarouselData()); 
  const [genredata, setGenreData] = useState(GenreandTestomonialApi);
  const genre=GernreData()

  // for best sales
  const sellerandnewarrivalData=BestSellerData()
  const BestSellerInformation=Bestsales()
 
   

  let sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Accessing slickNext method on the Slider instance
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Accessing slickPrev method on the Slider instance
    }
  };

  var settings1 = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3.9,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            centrerMode: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centrerMode: true
          }
        }
      ]
     
      
    }
  // settings for Slider
  var settings= {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.9,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centrerMode: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centrerMode: true
        }
      }
    ]
  };

 

  return (
    <>
   
    {/* Navbar */}
   <div className='flex bg-white justify-evenly flex-wrap  flex-row  py-2 items-center '>
      
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

 
   

   <div className='bg-white flex flex-col grow px-1 '>
   <div className=" bg-white  flex itmes-center flex-col mx-4 my-6  px-1 py-1">

    <Slider {...settings}>
       
      <div className='px-4'><img className='rounded-lg' src="./images/belly.jpg" alt=""   /></div>
      <div className='px-4'><img className='rounded-lg' src="./images/Horse1.jpg" alt=""  /></div>
      <div className='px-4'><img className='rounded-lg h-80' src="./images/Richard2.jpg" alt=""/></div>
      <div className='px-4'><img className='rounded-lg h-80' src="./images/richard paul.jpg" alt=""  /></div>
      <div className='px-4'><img className='rounded-lg' src="./images/belly.jpg" alt=""  /></div>
      <div className='px-4'><img className='rounded-lg h-80' src="./images/Richard2.jpg" alt=""  /></div>
    </Slider>

      
    </div>
    {/* Genres section */}
    <div className=' flex flex-col' >
          <div className='flex flex-row items-center mx-9 justify-between '>
            <div className='flex flex-col gap-2 '>
              <p className='font-sans text-black font-bold hover:text-blue-900 text-2xl'>{genredata.Genre}</p>
              <p className='font-sans text-dim-gray font-bold hover:text-blue-900 text-sm '>{genredata.Genrediscription}</p>
            </div>
              
            <div className='flex items-center gap-3 cursor-pointer '>
            <img src="./Gifs/forward.gif"  alt="" onClick={next}   width={50} height={50} />
            <img src="./Gifs/backward.gif" alt="" onClick={previous} width={50} height={50} />
                
            </div>
          </div>
          <div className='flex  flex-col '>
          <div className='flex itmes-center flex-col  mx-8 my-6  px-1 py-1"  '>
          <Slider ref={slider => {
          sliderRef.current = slider;
        }} {...settings1}>
                    {genre.map((items) => (
                      <GenreAndTestomonialSection img={items.img} profile={items.GenreTitle}                    
                      />))}
                    
          </Slider>
          </div>
          </div>
          </div>


          {/* Best Seller Section */}

    <div className=' flex flex-col gap-2  '>
  
      <Information title={sellerandnewarrivalData.Information.Title1} discription={sellerandnewarrivalData.Information.Discription1} />

        <div className='flex justify-evenly flex-wrap  hover:bg-green-50 hover:opacity-95'>
              {BestSellerInformation.map((items) => (     
                <BestSellerAndNewarrivalSection img={items.img}  price={items.price} booktitle={items.booktitle} author={items.author}  />
              ))}
        </div>
            
    </div>


   
          



    

       
      
               
    </div>

   
   


        
   

   
  
    
   
   </>
  )
}


