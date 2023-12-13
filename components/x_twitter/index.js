import React from "react"
import styles from "./index.module.scss"
import SectionHeader from "../section_header"
import arrowRight from "./arrow-right.svg"
import PropTypes from "prop-types"
import { withConfiguration } from "../contexts/configuration"

const XTwitter = ({ twitterUrl }) => (
  <div className={styles.container}>
    <a
      className={styles.link}
      href={twitterUrl}
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

XTwitter.propTypes = {
  twitterUrl: PropTypes.string,
}

export default withConfiguration((config) => ({
  twitterUrl: config.twitterUrl,
}))(XTwitter)
