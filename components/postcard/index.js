import React, { useState, useEffect } from 'react'
import styles from './index.scss'
import image from './manhattan.png'
import { agenda } from '../../conference.js'

const talksWithDates = agenda.reduce((list, day) => {
  const { date, talks } = day
  talks.forEach(talk => {
    const { start, end, title, speaker } = talk
    const startTime = new Date(`${date}T${start}:00`)
    const endTime = new Date(`${date}T${end}:00`)

    list.push({
      start, end, title, speaker, startTime, endTime
    })
  })
  return list
}, [])


const Postcard = () => {
  const [ now, setNow ] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(() => new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const currentTalkIndex = talksWithDates.findIndex(talk => talk.startTime < now && talk.endTime > now)
  const currentTalk = currentTalkIndex !== -1 ? talksWithDates[currentTalkIndex] : null

  const nextTalk = talksWithDates.find((talk, index) => (
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
