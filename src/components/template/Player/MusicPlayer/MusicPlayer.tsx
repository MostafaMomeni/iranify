"use client";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import style from "./MusicPlayer.module.css";
import { FaPlay, FaPause } from "react-icons/fa6";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { MusicContext } from "@/context/MuiscContext";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayer(props: any) {

  
  const musicData = useContext(MusicContext);
  const music = props.audio;


  const [isPlay, setIsPlay] = useState(musicData.isPlay);
  const [width, setWidth] = useState(0);

  const theme = useTheme();
  let duration = 0
  if(music.current && isPlay){
    duration = Math.floor(music.current.duration);
  }
  const [position, setPosition] = useState(0);

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }


  useEffect(() => {
    const reSize = () => {
        setWidth(window.innerWidth);
    };

      setWidth(window.innerWidth);
      window.addEventListener("resize", reSize);
  }, []);

  useEffect(() => {
    if (music.current !== null) {
      music.current.volume = props.sound / 100;
    }
  }, [props.sound]);

  useEffect(()=>{
    setIsPlay(musicData.isPlay)
  },[musicData.isPlay])

  useEffect(()=>{
    // setIsPlay(false)
    // musicData.isPlay = false
    duration = 0
    setPosition(0)

    if (!isPlay) {
      music.current?.pause();
      musicData.isPlay = false
    } else {
      music.current?.play();
      musicData.isPlay = true
    }
  },[musicData.sound])

  useEffect(() => {
    if (position == duration) {
      setIsPlay(false);
      musicData.isPlay = false
    }
  }, [position]);

  const playHandler = () => {
    if (isPlay) {
      music.current?.pause();
      musicData.isPlay = false
    } else {
      music.current?.play();
      musicData.isPlay = true
    }
  };

  setInterval(() => {
    if (music.current !== null) {
      setPosition(Math.floor(music.current?.currentTime));
    }
  }, 500);

  return (
    <>
      <div className={style.parent}>

        <div className={style.top}>
          <div>
            <MdSkipNext className={style.prev_next_icon} onClick={()=>{
              musicData.sound = "Yas - Zende Bad Iran.mp3"
            }} />
          </div>
          <div
            className={style.play_icon_parent}
            onClick={() => {
              setIsPlay(!isPlay);
              playHandler();
            }}
          >
            {isPlay ? (
              <FaPause className={style.play_icon} />
            ) : (
              <FaPlay className={style.play_icon} />
            )}
          </div>
          <div>
            <MdSkipPrevious className={style.prev_next_icon} />
          </div>
        </div>
        {width > 767 && (
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
            style={{direction:"ltr"}}
            step={1}
            className={style.timeLine}
            max={duration}
            onChange={(_, value) => {
              setPosition(value as number);
              music.current !== null &&
                (music.current.currentTime = value as number);
              music.current?.play();
              musicData.isPlay = true
              setIsPlay(true);
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
        )}
      </div>
    </>
  );
}
