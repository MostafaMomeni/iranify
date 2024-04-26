import React from 'react'
import style from "@/Styles/Artists.module.css"
import SectionHeader from '@/components/template/SectionHeader/SectionHeader'
import ArtistBox from '@/components/template/ArtistBox/ArtistBox'

export default function page() {
  return (
    <div className={style.parent}>
        <SectionHeader title="خواننده ها"/>
        <div className={style.artists_parent}>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
            <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
        </div>
    </div>
  )
}
