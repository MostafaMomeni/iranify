"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import style from "./Player.module.css";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import VolumePlayer from "./VolumePlayer/VolumePlayer";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import { MusicContext } from "@/context/MuiscContext";
import PhoneMenu from "../PhoneMenu/PhoneMenu";

export default function Player() {
  const musicData = useContext(MusicContext);

  const [isLiked, setIsLiked] = useState(false);
  const [sound, setSound] = useState(100);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const reSize = () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);
    window.addEventListener("resize", reSize);
  }, []);

  return (
    <>
      <div className={style.parent}>
        <div className={style.player_parent}>
          <div className={style.right}>
            <Image
              src={`/Assets/${musicData.cover}`}
              alt="yas"
              width={55}
              height={55}
              className={style.img_music}
            />
            <div className={style.name_music_parent}>
              <p>بند ناف تا خط صاف</p>
              <span>{musicData.artist}</span>
            </div>
            {width >= 767 && (
              <div className="h-100 me-4 mt-2">
                <FaHeart
                  className={`${style.like_icon} ${isLiked ? style.liked : ""}`}
                  onClick={() => setIsLiked(!isLiked)}
                />
              </div>
            )}
          </div>

          <div className={style.center}>
            <MusicPlayer sound={sound} />
          </div>

          <div className={style.left}>
            {width > 767 && (
              <>
                <VolumePlayer sound={sound} setSound={setSound} />
                {sound === 0 ? (
                  <HiSpeakerXMark className={style.volume_icon} />
                ) : (
                  <HiSpeakerWave className={style.volume_icon} />
                )}
              </>
            )}
          </div>
        </div>
        {width <= 767 && (
          <>
            <PhoneMenu />
          </>
        )}
      </div>
    </>
  );
}
