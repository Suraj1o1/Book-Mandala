"use client";
import { ColorModeProvider } from '@/ContextApi/ColourContext'
import Homepage from '@/Pages/Homepage'
import React from 'react'

export default function page({  }: any) {
  return (
    <div className=" flex flex-col   h-screen ">
      <ColorModeProvider> 
           

      <Homepage />
      </ColorModeProvider>
    </div>
  )
}
