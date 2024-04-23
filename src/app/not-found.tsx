import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <div className="not-found-parent">
        <h2 style={{ color: "var(--text-color)" }}>
          صفحه مورد نظر شما پیدا نشد!!!
        </h2>
        <Image
          src="/Assets/404.gif"
          className="gif-404"
          alt="not-fount"
          width={300}
          height={300}
        />
        <button className="btn btn-primary">
          <Link href={"/"} className="text-light">
            رفتن به صفحه اصلی
          </Link>
        </button>
      </div>
    </>
  );
}
