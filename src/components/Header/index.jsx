import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import * as style from "./style.module.css"

const Component = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      {/* <h1>
        <Link to="/" className={style.logo}>
          
          home
        </Link>
      </h1> */}
      <nav className={style.nav}>
        <ul className={style.nav_list}>
          <li className={style.nav_item}>
            <a href="#a01">ABOUT</a>
          </li>
          <li className={style.nav_item}>
            <a href="#a02">HISTORY</a>
          </li>
          <li className={style.nav_item}>
            <a href="#a03">SKILL</a>
          </li>
          <li className={style.nav_item}>
            <a href="#a04">WORK</a>
          </li>
        </ul>
      </nav>

      <button
        className={style.menu}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {!isOpen ? (
          <StaticImage
            src="../../images/icon/menu-open.svg"
            placeholder="none"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            style={{ width: "20px" }}
            alt="開く"
          />
        ) : null}
      </button>
      {isOpen ? (
        <div className={style.sp_menu}>
          <button
            className={style.close_btn}
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <StaticImage
              src="../../images/icon/menu-close.svg"
              placeholder="none"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              style={{ width: "20px" }}
              alt="閉じる"
            />
          </button>
          <nav className={style.sp_nav}>
            <ul className={style.sp_nav_list}>
              <li className={style.sp_nav_item}>
                <a href="#a01">ABOUT</a>
              </li>
              <li className={style.sp_nav_item}>
                <a href="#a02">HISTORY</a>
              </li>
              <li className={style.sp_nav_item}>
                <a href="#a03">SKILL</a>
              </li>
              <li className={style.sp_nav_item}>
                <a href="#a04">WORK</a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Component
