import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styles from "./timeline.scss"

const Timeline = () => (
  <div className={styles.timeline}>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="wrocloverb"
      options={{
        height: 300
      }}
    />
  </div>
)

export default Timeline
