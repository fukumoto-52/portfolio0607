import { Link } from "gatsby"
import React from "react"
import * as style from "./style.module.css"


const Component = () => {
  return (
    <>
   
      <footer className={style.footer}>
        <div className={"content"}>
          <div className={style.footerTop}>
            <Link to="/" className={style.footer_logo}>
              home
            </Link>
            <nav className={style.nav}>
              <ul className={style.nav_list}>
                <li className={style.nav_item}>
                  <Link to="/">TOP</Link>
                </li>
                
              </ul>
            </nav>
          </div>

         
          
          <small className={style.copyright}>&copy; 奥田電設</small>
        </div>
      </footer>
    </>
  )
}

export default Component
