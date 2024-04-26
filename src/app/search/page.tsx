import React from 'react'
import style from "@/Styles/Search.module.css"
import { IoIosSearch } from "react-icons/io";
import SectionHeader from '@/components/template/SectionHeader/SectionHeader';
import ArtistBox from '@/components/template/ArtistBox/ArtistBox';
import TrackListItem from '@/components/template/TrackListItem/TrackListItem';

export default function search() {
  return (
    <div className={style.parent}>
      <div className={style.input_parent}>
        <IoIosSearch className={style.searchIcon}/>
        <input type="search" placeholder='دنبال چی میگردید؟' className={style.input} />
      </div>

      {/* خواننده ها */}
      <div className='mt-4'>
      <SectionHeader title="خواننده ها"/>
      <div className={style.artistBox_parent}>
        <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
        <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
        <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
        <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
        <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
      </div>
      </div>    

      {/* آهنگ ها */}
      <div className="mt-4">
          <SectionHeader title="آهنگ ها" />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} />
          <TrackListItem title="بیم" image="yas.webp" link="beem" time={220} />
        </div>  
    </div>
  )
}
