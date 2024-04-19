import React from 'react'
import style from "./newMusic.module.css"
import SectionHeader from '@/components/template/SectionHeader/SectionHeader'
import MusicBox from '@/components/template/MusicBox/MusicBox'

export default function page() {
  return (
    <div className={style.parent}>
        <SectionHeader title="آهنگ های جدید"/>
        <div className={style.new_music_parent}>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/music/band-naf-ta-khat-saf"/>
        </div>
    </div>
  )
}
