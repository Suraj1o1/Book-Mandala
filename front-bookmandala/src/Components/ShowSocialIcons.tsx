import GetPlatformIcon from '@/Utils/GetPlatformIcon';
import GetPlatformLink from '@/Utils/GetPlatformLink'
import { get } from 'http';
import Link from 'next/link'
import React from 'react'

type Icons = {
  src: string;
  link: string;
  classname:string
 click:()=>void
}

export default function ShowSocialIcons({ classname,src,click ,link }: Icons) {
  return (
   
      <Link href={link}>
        <img className={classname} onClick={click}  src={src} alt="Social Icon" width={26} height={20} />
      </Link>
    
  );
}
