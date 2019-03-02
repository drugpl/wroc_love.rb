import React from 'react'
import styles from './index.scss'
import image from './manhattan.png'

const Postcard = ({ talksList }) => {
  const now = new Date()
  const currentTalkIndex = talksList.findIndex(talk => talk.startTime <= now && talk.endTime >= now)
  const currentTalk = currentTalkIndex !== -1 ? talksList[currentTalkIndex] : null

  const nextTalk = talksList.find((talk, index) => (
    talk.startTime > now && index > currentTalkIndex
  ))

  return (
    <div className={styles.container}>
      <div className={styles.postcard} style={{ backgroundImage: `url(${image})` }}>
        {!!(currentTalk || nextTalk) && (
          <div className={styles.info}>
            {currentTalk &&
            <div className={styles.now}>
              NOW: {currentTalk.start} - {currentTalk.end} {currentTalk.speaker} &laquo; {currentTalk.title} &raquo;
            </div>
            }
            {nextTalk &&
            <div className={styles.later}>
              NEXT: {nextTalk.start} - {nextTalk.end} {nextTalk.speaker} &laquo; {nextTalk.title} &raquo;
            </div>
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Postcard
