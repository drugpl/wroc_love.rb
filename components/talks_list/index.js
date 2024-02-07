import React, { useState } from "react"
import nl2br from "react-nl2br"
import styles from "./index.module.scss"
import SectionHeader from "../section_header"
import header from "./header.png"
import { withConfiguration } from "../contexts/configuration"
import {
  talksList,
  getFirstDayStart,
  getLastDayEnd,
} from "../../utils/talks_list"

const Talk = ({ title, speaker }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`${styles.talk} ${open ? styles.talk_open : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.talk_speaker}>{speaker}</div>
      <div className={styles.talk_title}>{title}</div>
    </div>
  )
}

const TalksList = ({ talks }) => (
  <div className={styles.container}>
    <SectionHeader backgroundImage={header.src} textColor="#fff">
      Talks
    </SectionHeader>
    {talks.map((talk) => (
      <Talk {...talk} />
    ))}
  </div>
)

export default withConfiguration((config) => ({
  talks: config.talks,
}))(TalksList)
