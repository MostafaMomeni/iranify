import React from "react";
import style from "./TrackListItem.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TrackListItem(props : any) {
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <div className={style.parent}>
      <Link className={style.right} href={`/track/${props.link}`}>
        <Image
          className={style.image}
          src={`/Assets/${props.image}`}
          alt={props.title}
          width={50}
          height={50}
        />
        <p>{props.title}</p>
      </Link>
      <div className={style.left}>{formatDuration(props.time)}</div>
    </div>
  );
}
