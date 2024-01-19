import React from "react"
import dynamic from "next/dynamic"
import styles from "./index.module.scss"
import SectionHeader from "../section_header"

const Timeline = dynamic(() => import("./timeline"), {
  ssr: false,
})

const Location = () => (
  <div className={styles.container}>
    <SectionHeader>Twitter</SectionHeader>
    <Timeline />
  </div>
)

export default Location
