import React from 'react'
import style from "./Likes.module.css"
import SectionHeader from '@/components/template/SectionHeader/SectionHeader'
import TrackListItem from '@/components/TrackListItem/TrackListItem'
import { FaTrashAlt } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';

export default function page() {
  return (
    <div className={style.parent}>
        <SectionHeader title="پسند شده ها"/>

        <div className={style.input_parent}>
        <IoIosSearch className={style.searchIcon}/>
        <input type="search" placeholder='راحت تر پیدا کنید...' className={style.input} />
        </div>

        <div className="mt-5">
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
  )
}
