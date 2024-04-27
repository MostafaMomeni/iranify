import React from "react";
import style from "./PhoneMenu.module.css";
import { IoMdHome } from "react-icons/io";
import { FaWindowRestore } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
import { MdArrowDropUp } from "react-icons/md";
import Link from "next/link";

export default function PhoneMenu() {
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
              <p>
                <FaWindowRestore className={style.icon} /> صفحات <MdArrowDropUp/>
              </p>
              <ul className={style.pages_ul}>
               <li><Link href={"/search"}>جست و جو</Link></li>
               <li><Link href={"/weblog"}>مقالات</Link></li>
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
      </div>
    </>
  );
}
