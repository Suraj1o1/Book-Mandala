import { platform } from 'os'
import React from 'react'

export default function GetPlatformLink(Platform:string) {
 if(Platform==="instagram") {
   return ("https://www.instagram.com/booksmandala")
 } else if(Platform==="tiktok") {
   return ("https://www.tiktok.com/@booksmandala")
 } else if(Platform==="youtube") {
   return ("https://www.youtube.com")
 }else if(Platform==="Threads") {
   return ("https://www.threads.com")
 }else if(Platform==="twitter") {
   return ("https://www.twitter.com")
 }
 
}
