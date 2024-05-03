"use client";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import style from "./Player.module.css";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import VolumePlayer from "./VolumePlayer/VolumePlayer";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import { MusicContext } from "@/context/MuiscContext";
import PhoneMenu from "../PhoneMenu/PhoneMenu";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function Player() {
  const musicData = useContext(MusicContext);
  const music = useRef<HTMLAudioElement>(null);

  // const [isPlay, setIsPlay] = useState(musicData.isPlay);
  const [isLiked, setIsLiked] = useState(false);

  const [sound, setSound] = useState(100);
  const [width, setWidth] = useState(0);

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const reSize = () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);
    window.addEventListener("resize", reSize);
  }, []);

  const theme = useTheme();
  let duration = 0;
  if (music.current !== null && musicData.isPlay) {
    duration = Math.floor(music.current.duration);
  }

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  useEffect(() => {
    if (position == duration) {
      musicData.isPlay =false;
    }
  }, [position]);

  setInterval(() => {
    if (music.current !== null) {
      setPosition(Math.floor(music.current?.currentTime));
    }
  }, 500);

  return (
    <>
      <audio src={`/Sounds/${musicData.sound}`} ref={music}></audio>

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
            <MusicPlayer sound={sound} audio={music} />
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
            <div className={style.timeLine_parent}>
              <Box
                sx={{
                  color: "var(--select-color)",
                  ml: 2,
                }}
              >
                <TinyText>{formatDuration(duration)}</TinyText>
              </Box>
              <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                style={{direction:"ltr"}}
                className={style.timeLine}
                max={duration}
                onChange={(_, value) => {
                  setPosition(value as number);
                  music.current !== null &&
                    (music.current.currentTime = value as number);
                  music.current?.play();
                  musicData.isPlay = true;
                }}
                sx={{
                  color: "var(--select-color)",
                  height: 4,
                  "& .MuiSlider-thumb": {
                    width: 8,
                    height: 8,
                    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                    "&::before": {
                      boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === "dark"
                          ? "rgb(255 255 255 / 16%)"
                          : "rgb(0 0 0 / 16%)"
                      }`,
                    },
                    "&.Mui-active": {
                      width: 20,
                      height: 20,
                    },
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.28,
                  },
                }}
              />
              <Box
                sx={{
                  color: "var(--select-color)",
                  mr: 2,
                }}
              >
                <TinyText>{formatDuration(position)}</TinyText>
              </Box>
            </div>
            <PhoneMenu />
          </>
        )}
      </div>
    </>
  );
}
