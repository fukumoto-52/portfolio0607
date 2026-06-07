import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import FadeIn from "../components/FadeIn"
import Seo from "../components/seo"
import * as style from "./index.module.scss"
import sample from "../images/sample.jpg"

import topkv from "../images/topkv.jpg"
import myimg from "../images/myimg.jpg"

import hobby01 from "../images/hobby01.png"
import hobby02 from "../images/hobby02.png"
import hobby03 from "../images/hobby03.png"
import hobby04 from "../images/hobby04.png"

import shortimg01 from "../images/site/shortimg01.jpg"
import longimg01 from "../images/site/longimg01.jpg"
import shortimg02 from "../images/site/shortimg02.jpg"
import longimg02 from "../images/site/longimg02.jpg"
import subimg02 from "../images/site/subimg02.jpg"
import shortimg03 from "../images/site/shortimg03.jpg"
import longimg03 from "../images/site/longimg03.jpg"
import shortimg04 from "../images/site/shortimg04.jpg"
import longimg04 from "../images/site/longimg04.jpg"
import shortimg05 from "../images/site/shortimg05.jpg"
import longimg05 from "../images/site/longimg05.jpg"
import shortimg06 from "../images/site/shortimg06.jpg"
import longimg06 from "../images/site/longimg06.jpg"

const hobby = [
  {
    title: "小説",
    icon: hobby01,
  },
  {
    title: "旅行",
    icon: hobby02,
  },
  {
    title: "アニメ鑑賞",
    icon: hobby03,
  },
  {
    title: "動物と<br />触れ合うこと",
    icon: hobby04,
  },
]

const skill = [
  {
    group: "Language",
    list: [
      {
        title: "HTML",
        do: "○",
      },
      {
        title: "CSS",
        do: "○",
      },
      {
        title: "JavaScript",
        do: "△",
      },
    ],
  },
  {
    group: "Design Tools",
    list: [
      {
        title: "PhotoShop",
        do: "○",
      },
      {
        title: "Illustrator",
        do: "○",
      },
      {
        title: "XD",
        do: "○",
      },
    ],
  },
  {
    group: "Other",
    list: [
      {
        title: "WordPress",
        do: "○",
      },
      {
        title: "React",
        do: "○",
      },
    ],
  },
]

