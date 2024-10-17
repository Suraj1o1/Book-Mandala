"use client";
import Link from "next/link";
import React, { ReactNode, use, useRef, useState } from "react";
import ShowSocialIcons from "@/Components/ShowSocialIcons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenreAndTestomonialSection from "@/Components/GenreAndTestomonialSection";
import GenreandTestomonialApi from "@/Utils/GenreandTestomonialApi";
import GernreData from "@/Utils/GernreData";
import BestSellerAndNewarrivalSection, {
  Information,
} from "@/Components/BestSellerAndNewarrivalCard";
import BestSellerData, { Bestsales, BestSellingAuthors, NepaliBooks } from "@/Utils/BestSellerData";
import Buttons from "@/Components/Buttons";
import UsedBooks from "@/Utils/UsedBooks";
import Footer from "@/Components/Footer";
import { useColorMode } from "@/ContextApi/ColourContext";

export default function Homepage() {
  
  const [genredata, setGenreData] = useState(GenreandTestomonialApi)
  const genre = GernreData();

  // for Light mode and darkmode
  // const { isDarkMode, toggleColorMode } = useColorMode();
  const { islightmode, toggleColorMode } = useColorMode();
 
  
  const bestsellers=BestSellingAuthors()
  // for nepali book 
  const neplaibooks=NepaliBooks()

  //  for usedbooks section
  const usedbooks = UsedBooks();

  // for new arrival
  const newarrivaldata = BestSellerData();

  // for best sales
  const sellerandnewarrivalData = BestSellerData();
  const BestSellerInformation = Bestsales();

  let sliderRef = useRef<Slider | null>(null);
  let sliderRef1 = useRef<Slider | null>(null);

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

  const next1 = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext(); // Accessing slickNext method on the Slider instance
    }
  };

  const previous1 = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPrev(); // Accessing slickPrev method on the Slider instance
    }
  };

  var settings1 = {
    dots: false,
    arrows: false,
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
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centrerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centrerMode: true,
        },
      },
    ],
  };
  // settings for Slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    arrows:false,
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
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centrerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centrerMode: true,
        },
      },
    ],
  };


  var settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.9,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centrerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centrerMode: true,
        },
      },
    ],
  };
  return (
    <>
      {/* Navbar */}
      <div className={islightmode ? "bg-white text-black w-full h-full"  : "bg-black text-white"} >
      <div className={islightmode?"flex  bg-white justify-evenly flex-wrap  flex-row  py-2 items-center  ":"bg-black flex justify-evenly flex-wrap  flex-row  py-2 items-center  "}>
        <div className={islightmode?"flex items-center gap-4 justify-center ":"flex items-center gap-4 justify-center text-white "}>
          <Link
            className="font-bold  italic text-2xl"
            href="https://www.youtube.com"
            
          >
            BooksMandala
          </Link>
          <div className="flex gap-4 justify-between items-center">
            <p className="font-inter text-dim-gray hover:text-blue-900 text-lg">
              Books
            </p>
            <img src="./images/dropdown.png" alt="" width={30} />
          </div>
          <Link
            href={"/"}
            className="font-inter text-dim-gray text-lg hover:text-blue-900"
          >
            Deals
          </Link>
        </div>
        <div className="flex gap-5 justify-center  ">
          <form className="flex ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium sr-only dark:text-white"
            >
              Search
            </label>
            <div className="flex relative items-center border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-200 dark:border-gray-600">
              {/* <!-- Search Icon --> */}
              <div className="flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 dark:text-blue-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
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
                className="text-gray-600 px-4 mx-5  py-1 rounded-lg bg-slate-200 dark:border-gray-600 border border-gray-300 ms-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex  mr-5 px-2   gap-4 items-center">
          <ShowSocialIcons
            src={islightmode?"./images/darkmode.png":"./images/Lightmode.png"}
            link={""}
            classname={"bg-white"}
            click={toggleColorMode}
          />
          <ShowSocialIcons
            src="./images/shopping-cart.png"
            link={""}
            click={() => {}}
            classname={"bg-white rounded-lg"}
          />
          <Link
            href={"/"}
            className="font-inter text-lg text-dim-gray hover:text-blue-600"
          >
            Login
          </Link>
          <p className="hover:bg-sky-blue px-2 py-2  text-dim-gray rounded-md">
            रु NPR
          </p>
        </div>
      </div>
   
    

      {/* body part */}

      <div className={islightmode ? "bg-white flex flex-col grow px-1 " : "bg-black flex flex-col grow px-1 text-dim-gray "}>
        <div className={islightmode ? " bg-white  flex itmes-center flex-col mx-4 my-6  px-1 py-1" : " bg-black  flex itmes-center flex-col mx-4 my-6  px-1 py-1"}>
          <Slider {...settings}>
            <div className="px-4">
              <img className="rounded-lg" src="./images/belly.jpg" alt="" />
            </div>
            <div className="px-4">
              <img className="rounded-lg" src="./images/Horse1.jpg" alt="" />
            </div>
            <div className="px-4">
              <img
                className="rounded-lg h-80"
                src="./images/Richard2.jpg"
                alt=""
              />
            </div>
            <div className="px-4">
              <img
                className="rounded-lg h-80"
                src="./images/richard paul.jpg"
                alt=""
              />
            </div>
            <div className="px-4">
              <img className="rounded-lg" src="./images/belly.jpg" alt="" />
            </div>
            <div className="px-4">
              <img
                className="rounded-lg h-80"
                src="./images/Richard2.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
        {/* Genres section */}
        <div className=" flex flex-col">
          <div className="flex flex-row items-center mx-9 justify-between ">
            <div className="flex flex-col gap-2 ">
              <p className={islightmode ? "font-inter font-bold text-black text-2xl" : "font-inter font-bold text-white text-2xl"}>
                {genredata.Genre}
              </p>
              <p className="font-inter text-dim-gray font-bold hover:text-blue-900 text-sm ">
                {genredata.Genrediscription}
              </p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer ">
              <img
                src="./Gifs/forward.gif"
                alt=""
                className="rounded-full"
                onClick={next}
                width={50}
                height={50}
              />
              <img
                src="./Gifs/backward.gif"
                alt=""
                className="rounded-full"
                onClick={previous}
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="flex  flex-col ">
            <div className='flex itmes-center flex-col  mx-8 my-6  px-1 py-1"  '>
              <Slider
                ref={(slider) => {
                  sliderRef.current = slider;
                }}
                {...settings1}
              >
                {genre.map((items) => (
                  <GenreAndTestomonialSection
                    img={items.img}
                    profile={items.GenreTitle}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        

        {/* Best Seller Section */}

        <div className="  flex flex-col gap-2  ">
          <Information
            title={sellerandnewarrivalData.Information.Title1}
            discription={sellerandnewarrivalData.Information.Discription1}
          />

          <div className="lg:flex lg:justify-evenly lg:gap-0 flex-wrap md:flex md:justify-normal md:gap-5   ">
            {BestSellerInformation.map((items) => (
              <BestSellerAndNewarrivalSection
                img={items.img}
                price={items.price}
                booktitle={items.booktitle}
                author={items.author}
              />
            ))}
          </div>
        </div>
        

        {/* UsedBook section */}

        {/* <div className='flex bg-snow justify-center '>
      <div className='flex  flex-row py-20 flex-wrap gap-10 md:justify-center sm:justify-center '>
                  <div className='py-20 flex flex-col  gap-10'>
                
                  
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-row  justify-start gap-6  '>
                      <img src="./images/bookmarks.png" alt="" width={60} height={60} />
                      <div className='flex justify-evenly flex-col'>
                        <p className='font-inter text-black font-bold hover:text-blue-900 text-2xl'>Used  books starting at just </p>
                        <p className='font-inter text-black font-bold hover:text-blue-900 text-2xl'>Rs 250</p>
                  </div>
                    </div>
                    
                    
                  <div><p className='font-inter text-gray-600  hover:text-blue-900 text-lg'>Explore a Wide Range of Popular Used Books in Excellent Condition.</p></div>

                  </div>
                
                
                
                <Buttons title="Explore books" classname="bg-blue-whote hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-md border-gray-300 hover:bg-blue- text-blue-600 font-bold w-40 py-2 px-4 "  onclick={() => {}}></Buttons>

                
              </div>
              <div className=' flex justify-center gap-5 my-4 py-20'>
                {usedbooks.map((items) => (
                
                
                  <img className='rounded-lg' src={items.img} alt="" width={90} height={75} />
                
                ))}
                
                
              </div>

      </div>
              
    </div> */}

        {/* UsedBook section */}

        <div className={islightmode?"flex gap-5 justify-center  bg-snow flex-wrap":"flex gap-5 justify-center  bg-black flex-wrap"}>
          <div className=" flex flex-col  justify-center my-10 py-5  gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row  justify-start gap-6   ">
                <img
                  src="./images/bookmarks.png"
                  className={islightmode?"":"bg-white"}
                  alt=""
                  width={60}
                  height={60}
                />
                <div className="flex justify-evenly flex-col">
                  <p className={islightmode?" text-black font-bold font-title text-2xl":"text-snow font-bold font-title text-2xl"}>
                    Used books starting at just{" "}
                  </p>
                  <p className={islightmode?" text-black font-bold font-title text-2xl":"text-snow font-bold font-title text-2xl"}>
                    Rs 250
                  </p>
                </div>
              </div>

              <div>
                <p className="font-inter text-gray-600  hover:text-blue-900 text-lg">
                  Explore a Wide Range of Popular Used Books in Excellent
                  Condition.
                </p>
              </div>
            </div>

            <Buttons
              title="Explore books"
              classname="bg-blue-whote hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-md border-gray-300 hover:bg-blue- text-blue-600 font-bold w-40 py-2 px-4 "
              onclick={() => {}}
            ></Buttons>
          </div>
          <div className=" gap-5 flex my-10 py-10 flex-wrap ">
            {usedbooks.map((items) => (
              <img
                className="rounded-lg"
                src={items.img}
                alt=""
                width={90}
                height={75}
              />
            ))}
          </div>
        </div>

        {/* For new arrival section */}

        <div className=" flex flex-col gap-2  ">
          <Information
            title={sellerandnewarrivalData.Information.Title2}
            discription={sellerandnewarrivalData.Information.Discription2}
          />

          <div className="lg:flex lg:justify-evenly lg:gap-0 flex-wrap md:flex md:justify-normal md:gap-5 ">
            {newarrivaldata.Newarrival.map((items) => (
              <BestSellerAndNewarrivalSection
                img={items.img}
                price={items.price}
                booktitle={items.booktitle}
                author={items.author}
              />
            ))}
          </div>
        </div>

        {/* <div className="bg-black flex justify-center items-center ">
          

          <img
            className=" w-3/4 my-10"
            src="./images/Explorebanner.webp"
            alt=""
          />
          
          </div> */}

<div className=" flex justify-center items-center ">
  <div className=" bg-red-900 relative w-3/4 my-10 ">
    <img
      className="w-full cursor-pointer"
      src="./images/Explorebanner.webp"
      alt=""
    />
    
    <Buttons
              title="Advertisement"
              classname="bg-blue-900 absolute  top-0 cursor-pointer right-0 hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-sm border-gray-300 hover:bg-blue- text-white font-bold w-40 py-21 px-2 "
              onclick={() => {}}
    ></Buttons>
  </div>
</div>

                    {/* for nepali book section */}

   <div className={islightmode?" flex flex-col  bg-snow my-5 gap-5 relative ":"flex flex-col  bg-black my-5 gap-5 relative "} >
                <div className="gap-5 flex flex-col justify-center items-center">
                  <p className={islightmode?" text-black font-bold font-title text-2xl":"text-snow font-bold font-title text-2xl"}>Explore form our Amazing collection of </p>
                  <h1 className={islightmode?" text-black font-bold font-title text-4xl":"text-dim-gray font-bold font-title text-4xl"}>Thousands of Nepali Books</h1>
                </div>

                <div className="  left-0 bottom-2/4 absolute">

                <img
                className="rounded-full"
                src="./Gifs/forward.gif"

                alt=""
                onClick={next1}
                width={42}
                height={40}
              />
                </div>
                
                <div className=" right-0 bottom-2/4 absolute">
                <img
                src="./Gifs/backward.gif"
                alt=""
                className="rounded-full"
                onClick={previous1}
                width={42}
                height={40}
              />
                </div>
              
             
              
             
            
                
               
              <div className=" w-full  flex-col px-9 flex   ">
                
                
                
              
               <Slider  ref={(slider) => {
                  sliderRef1.current = slider;
                  }} {...settings3}>
                  {neplaibooks.map((items) => (
                  <div className="px-1"> <img
                  className="rounded-sm w-60 h-60  " 
                  src={items.img}
                  alt=""
                 
                  
                 
                />

                </div>
                   
                  
                ))}

                  </Slider>

                  <div className="flex w-full mb-2  "><img className="w-full " src="./Nepalibooks/Bookrack.png" alt="" /></div>

                <div className="flex justify-center my-16">
                <Buttons
              title="Explore books"
              classname="bg-blue-whote  hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-md border-gray-300 hover:bg-blue- text-blue-600 font-bold w-40 py-2 px-4 "
              onclick={() => {}}
            ></Buttons> 
                </div> 
                                


                 

                 
           </div>

                
            

                
                
                      
                   
                </div>


                      {/* for Login and Register section */}
      <div className="bg-no-repeat  bg-cover w-full h-96  grow flex bg-[url('/Nepalibooks/background.svg')] justify-evenly items-center flex-wrap  my-5">
       
        <div className=" flex flex-col gap-5 ml-6   md:mt-10   ">
                  <div className=" flex flex-col gap-2 ">
                  <h1 className="text-black font-bold hover:text-blue-900 text-2xl">Our Picks for you</h1>
                  <p className="text-black font-inter text-lg ">We will curate special book recommendations for you</p>
                  <p className="text-black font-inter text-lg ">based on your genre preferences.</p>
                  </div>

                  <div className=" flex flex-col gap-5">
                      <p className="text-black font-inter text-lg ">Login or create account to get started.</p>
                       <Buttons title="LOGIN | REGISTER"
              classname="  hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-md border-gray-300 bg-teal text-white font-bold w-2/3  py-2 "
              onclick={() => {}}/>
                  </div>
                  
        </div>
        <div className=" flex justify-center  ">
                  <img className="sm:w-2/4  md-w-2/4" src="./images/background.webp" alt="" />
        </div>/
      </div>


                        {/* Bestselling authors */}

      <div className=" flex flex-col gap-4  mt-20">
         <div className=" flex flex-col mx-10 gap-3">
                  <p className={islightmode?"font-inter mt-10 text-black  hover:text-blue-900 text-3xl ":"font-inter mt-10 text-snow  hover:text-blue-900 text-3xl"}>{sellerandnewarrivalData.Information.Title3}</p>
                  <p className="font-inter text-gray-600  hover:text-blue-900 text-sm">{sellerandnewarrivalData.Information.Discription3}</p>
        </div>
        <div className="flex mx-10 justify-between  text-center  flex-wrap items-center ">
        {bestsellers.map((items) => (
                      <>
                      {/* <GenreAndTestomonialSection img={items.img} profile={items.authorname}/> */}
                      <div className="flex flex-col py-2   items-center gap-2">
                            <img className="w-20 h-20 rounded-xl" src={items.img} alt="" />
                            <Link href="/"><h1 className={islightmode?"font-inter text-black  hover:text-blue-900 text-md":"font-inter text-snow  hover:text-blue-900 text-md"}>{items.authorname}</h1></Link>  
                      </div>
                      
                      </>

        ))}
        </div>
        
      </div>

                              {/* Preorder-section */}

        <div className={islightmode?"bg-snow flex gap-3 flex-col justify-evenly py-5 my-10":"bg-black flex gap-3 flex-col justify-evenly py-5 my-10"}>
          <div className=" mt-11 mx-8">          
            <Information title={sellerandnewarrivalData.Information.Title4} discription={sellerandnewarrivalData.Information.Discription4}/>
          </div>
          <div className="flex grow mx-12 mb-12 gap-3 flex-wrap">
            <img src={sellerandnewarrivalData.Information.Preorderimg} alt="" width={250}/>
            <div className=" flex flex-col   justify-between">
              <div className="flex flex-col gap-10  ">
                <div className="flex flex-col">
                <p className={islightmode?"font-inter text-black  hover:text-blue-900 text-2xl ":"font-inter text-snow  hover:text-blue-900 text-2xl"}>{sellerandnewarrivalData.Information.preordertitle}</p>
                <p className="text-sm text-dim-gray font-inter">by: {sellerandnewarrivalData.Information.author}</p>
                </div>
              
                <div className="flex flex-col gap-3" >
                  <div className="flex gap-2">
                  <p className={islightmode?"text-black font-bold font-inter":"text-snow font-bold font-inter"}>Rs: {sellerandnewarrivalData.Information.price}</p>
                  <p className="text-xl  font-bold font-inter text-dim-gray line-through">{sellerandnewarrivalData.Information.originalprice}</p>
                  </div>
                 
                 <p className="text-md font-bold font-inter text-green-400">{sellerandnewarrivalData.Information.discount}</p>
                </div>
              </div>
              
                
                <div className="flex justify-between flex-col gap -2">
                <p className="font-inter text-red-600 text-lg font-bold">PREORDER ENDS IN</p>
                  <div className="flex  gap-2 mb-3">
                  <img src="./Gifs/time.gif" alt="" width={28} height={15} />
                  <p className="text-dim-gray font-inter text-lg">{sellerandnewarrivalData.Information.endtime}</p>
                  </div>
                  <Buttons
                    title="PREORDER"
                    classname="bg-blue-whote font-inter font-bold hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-md border-gray-300 hover:bg-blue- text-blue-600  w-40 py-2 px-4 "
                     onclick={() => {}}
                  ></Buttons>
                 
                
                <p></p>
                </div>
              
             
            </div>
          </div>
        </div>
                              
                {/* Foooter section */}
           
            <Footer/>
           
                

  </div> 
  </div>
  
        
          
       



        
      
    </>
  );
}
