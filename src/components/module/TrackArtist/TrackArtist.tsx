import React from 'react'
import style from "./TrackArtist.module.css"
import Image from 'next/image'
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

export default function TrackArtist() {
  return (
    <Link href={`/artists/yas`} className={style.parent}>
        <div className={style.right}>
            <Image src={`/Assets/yas.webp`} alt='yas' width={100} height={100} className={style.image}/>
            <p className={style.title}>یاس</p>
        </div>
        <div className={style.left}>
            <FaArrowLeft className={style.icon}/>
        </div>
    </Link>
  )
}
