"use client"
import React from 'react'
import style from "./LibraryItem.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function LibraryItem({mode , link} : any){

  return (
    <Link href={`/library/${link}`} className={mode == `"list"` || mode == "list" ? style.list_parent : style.grid_parent}>
        <Image src={"/Assets/yas.webp"} width={70} height={70} alt='yas' className={mode == `"list"` || mode == "list" ? style.list_image : style.grid_image}/>
        <div className={style.text_parent}>
            <p >یاس</p>
            <span>خواننده</span>
        </div>
    </Link>
  )
}
