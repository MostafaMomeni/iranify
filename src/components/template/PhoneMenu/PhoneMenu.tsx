"use client"
import React, { useEffect, useState } from "react";
import style from "./PhoneMenu.module.css";
import { IoMdHome } from "react-icons/io";
import { FaWindowRestore } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
import { MdArrowDropUp } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PhoneMenu() {

  const route = usePathname()

  const [isShowMenu , setIsShowMenu] = useState(false)

  useEffect(()=>{
    setIsShowMenu(false)
  },[route])

  return (
    <>
      <div className={style.parent}>
        <ul className={style.ul}>
          <li>
            <Link href={"/"}>
              <p>
                <IoMdHome className={style.icon} /> خانه
              </p>
            </Link>
          </li>
          <li className={style.dropdown}>
              <p onClick={()=> setIsShowMenu(!isShowMenu)}>
                <FaWindowRestore className={style.icon} /> صفحات <MdArrowDropUp/>
              </p>
              <ul className={`${isShowMenu ? style.active_pages_ul : ""} ${style.pages_ul}`}>
               <li><Link href={"/search"}>جست و جو</Link></li>
               <li><Link href={"/artists"}>خواننده ها</Link></li>
               <li><Link href={"/likes"}>پسند ها</Link></li>
              </ul>
          </li>
          <li>
            <Link href={"/library"}>
              <p>
                <LuLibrary className={style.icon} /> کتاب خانه
              </p>
            </Link>
          </li>
        </ul>
          <div className={isShowMenu ? style.full_dark_bg : ""} onClick={()=>setIsShowMenu(false)}></div>
      </div>
    </>
  );
}
