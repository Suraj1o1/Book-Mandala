import { title } from 'process';
import React from 'react'

export default function BestSellerData() {
    const Information={
        Discription1:"Find Your Next Great Read Among Our Best Sellers.",
        Title1:"Best Seller",
        Title2:"New Arrivals",
        Discription2:"Discover Our New Releases.",

    }


    

    const  Newarrival= [
        {
            
            img:"./images/ikigai.webp",
          
            price:"Rs. 300",
            booktitle:"Ikigai",
            author:"Hector Garcia Puigcerver" 
        },
        {
            
            img:"./images/ikigai.webp",
          
            price:"Rs. 300",
            booktitle:"Ikigai",
            author:"Hector Garcia Puigcerver" 
        },
        {
            
            img:"./images/ikigai.webp",
          
            price:"Rs. 300",
            booktitle:"Ikigai",
            author:"Hector Garcia Puigcerver" 
        },
        {
            
            img:"./images/ikigai.webp",
          
            price:"Rs. 300",
            booktitle:"Ikigai",
            author:"Hector Garcia Puigcerver" 
        },
        {
            
            img:"./images/ikigai.webp",
          
            price:"Rs. 300",
            booktitle:"Ikigai",
            author:"Hector Garcia Puigcerver" 
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




