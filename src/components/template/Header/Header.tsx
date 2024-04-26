"use client"
import React, { useEffect } from 'react'
import style from "./Header.module.css"
import Link from 'next/link'
import { IoIosArrowForward , IoIosArrowBack  } from "react-icons/io";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function header() {
  return (
    <>
    <div className={style.parent}>
      <div className={style.right}>
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          overlay={
            <Tooltip id={`tooltip-${"right"}`}>
              بازگشت
            </Tooltip>
          }
        >
        <button className={style.arrow_btn} onClick={()=> history.back()}><IoIosArrowForward/></button>
        </OverlayTrigger>
        <OverlayTrigger
          key={"left"}
          placement={"left"}
          overlay={
            <Tooltip id={`tooltip-${"left"}`}>
              رفتن به جلو
            </Tooltip>
          } 
        >
        <button className={style.arrow_btn} onClick={()=> history.forward()}><IoIosArrowBack /></button>
        </OverlayTrigger>
      </div>
      <div className='d-flex'>
        <Link className={style.login} href={"/login"}>ورود</Link>
        <Link className={style.register} href={"/register"}>ثبت نام</Link>
      </div>
    </div>
    </>
  )
}
