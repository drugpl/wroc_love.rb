import React from "react"
import styles from "./soon.module.scss"
import SectionHeader from "../section_header"
import header from "./header.png"

const AgendaSoon = () => (
  <div className={styles.container}>
    <SectionHeader backgroundImage={header.src} textColor="#fff" small>
      Agenda &amp; Speakers
      <br />
      coming soon
    </SectionHeader>
  </div>
)

export default AgendaSoon
