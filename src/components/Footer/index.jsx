import { Link } from "gatsby"
import React from "react"
import PageTop from "/src/components/PageTop"
import * as style from "./style.module.css"

const Component = () => {
  return (
    <>
      <PageTop showBelow={900} />
      <footer className={style.footer}>
        <div className={"content"}>
        <small className={style.copyright}>&copy;fukumoto_portfolio </small>
        </div>
      </footer>
    </>
  )
}

export default Component
