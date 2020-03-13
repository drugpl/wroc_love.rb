import React from "react"
import styles from "./index.scss"
import { withConfiguration } from "../contexts/configuration"

const Cancellation = ({ cancellation: { content, url, cta } = {} }) =>
  content ? (
    <div className={styles.backdrop}>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: content }} />

        <a href={url} className={styles.cta}>
          {cta}
        </a>
      </div>
    </div>
  ) : null

export default withConfiguration(config => ({
  cancellation: config.cancellation
}))(Cancellation)
