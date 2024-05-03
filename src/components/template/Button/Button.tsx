import React from "react";
import style from "./Button.module.css";

export default function Button({text}:any) {
  return (
    <>
      <button className={style.button}>{text}</button>
    </>
  );
}
