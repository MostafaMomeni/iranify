"use client"
import React, { useEffect, useState } from 'react'
import style from "./Library.module.css"
import { LuLibrary } from "react-icons/lu";
import { IoAdd , IoGridOutline  } from "react-icons/io5";
import { IoIosSearch  } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { FaListUl } from "react-icons/fa6";
import LibraryItem from './LibraryItem';

export default function Library() {

    const [itemMode , setItemMode] = useState<string>("list")

    const setModeItem = (id : string) =>{
        localStorage.setItem("library-mode" , JSON.stringify(id))
        setItemMode(id) 
    }
    useEffect(()=>{
        let local =localStorage.getItem("library-mode")
        if(local){
            setItemMode(local)
        }
        else{
            setItemMode("list")
        }
    },[])

  return (
    <div className={style.parent}>
        <div className={style.title_parent}>
        <h4 className={style.title}><LuLibrary className={style.icon}/> کتابخانه شما</h4>
        <span className={style.btn_icon}><IoAdd className={style.btn_icon_elm}/></span>
        </div>
        <div className={style.search_parent}>
            <form className={style.form}>
                <label htmlFor="search" className={style.btn_icon}>
                    <IoIosSearch className={style.btn_icon_elm}/>
                </label>
                <input type="search" id='search' className={style.search_input} placeholder='جست و جو کنید...' />
            </form>
            <span className={style.sort_parent}>
                <span onClick={()=> itemMode === "list" ? setItemMode("grid") : setItemMode("list")}>
            چیدمان  <CiBoxList style={{fontSize:"22px"}}/>
                </span>
            <ul className={style.sort_ul}>
                <li onClick={()=>setModeItem("list")}><FaListUl className='ms-2'/> لیست</li>
                <li  onClick={()=>setModeItem("grid")}><IoGridOutline className='ms-2'/> مربعی</li>
            </ul>
            </span>
        </div>
        <div className={style.items_parent}>
            <LibraryItem mode={itemMode}/>
            <LibraryItem mode={itemMode}/>
            <LibraryItem mode={itemMode}/>
            <LibraryItem mode={itemMode}/>
            <LibraryItem mode={itemMode}/>
            <LibraryItem mode={itemMode}/>
            <LibraryItem mode={itemMode}/>
        </div>
    </div>
  )
}
