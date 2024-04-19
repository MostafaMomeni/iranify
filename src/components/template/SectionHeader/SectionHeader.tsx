import React from 'react'
import style from "./SectionHeader.module.css"
import Link from 'next/link'
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function SectionHeader(props : any) {
  return (
    <div className={style.parent}>
        <h3>{props.title}</h3>
        {props.link && props.textLink && (
            <Link href={props.link}>{props.textLink} <FaLongArrowAltLeft className={style.icon}/></Link>
        )}
    </div>
  )
}
