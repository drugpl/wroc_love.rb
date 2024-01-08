import React from "react"
import styles from "./index.module.scss"
import SectionHeader from "../section_header"
import { withConfiguration } from "../contexts/configuration"
import PropTypes from "prop-types"

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.arrow}
  >
    <path d="M18 8L22 12L18 16" />
    <path d="M2 12H22" />
  </svg>
)

const TalksArchive = ({ youtubeAccount }) => (
  <div className={styles.container}>
    <SectionHeader outerBorder={true}>Talks Archive</SectionHeader>
    <div className={styles.embed}>
      <iframe
        src={`https://www.youtube.com/embed/?listType=user_uploads&list=${youtubeAccount}`}
        allowFullScreen
      />
    </div>
    <a
      className={styles.link}
      href={`https://www.youtube.com/user/${youtubeAccount}/videos`}
      target="_blank"
      rel="noopener noreferrer"
    >
      See all on YouTube <Arrow />
    </a>
  </div>
)

TalksArchive.propTypes = {
  twitterUrl: PropTypes.string,
}

export default withConfiguration((config) => ({
  youtubeAccount: config.youtubeAccount,
}))(TalksArchive)
