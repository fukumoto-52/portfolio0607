import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import * as style from "./style.module.css"

import openbtn from "../../images/icon/menu-open.png"
import closebtn from "../../images/icon/menu-close.png"
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
         <img
         src={openbtn}
         alt="開く"
         style={{ width: "20px" }}
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
            <img
         src={closebtn}
         alt="開く"
         style={{ width: "20px" }}
       />
          </button>
          <nav className={style.sp_nav}>
  <ul className={style.sp_nav_list}>
    <li className={style.sp_nav_item}>
      <a
        href="#a01"
        onClick={() => setIsOpen(false)}
      >
        ABOUT
      </a>
    </li>
    <li className={style.sp_nav_item}>
      <a
        href="#a02"
        onClick={() => setIsOpen(false)}
      >
        HISTORY
      </a>
    </li>
    <li className={style.sp_nav_item}>
      <a
        href="#a03"
        onClick={() => setIsOpen(false)}
      >
        SKILL
      </a>
    </li>
    <li className={style.sp_nav_item}>
      <a
        href="#a04"
        onClick={() => setIsOpen(false)}
      >
        WORK
      </a>
    </li>
  </ul>
</nav>
        </div>
      ) : null}
    </header>
  )
}

export default Component
