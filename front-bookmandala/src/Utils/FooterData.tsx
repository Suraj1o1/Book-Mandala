import React from 'react'

export default function Footer2() {

  const Data={
    footertopic:{
        topic1:"Quick Links",
        topic2:"About Us",
        topic3:"Genres",
        topic4:"Others"
    },
    QuickLinks : [
        { content: "Book Request",
          Link:"https://www.youtube.com"
         },
        { content: "Best Sellers" ,
           Link:"https://www.youtube.com"
        },
        { content: "New Arrivals",
           Link:"https://www.youtube.com"
         },
        { content: "Blogs",
           Link:"https://www.youtube.com"
         },
        { content: "Used Books",
          Link:"https://www.youtube.com"
         }
    ],
    About : [
        { content: "About Us" },
        { content: "Careers" },
        { content: "Contact Us" },
        { content: "Wholesale" }
    ],
    Genres : [
      { content: "Fiction" },
      { content: "Self Help" },
      { content: "Business" },
      { content: "Children" },
      { content: "Nepali" }
  ],
  Others : [
    { content: "Cafe" },
    { content: "FAQ's" },
    { content: "Shipping Rates" }
],


  }
  return Data
}
