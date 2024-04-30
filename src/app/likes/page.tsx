import React from 'react'
import style from "@/Styles/Likes.module.css"
import TrackListItem from '@/components/template/TrackListItem/TrackListItem'
import { IoIosSearch } from 'react-icons/io';

export default function page() {
  return (
    <div className={style.parent}>
        <div className={style.input_parent}>
        <IoIosSearch className={style.searchIcon}/>
        <input type="search" placeholder='راحت تر پیدا کنید...' className={style.input} />
        </div>

        <div className="mt-5">
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
  )
}
