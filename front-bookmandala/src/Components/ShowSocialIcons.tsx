import GetPlatformIcon from '@/Utils/GetPlatformIcon';
import GetPlatformLink from '@/Utils/GetPlatformLink'
import { get } from 'http';
import Link from 'next/link'
import React from 'react'

type Icons = {
  src: string;
  link: string;
  classname:string
}

export default function ShowSocialIcons({ classname,src, link }: Icons) {
  return (
   
      <Link href={link}>
        <img className={classname}  src={src} alt="Social Icon" width={30} height={30} />
      </Link>
    
  );
}
