import React from "react"
import styles from "./index.module.scss"
import SectionHeader from "../section_header"
import arrowRight from "./arrow-right.svg"

console.log(arrowRight)
const XTwitter = () => (
  <div className={styles.container}>
    <a
      className={styles.link}
      href="https://www.youtube.com/embed/?listType=user_uploads&list=wrocloverb"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SectionHeader outerBorder={false} extraSpace>
        X (Twitter)
        <div className={styles.follow}>
          <span>Follow</span>
        </div>
      </SectionHeader>
    </a>
  </div>
)

export default XTwitter
