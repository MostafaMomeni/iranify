"use client"
import React, { useState } from "react";
import style from "./TrackListItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaPause } from "react-icons/fa6";


export default function TrackListItem(props: any) {
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const [isPlay , setIsPlay] = useState(false)


  return (
    <div className={style.parent}>
      <div className={style.right}>
        <div className={style.play_music} onClick={() => setIsPlay(!isPlay)}>
          {isPlay ? (
            <FaPause className={style.play_icon} />
          ) : (
            <FaPlay className={style.play_icon} />
          )}
        </div>
        <Link className={style.link} href={`/tracks/${props.link}`}>
          <Image
            className={style.image}
            src={`/Assets/${props.image}`}
            alt={props.title}
            width={50}
            height={50}
          />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className={style.left}>{formatDuration(props.time)}</div>
    </div>
  );
}
