import React from "react"
import styles from "./index.module.scss"
import SectionHeader from "../section_header"

const TalksLink = () => (
  <div className={styles.container}>
    <a
      className={styles.link}
      href="https://www.youtube.com/embed/?listType=user_uploads&list=wrocloverb"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SectionHeader outerBorder={false} extraSpace>
        Previously on wroclove.rb
      </SectionHeader>
    </a>
  </div>
)

export default TalksLink
