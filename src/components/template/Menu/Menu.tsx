"use client"
import React, { useMemo, useState } from 'react'
import NavBar from '../Navbar/NavBar'
import Library from '../Library/Library'
import PhoneMenu from '../PhoneMenu/PhoneMenu';

export default function Menu() {

    const [width, setWidth] = useState(window.innerWidth);

    const reSize = () => {
        setWidth(window.innerWidth);
      };
    
      useMemo(() => {
        window.addEventListener("resize", reSize);
      }, []);


  return (
    <>
    {width > 767 ? (
        <>
            <NavBar/>
            <Library/>
        </>
    ) : (
        <></>
    )}
    </>
  )
}
