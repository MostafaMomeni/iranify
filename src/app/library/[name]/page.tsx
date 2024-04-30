import React from "react";
import style from "@/Styles/LibraryPage.module.css";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import TrackListItem from "@/components/template/TrackListItem/TrackListItem";

export default function page() {
  return (
    <>
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
          </div>
        </div>

        <div className={style.main}>

          <div className={style.top_main}>
            
            <div className={style.input_parent}>
              <IoIosSearch className={style.searchIcon} />
              <input
                type="search"
                placeholder="راحت تر پیدا کنید  "
                className={style.input}
              />
            </div>

            <IoSettingsOutline className={style.setting_icon}/>
          </div>

          <div className="mt-4">
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} playIcon deleteBtn />
        </div>
        </div>
      </div>
    </>
  );
}
