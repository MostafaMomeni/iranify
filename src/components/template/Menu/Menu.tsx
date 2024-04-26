"use client";
import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../Navbar/NavBar";
import Library from "../Library/Library";

export default function Menu() {
  const [width, setWidth] = useState(0);


  useEffect(() => {
    const reSize = () => {
        setWidth(window.innerWidth);
    };
      setWidth(window.innerWidth);
      window.addEventListener("resize", reSize);
  }, []);

  return (
    <>
      {width > 767 ? (
        <>
          <NavBar />
          <Library />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
