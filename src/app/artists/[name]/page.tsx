"use client";
import React, { useState } from "react";
import style from "@/Styles/ArtistPage.module.css";
import { FaPlay, FaPause } from "react-icons/fa6";
import SectionHeader from "@/components/template/SectionHeader/SectionHeader";
import TrackListItem from "@/components/template/TrackListItem/TrackListItem";
import ArtistBox from "@/components/template/ArtistBox/ArtistBox";

export default function page() {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div className={style.parent}>
      <div className={style.header}>
        <h1 className={style.title_header}>یاس</h1>
        <h3 className={style.count_music_header}>
          تعداد آهنگ <span className={style.primary}>15</span>
        </h3>
      </div>

      <div className={style.main}>
        <div className={style.play_music_parent}>
          <div className={style.play_music} onClick={() => setIsPlay(!isPlay)}>
            {isPlay ? (
              <FaPause className={style.play_icon} />
            ) : (
              <FaPlay className={style.play_icon} />
            )}
          </div>
          <div className={style.follow_btn}>دنبال کردن</div>
        </div>

        {/* آهنگ های محبوب */}
        <div className="mt-3">
          <SectionHeader title="پر طرفدار ها" />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
        </div>

        {/* خواننده های مرتبط */}
        <div className="mt-4">
          <SectionHeader title="خواننده های مرتبط" />
          <div className={style.artist_parent}>
          <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
          <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
          <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
          <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
          <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
          <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
          </div>
        </div>

        {/* همه آهنگ ها */} 
        <div className="mt-5">
          <SectionHeader title="همه آهنگ ها" />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon />
        </div>
      </div>
    </div>
  );
}
