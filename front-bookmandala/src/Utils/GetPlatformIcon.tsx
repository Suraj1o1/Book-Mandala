import { instagramicon, tiktokicon } from '@/images'
import React from 'react'

export default function GetPlatformIcon(src:string) {
  if (src=="instagramicon") {
    return("./images/instagram.png")
  }else if (src=="tiktokicon") {
    return("./images/tiktokicon.png")
  }else if (src=="youtubeicon") {
    return("./images/youtube.png")
  }else if (src=="Threadsicon") {
    return("./images/Threads.png")
  }else if (src=="twittericon") {
    return("./images/twitter.png")
   
  }
}
