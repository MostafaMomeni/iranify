import React from 'react'
import style from "./ArtistBox.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function ArtistBox(props : any) {
  return (
    <div className={style.parent}>
        <Link href={props.link}>
        <div className={style.top}>
            <Image src={`/Assets/${props.src}`} alt={props.title} width={150} height={150} className={style.image}/>
        </div>
        <div className={style.bottom}>
            <p>{props.title}</p>
        </div>
        </Link>
    </div>
  )
}
