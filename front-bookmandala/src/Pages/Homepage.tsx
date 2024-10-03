"use client";
import Link from "next/link";
import React, { ReactNode, use, useRef, useState } from "react";
import ShowSocialIcons from "@/Components/ShowSocialIcons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselData from "@/Utils/CarouselData";
import GenreAndTestomonialSection from "@/Components/GenreAndTestomonialSection";
import GenreandTestomonialApi from "@/Utils/GenreandTestomonialApi";
import GernreData from "@/Utils/GernreData";
import BestSellerAndNewarrivalSection, {
  Information,
} from "@/Components/BestSellerAndNewarrivalCard";
import BestSellerData, { Bestsales, BestSellingAuthors, NepaliBooks } from "@/Utils/BestSellerData";
import Buttons from "@/Components/Buttons";
import UsedBooks from "@/Utils/UsedBooks";

export default function Homepage() {
  
  const [genredata, setGenreData] = useState(GenreandTestomonialApi);
  const genre = GernreData();
  
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
      <div className="flex bg-white justify-evenly flex-wrap  flex-row  py-2 items-center ">
        <div className="flex items-center gap-4 justify-center ">
          <Link
            className="font-bold text-black italic text-2xl"
            href="https://www.youtube.com"
          >
            BooksMandala
          </Link>
          <div className="flex gap-4 justify-between items-center">
            <p className="font-sans text-dim-gray hover:text-blue-900 text-lg">
              Books
            </p>
            <img src="./images/dropdown.png" alt="" width={30} />
          </div>
          <Link
            href={"/"}
            className="font-sans text-dim-gray text-lg hover:text-blue-900"
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
            src="./images/darkmode.png"
            link={""}
            classname={""}
          />
          <ShowSocialIcons
            src="./images/shopping-cart.png"
            link={""}
            classname={""}
          />
          <Link
            href={"/"}
            className="font-sans text-lg text-dim-gray hover:text-blue-600"
          >
            Login
          </Link>
          <p className="hover:bg-sky-blue px-2 py-2  text-dim-gray rounded-md">
            रु NPR
          </p>
        </div>
      </div>

      {/* body part */}

      <div className="bg-white flex flex-col grow px-1 ">
        <div className=" bg-white  flex itmes-center flex-col mx-4 my-6  px-1 py-1">
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
              <p className="font-sans text-black font-bold hover:text-blue-900 text-2xl">
                {genredata.Genre}
              </p>
              <p className="font-sans text-dim-gray font-bold hover:text-blue-900 text-sm ">
                {genredata.Genrediscription}
              </p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer ">
              <img
                src="./Gifs/forward.gif"
                alt=""
                onClick={next}
                width={50}
                height={50}
              />
              <img
                src="./Gifs/backward.gif"
                alt=""
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

        <div className=" flex flex-col gap-2  ">
          <Information
            title={sellerandnewarrivalData.Information.Title1}
            discription={sellerandnewarrivalData.Information.Discription1}
          />

          <div className="flex justify-evenly flex-wrap ">
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
                        <p className='font-sans text-black font-bold hover:text-blue-900 text-2xl'>Used  books starting at just </p>
                        <p className='font-sans text-black font-bold hover:text-blue-900 text-2xl'>Rs 250</p>
                  </div>
                    </div>
                    
                    
                  <div><p className='font-sans text-gray-600  hover:text-blue-900 text-lg'>Explore a Wide Range of Popular Used Books in Excellent Condition.</p></div>

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

        <div className="flex gap-5 justify-center bg-snow flex-wrap">
          <div className=" flex flex-col  justify-center my-10 py-5  gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row  justify-start gap-6  ">
                <img
                  src="./images/bookmarks.png"
                  alt=""
                  width={60}
                  height={60}
                />
                <div className="flex justify-evenly flex-col">
                  <p className="font-sans text-black font-bold hover:text-blue-900 text-2xl">
                    Used books starting at just{" "}
                  </p>
                  <p className="font-sans text-black font-bold hover:text-blue-900 text-2xl">
                    Rs 250
                  </p>
                </div>
              </div>

              <div>
                <p className="font-sans text-gray-600  hover:text-blue-900 text-lg">
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
          <div className=" gap-5 flex my-10 py-10">
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

          <div className="flex justify-evenly flex-wrap ">
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

   <div className=" flex flex-col  bg-snow my-5 gap-5 relative  ">
                <div className="gap-5 flex flex-col justify-center items-center">
                  <p className="font-sans mt-10 text-black  hover:text-blue-900 text-2xl">Explore form our Amazing collection of </p>
                  <h1 className="font-sans text-black  hover:text-blue-900 text-5xl">Thousands of Nepali Books</h1>
                </div>

                <div className="  left-0 bottom-2/4 absolute">

                <img
                className=""
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
      <div className="bg-no-repeat px-5 bg-cover w-full h-96 grow flex bg-[url('/Nepalibooks/background.svg')] justify-evenly items-center flex-wrap my-5">
        {/* <img src="./Nepalibooks/background.svg" alt="" /> */}
        <div className=" flex flex-col gap-5 ml-6   md:mt-10   ">
                  <div className=" flex flex-col gap-2 ">
                  <h1 className="text-black font-bold hover:text-blue-900 text-2xl">Our Picks for you</h1>
                  <p className="text-black font-sans text-lg ">We will curate special book recommendations for you</p>
                  <p className="text-black font-sans text-lg ">based on your genre preferences.</p>
                  </div>

                  <div className=" flex flex-col gap-5">
                      <p className="text-black font-sans text-lg ">Login or create account to get started.</p>
                       <Buttons title="LOGIN | REGISTER"
              classname="  hover:bg-blue-600 hover:text-white dark:border-gray-400 border rounded-md border-gray-300 bg-teal text-white font-bold w-2/3  py-2 "
              onclick={() => {}}/>
                  </div>
                  
        </div>
        <div className=" flex justify-center  md:justify-end ">
                  <img className="lg:w-1/2 sm:w-2/4 " src="./images/background.webp" alt="" />
        </div>
      </div>


                        {/* Bestselling authors */}

      <div className=" flex flex-col gap-4  mt-20">
         <div className=" flex flex-col mx-10 gap-3">
                  <p className="font-sans mt-10 text-black  hover:text-blue-900 text-3xl">{sellerandnewarrivalData.Information.Title3}</p>
                  <p className="font-sans text-gray-600  hover:text-blue-900 text-lg">{sellerandnewarrivalData.Information.Discription3}</p>
        </div>
        <div className="flex justify-between gap-2 mx-10 text-center flex-wrap items-center">
        {bestsellers.map((items) => (
                      <>
                      {/* <GenreAndTestomonialSection img={items.img} profile={items.authorname}/> */}
                      <div className="flex flex-col py-2   items-center gap-2">
                            <img className="w-20 h-20 rounded-full" src={items.img} alt="" />
                            <Link href="/"><h1 className="font-sans text-black  hover:text-blue-900 text-lg">{items.authorname}</h1></Link>  
                      </div>
                      
                      </>

        ))}
        </div>
        
      </div>

  </div>       
          
       



        
      
    </>
  );
}
