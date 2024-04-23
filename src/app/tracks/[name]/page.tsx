"use client";
import React, { useState } from "react";
import style from "./TrackPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaPause, FaPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import TrackArtist from "@/components/module/TrackArtist/TrackArtist";
import SectionHeader from "@/components/template/SectionHeader/SectionHeader";
import TrackListItem from "@/components/TrackListItem/TrackListItem";
import ArtistBox from "@/components/template/ArtistBox/ArtistBox";

export default function page() {
  const [isPlay, setIsPlay] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={style.parent}>
      <div className={style.header}>
        <Image
          src={`/Assets/yas.webp`}
          alt="beem"
          width={200}
          height={200}
          className={style.cover_music}
        />
        <div className="me-md-0 me-2 mt-md-0 mt-3">
          <h1 className={style.title_header}>بیم</h1>
          <div className="mt-4 mt-md-5">
            <Link href={`/artists/yas`} className={style.artist_name_header}>
              <Image
                src={`/Assets/yas.webp`}
                alt="beem"
                width={25}
                height={25}
                className={style.artist_music_header}
              />
              یاس
            </Link>
            <span className={style.music_year_header}>-</span>
            <span className={style.music_year_header}>2020</span>
          </div>
        </div>
      </div>

      <div className={style.main}>
        <div className={style.play_music_parent}>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div
              className={style.play_music}
              onClick={() => setIsPlay(!isPlay)}
            >
              {isPlay ? (
                <FaPause className={style.play_icon} />
              ) : (
                <FaPlay className={style.play_icon} />
              )}
            </div>

            <FaHeart
              className={`${style.like_icon} ${isLiked ? style.liked : ""}`}
              onClick={() => setIsLiked(!isLiked)}
            />
          </div>

          <div className={style.add_playList_btn}>
            <FaPlus />

            <ul className={style.playList_ul}>
              <li>شاد</li>
              <li>غمگین</li>
            </ul>
          </div>
        </div>

        <div className={style.text_music_parent}>
          <h3 className={style.text_music_title}>متن آهنگ</h3>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
          <p>───♩♬♫♪♭───</p>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
          <p>لورم ایپسوم</p>
        </div>

        <TrackArtist />

        {/* آهنگ های مشابه */}
        <div className="mt-5">
          <SectionHeader title="آهنگ های مشابه" />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
        </div>

        {/* آهنگ های همون خواننده */}
        <div className="mt-5">
          <SectionHeader title="از یاس" />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
        </div>

        {/* خواننده های دیگر */}
        <div className="mt-5">
          <div className={style.artistBox_parent}>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas" />
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas" />
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas" />
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas" />
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas" />
          </div>
        </div>
      </div>
    </div>
  );
}
