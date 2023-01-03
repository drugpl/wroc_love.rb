import React from "react"
import styles from "./index.module.scss"
import SectionHeader from "../section_header"
import Speaker from "./speaker"
import { withConfiguration } from "../contexts/configuration"

const Speakers = ({ speakers }) => (
  <div className={styles.container}>
    <SectionHeader>Speakers</SectionHeader>
    {speakers.map((speaker, index) => (
      <Speaker {...speaker} key={index} />
    ))}
  </div>
)

export default withConfiguration(({ speakers }) => ({ speakers }))(Speakers)
