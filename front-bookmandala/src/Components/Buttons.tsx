import React from 'react'
type Props={
    classname:string;
    title:string;
    onclick:()=>void
}
export default function Buttons({classname,title,onclick}:Props) {
  return (
    <>
        
        <button className={classname} onClick={onclick}>{title}</button>
        
    </>
  )
   
}
