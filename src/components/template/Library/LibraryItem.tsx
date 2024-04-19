"use client"
import React from 'react'
import style from "./LibraryItem.module.css"
import Image from 'next/image'

export default function LibraryItem({mode} : any){

  return (
    <div className={mode == `"list"` || mode == "list" ? style.list_parent : style.grid_parent}>
        <Image src={"/Assets/yas.webp"} width={70} height={70} alt='yas' className={mode == `"list"` || mode == "list" ? style.list_image : style.grid_image}/>
        <div className={style.text_parent}>
            <p >یاس</p>
            <span>خواننده</span>
        </div>
    </div>
  )
}
