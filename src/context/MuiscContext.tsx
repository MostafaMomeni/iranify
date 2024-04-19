"use client"
import React , {createContext} from "react"

const music = {
    sound : "Yas - Esalat.mp3",
    cover:"yas.webp",
    name : "بیم",
    artist: "یاس",
    isPlay: false
}

export const MusicContext = createContext(music)

export const  MusicContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    return <MusicContext.Provider value={music}>
        {children}
    </MusicContext.Provider>
}  
