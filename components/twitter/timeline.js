import React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import styles from "./timeline.module.scss"

const Timeline = () => (
  <div className={styles.timeline}>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="wrocloverb"
      options={{
        height: 300,
      }}
      noBorders
    />
  </div>
)

export default Timeline
