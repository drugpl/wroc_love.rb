import React from "react"
import SectionHeader from "../section_header"
import styles from "./index.module.scss"
import dynamic from "next/dynamic"
import { withConfiguration } from "../contexts/configuration"

const Map = dynamic(() => import("./venue_map"), {
  ssr: false,
})

const Location = ({ venue }) => (
  <div className={styles.container}>
    <SectionHeader outerBorder={false}>Location</SectionHeader>
    <div className={styles.map}>
      <Map venue={venue} />
    </div>
  </div>
)

export default withConfiguration(({ venue }) => ({ venue }))(Location)
