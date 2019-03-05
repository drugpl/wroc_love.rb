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

  const label = talk => `${talk.start} - ${talk.end} ${talk.speaker ? `${talk.speaker} – ` : ''} ${talk.title}`

  return (
    <div className={styles.container}>
      <div className={styles.postcard} style={{ backgroundImage: `url(${image})` }}>
        {!!(currentTalk || nextTalk) && (
          <div className={styles.info}>
            {currentTalk &&
            <div className={styles.now}>
              NOW: {label(currentTalk)}
            </div>
            }
            {nextTalk &&
            <div className={styles.later}>
              NEXT: {label(nextTalk)}
            </div>
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Postcard
