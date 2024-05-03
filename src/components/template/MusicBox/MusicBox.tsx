import React from "react";
import style from "./MusicBox.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";

export default function MusicBox(props : any) {
  return (
    <div className={style.parent}>
      <Link href={props.link}>
        <div className={style.top}>
          <Image
            src={`/Assets/${props.src}`}
            alt={props.title}
            width={150}
            height={150}
            className={style.image}
          />
        </div>
        <div className={style.bottom}>
          <p>{props.title}</p>
          <span>{props.artist}</span>
          <Link href={props.link} className={style.btn}>
            <Button text="مشاهده جزییات"/>
          </Link>
        </div>
      </Link>
    </div>
  );
}
