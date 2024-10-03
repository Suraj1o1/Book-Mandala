import { Disc } from 'lucide-react-native';
import { title } from 'process';
import React from 'react'

export default function BestSellerData() {
    const Information={
        Discription1:"Find Your Next Great Read Among Our Best Sellers.",
        Title1:"Best Seller",
        Title2:"New Arrivals",
        Discription2:"Discover Our New Releases.",
        Title3:"Best Selling Aurthors",
        Discription3:"Discover Books by Bestselling Authors in Our Collection, Ranked by Popularity.",

    }


    

    const  Newarrival= [
        {
            
            img:"./Newarrival/Essentials.webp",
          
            price:"Rs: 1360",
            booktitle:"The Essentials",
            author:"Harvard Business Review" 
        },
        {
            
            
            img:"./Newarrival/exposure.webp",
            price:"Rs: 2238",
            booktitle:"Understanding Exposure",
            author:"Bryan Peterson" 
        },
        {
            
            img:"./Newarrival/Lives.webp",
            price:"Rs: 958",
            booktitle:"The Lives of Others",
            author:"Neel Mukherjee" 
        },
        {
            
            img:"./Newarrival/Living.webp",
          
            price:"Rs: 1200",
            booktitle:"We the Living",
            author:"Ayn Rand" 
        },
        {
            
            img:"./Newarrival/Maths.webp",
          
            price:"Rs: 2078",
            booktitle:"Why Machines Learn",
            author:"Anil Ananthaswamy" 
        }
]
  return {Information,Newarrival,};
}
export  function Bestsales() {
    const  Bestsales= [
        {
            
            img:"./images/notes.webp",
          
            price:"Rs. 850",
            booktitle:"Notes Form Underground",
            author:"Fyodor Dostoyevsky" 
        },
        
        {
            
            img:"./images/Nohuman.webp",
          
            price:"Rs. 450",
            booktitle:"No Longer Human",
            author:"Osamu Dazai" 
        },
        {
            
            img:"./images/war.webp",
          
            price:"Rs. 1000",
            booktitle:"Puffy War",
            author:" R. F. Kuang" 
        },
        {
            
            img:"./images/saipens.webp",
          
            price:"Rs. 600",
            booktitle:"Saipens",
            author:"Yuval Noah Harari" 
        },
        {
            
            img:"./images/belly2.jpg",
          
            price:"Rs. 880",
            booktitle:"The Bell Jar",
            author:"Sylvia Plath" 
        },
]
return Bestsales
   
}

export  function NepaliBooks() {
    const nepalibooks = [
        {
            img: "./Nepalibooks/ayouchor.webp",
            authorname:"Buddhisagar"
        },
        {
            img: "./Nepalibooks/babuamma.webp",
             
        },
        {
            img: "./Nepalibooks/chaursasi.webp",
        },
        {
            img: "./Nepalibooks/chuli.webp",
        },
        {
            img: "./Nepalibooks/damini.webp",
        },
        {
            img: "./Nepalibooks/kathaki.webp",
        },
        {
            img: "./Nepalibooks/patanka.webp",
        },
        {
            img: "./Nepalibooks/samjana.webp",
        },
        {
            img: "./Nepalibooks/sukhi.webp",
        }
    ];
    return nepalibooks
    
}

export  function BestSellingAuthors(){
    const BestSellers=[
        {
            img: "./Authors/author1.webp",
            authorname:"Buddhisagar"

        },
        {
            img: "./Authors/author2.webp",
            authorname:"Robert Greene"

        },
        {
            img: "./Authors/author3.webp",
            authorname:"Fyodor Dostoyevsky"
        },
        {
            img: "./Authors/author4.webp",
            authorname:"A.C.Bhaktiveda.."

        },
        {
            img: "./Authors/author5.webp",
            authorname:"Sage Veda Vyasa"
        },
        {
            img: "./Authors/author6.webp",
            authorname:"Collen Hoover"
        },
        {
            img: "./Authors/author7.webp",
            authorname:"Morgan Housel"
        },
        {
            img: "./Authors/author8.webp",
            authorname:"Napoleon Hill"
        },
        {
            img: "./Authors/author9.webp",
            authorname:"Haruki Murakami"
        },
        
    ]
    return BestSellers
}
