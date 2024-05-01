"use client";
import React, { useEffect, useState } from "react";
import style from "@/Styles/Library.module.css";
import { IoIosSearch } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import LibraryItem from "@/components/template/Library/LibraryItem";
import { useRouter } from "next/navigation"; 

export default function page() {

  const router = useRouter()

  const [itemMode, setItemMode] = useState<string>("list");

  useEffect(() => {
    const reSize = () => {
      if(window.innerWidth < 767){
        router.replace("/")
      }
    };
    window.addEventListener("resize", reSize);
  }, []);

  const setModeItem = (id: string) => {
    localStorage.setItem("library-mode", JSON.stringify(id));
    setItemMode(id);
  };
  useEffect(() => {
    let local = localStorage.getItem("library-mode");
    if (local) {
      setItemMode(local);
    } else {
      setItemMode("list");
    }
  }, []);
  return (
    <div className={style.parent}>
      <h1 className={style.title}>لیست پخش</h1>

      <div className={style.search_parent}>
        <div className={style.input_parent}>
          <IoIosSearch className={style.searchIcon} />
          <input
            type="search"
            placeholder="راحت تر پیدا کنید  "
            className={style.input}
          />
        </div>

        <span className={style.sort_parent}>
          <span
            onClick={() =>
              itemMode === "list" ? (
                <>
                  {setItemMode("grid")}
                  {setModeItem("grid")}
                </>
              ) : (
                <>
                  {setItemMode("list")}
                  {setModeItem("list")}
                </>
              )
            }
          >
            <CiBoxList style={{ fontSize: "22px" }} />{" "}
            {itemMode === "list" ? "لیست" : "مربعی"}
          </span>
        </span>
      </div>

      <div className={style.items_parent}>
        <LibraryItem mode={itemMode} link={"yas"} />
        <LibraryItem mode={itemMode} link={"yas"} />
        <LibraryItem mode={itemMode} link={"yas"} />
        <LibraryItem mode={itemMode} link={"yas"} />
        <LibraryItem mode={itemMode} link={"yas"} />
        <LibraryItem mode={itemMode} link={"yas"} />
        <LibraryItem mode={itemMode} link={"yas"} />
      </div>
    </div>
  );
}
