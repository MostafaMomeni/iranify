import React from 'react'
import style from "./SectionHeader.module.css"
import Link from 'next/link'
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function SectionHeader(props : any) {
  return (
    <div className={style.parent}>
        <h3>{props.title}</h3>
        {props.link && props.textLink && (
          <>
          <div>
            <Link href={props.link} className={style.text_link}>{props.textLink}</Link>
            <Link href={props.link}><FaLongArrowAltLeft className={style.icon}/></Link>
          </div>
          </>
        )}
    </div>
  )
}
