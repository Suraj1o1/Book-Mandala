import { instagramicon, tiktokicon } from '@/images'
import { platform } from 'os'
import React from 'react'

export default function SocialPlatformData() {
    const SocialData=[
       {
         platform:"instagram",
         src:"instagramicon"
       } ,
       {
        platform:"tiktok",
        src:"tiktokicon"
       },
       {
        platform:"youtube",
        src:"youtubeicon"
       },
       {
        platform:"Threads",
        src:"Threadsicon"
       },
       {
        platform:"twitter",
        src:"twittericon"
       }
    ]
  return SocialData
}