const work = [
  {
    topimg: shortimg01,
    modalimg: longimg01,
    title: "カレー屋公式サイト",
    production: "3日",
  },
  {
    topimg: shortimg02,
    modalimg: longimg02,
    subimg: subimg02,
    title: "不動産売買・賃貸仲介サイト",
    production: "1ヶ月",
    remarks: "WordPress使用案件不動産検索機能を取り入れました",
  },
  {
    topimg: shortimg03,
    modalimg: longimg03,
    title: "焼き鳥専門店 公式サイト",
    production: "1ヶ月",
  },
  {
    topimg: shortimg04,
    modalimg: longimg04,
    title: "焼肉店サイト",
    production: "6日",
  },
  {
    topimg: shortimg05,
    modalimg: longimg05,
    title: "清掃・設備メンテナンス会社サイト",
    production: "6日",
  },
  {
    topimg: shortimg06,
    modalimg: longimg06,
    title: "防水工事会社サイト",
    production: "6日",
  },
]

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  useEffect(() => {
    const handleKey = e => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [isOpen])
  return (
    <Layout>
      <sectin className={style.topkv}>
        <div className={style.topFlex}>
          <div className={style.imgBox}>
            <img
              src={topkv}
              alt="トップヴィジュアル"
              className={style.topimg01}
            />
          </div>
          <div className={style.kvtitle}>
            <h2>Portfolio</h2>
          </div>
        </div>
      </sectin>

      <div className="content">
        <section id="a01" className={style.aboutSec}>
          <div className={style.titleBox}>
            <span>ABOUT US</span>
            <h2>私について</h2>
          </div>
          <div className={style.aboutFlex}>
            <div className={`fadeInBlur ${style.aboutImg}`}>
              <img src={myimg} alt="私の写真" />
            </div>
            <div className={style.aboutText}>
              <div className={style.nameBox}>
                <span>NAME :</span>
                <h3><ruby>福<rt>ふく</rt>本<rt>もと</rt>虹<rt>に</rt>杏<rt>あ</rt></ruby> </h3>
              </div>
              <p className={style.intro}>
                はじめまして、福本にあです。
                <br />
                WebデザイナーとしてさまざまなWebサイトのデザイン・制作に携わってきました。<br />
                <br />
                短納期の制作案件を多く経験してきたため、スケジュールを意識しながら効率よく制作を進めることが得意です。
                <br />
                制作業務だけでなく、メンバーのタスク管理や進行サポートも担当し、チーム全体がスムーズに動けるよう意識してきました。
                <br />
                限られた時間の中でも品質を大切にしながら、一つ一つの案件に取り組んでいます。
              </p>
              <div className={style.hobbyBox}>
                <span>HOBBY</span>
                <h4>趣味</h4>
                <ul>
                  {hobby.map((hobby, index) => {
                    return (
                      <FadeIn custom={{ delay: 0.2 * index }}>
                        <li key={index}>
                          <div className={style.iconBox}>
                            <img src={hobby.icon} alt={hobby.title} />
                          </div>
                          <p
                            dangerouslySetInnerHTML={{ __html: hobby.title }}
                          />
                        </li>
                      </FadeIn>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="a02" className={style.historySec}>
        <div className={style.bgSlide}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`content ${style.historyOuter}`}>
          <div className={style.titleBox}>
            <span>History</span>
            <h2>私の経歴</h2>
          </div>
          <ul>
            <li className="fadeInLeft">
              <h3>学歴</h3>
              <p>
                動物が好きで、
                <br />
                畜産家のある高校に進学。
                <br />
                その後ずっとなりたかった
                <br />
                馬に関わる仕事をするべく、
                <br />
                馬事湖南研修センターに入学。
              </p>
            </li>
            <li className="fadeInRight">
              <h3>職歴</h3>
              <p>
                専門学校卒業後やりたいと
                <br />
                思っていたアパレルへ就職。
                <br />
                その後はシーシャ屋さんで働きつつ、
                <br />
                知り合いに教えてもらい
                <br />
                興味が湧いたWEBデザイナーを勉強し、
                <br />
                現位の会社に就職。
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="a03" className={style.skillSec}>
        <div className={style.titleBox}>
          <span>Skill</span>
          <h2>できること</h2>
        </div>
        <ul className={style.skillBox}>
          {skill.map((skill, index) => {
            return (
              <li className={style.skillItem} key={index}>
                <h3>{skill.group}</h3>
                <ul className={style.skillList}>
                  {skill.list.map((list, index) => {
                    return (
                      <li className={style.listItem} key={index}>
                        <p>{list.title}</p>
                        <span>【{list.do}】</span>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </section>

      <section id="a04" className={style.workSec}>
        <div className="content">
          <div className={style.titleBox}>
            <span>Work</span>
            <h2>制作したもの</h2>
          </div>
          <div className={style.popupBox}>
            <ul className={style.workList}>
              {work.map((item, index) => (
                <li
                  onClick={() => {
                    setOpenIndex(index)
                    setIsOpen(true)
                  }}
                  className={style.workItem}
                >
                  <img src={item.topimg} alt="制作TOPイメージ" />

                  <button>詳しく見る</button>
                </li>
              ))}
            </ul>
            {openIndex !== null && (
              <div className={style.overlay} onClick={() => setOpenIndex(null)}>
                <div
                  className={style.modalBox}
                  onClick={e => e.stopPropagation()}
                >
                  <div className={style.modalTitle}>
                    <h3>{work[openIndex].title}</h3>

                    <button onClick={() => setOpenIndex(null)}>×</button>
                  </div>

                  <div className={style.modalBody}>
                    <div className={style.workTextBox}>
                      <p className={style.production}>
                        制作期間：{work[openIndex].production}
                      </p>
                      {work[openIndex].remarks && (
                        <div className={style.remarksFlex}>
                          <p className={style.remarks}>備考：</p>
                          <p className={style.remarkstext}>
                            {work[openIndex].remarks}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className={style.modalImgBox}>
                      <img
                        src={work[openIndex].modalimg}
                        alt="制作物イメージ"
                      />
                    </div>
                    {work[openIndex].subimg && (
                      <div className={style.modalsubBox}>
                        <p className={style.subBox}>下層ページ一部抜粋</p>
                        <FadeIn>
                          <img
                            src={work[openIndex].subimg}
                            alt="制作物イメージ"
                          />
                        </FadeIn>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
