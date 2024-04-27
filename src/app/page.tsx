import ArtistBox from '@/components/template/ArtistBox/ArtistBox'
import style from './page.module.css'
import SectionHeader from '@/components/template/SectionHeader/SectionHeader'
import MusicBox from '@/components/template/MusicBox/MusicBox'
import Slider from '@/components/module/Slider/Slider'

export default function Home() {
  return (
    <>
    <div className={style.parent}>

      <div className='mt-3'>
        <Slider/>
      </div>

      {/* خواننده ها */}
      <div>
      <SectionHeader title="خواننده ها" link="/artists" textLink="مشاهده همه"/>
      <div className={style.artistBox_parent}>
        <ArtistBox title="یاس" src="artist.jpg" link="/artists/yas"/>
        <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
        <ArtistBox title="یاس" src="yas.webp" link="/artists/yas"/>
        <ArtistBox title="یاس" src="peshro.jpg" link="/artists/yas"/>
        <ArtistBox title="یاس" src="peshro.jpg" link="/artists/yas"/>
        <ArtistBox title="یاس" src="artist.jpg" link="/artists/yas"/>
        <ArtistBox title="یاس" src="artist.jpg" link="/artists/yas"/>
        <ArtistBox title="یاس" src="peshro.jpg" link="/artists/yas"/>
      </div>
      </div>

      {/* آهنگ های جدید */}
      <div className='mt-4'>
        <SectionHeader title="آهنگ های جدید" link="/new-music" textLink="مشاهده همه"/>
        <div className={style.new_music_parent}>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="artist.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="artist.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="peshro.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="peshro.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="artist.jpg" link="/tracks/band-naf-ta-khat-saf"/>
        </div>
      </div>

      {/* آهنگ های پر طرفدار */}
      <div className='mt-5'>
        <SectionHeader title="آهنگ های پرطرفدار" link="/popular-musics" textLink="مشاهده همه"/>
        <div className={style.new_music_parent}>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="peshro.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="peshro.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="peshro.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="artist.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="artist.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="artist.jpg" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/tracks/band-naf-ta-khat-saf"/>
          <MusicBox  title="بند ناف تا خط صاف" artist="یاس" src="yas.webp" link="/tracks/band-naf-ta-khat-saf"/>
        </div>
      </div>
    </div>
    </>
  )
}
