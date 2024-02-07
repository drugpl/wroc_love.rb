import React, { useState } from "react"
import nl2br from "react-nl2br"
import styles from "./index.module.scss"
import SectionHeader from "../section_header"
import header from "./header.png"
import { withConfiguration } from "../contexts/configuration"
import {
  talksList,
  getFirstDayStart,
  getLastDayEnd,
} from "../../utils/talks_list"
import TalksList from "../talks_list"

class Agenda extends React.Component {
  state = { renderDot: false }
  componentDidMount() {
    this.setState({ renderDot: true })
  }

  currentTalk(now, talksList) {
    const { startDate, endDate } = this.props

    if (now < startDate || now > endDate) {
      return
    }

    const talk = talksList.find(
      (talk) => talk.startTime <= now && talk.endTime >= now
    )

    if (talk) {
      return talk
    } else {
      return talksList.sort(
        (a, b) => Math.abs(a.startTime - now) - Math.abs(b.startTime - now)
      )[0]
    }
  }

  isCurrentTalk(currentTalk, talk, date) {
    if (!this.state.renderDot) {
      return false
    }

    return (
      currentTalk &&
      date === currentTalk.date &&
      talk.start === currentTalk.start &&
      talk.end === currentTalk.end
    )
  }

  render() {
    const { agenda, displayAgenda, talksList, talks } = this.props
    const now = new Date()
    const currentTalk = this.currentTalk(now, talksList)

    if (!displayAgenda) {
      if (!!talks?.length) {
        return <TalksList />
      }

      return (
        <div className={styles.container}>
          <SectionHeader backgroundImage={header.src} textColor="#fff" small>
            Agenda &amp; Speakers
            <br />
            coming soon
          </SectionHeader>
        </div>
      )
    }

    return (
      <div className={styles.container}>
        <SectionHeader backgroundImage={header.src} textColor="#fff">
          Agenda
        </SectionHeader>
        {agenda.map(({ label, date, talks }) => (
          <div className={styles.day} key={date}>
            <div className={styles.day_header}>{nl2br(label)}</div>
            <div className={styles.day_calendar_container}>
              <div className={styles.day_calendar}>
                {talks.map((talk, index) => (
                  <div
                    className={`${styles.talk} ${
                      this.isCurrentTalk(currentTalk, talk, date)
                        ? styles.talk_active
                        : ""
                    }`}
                    key={index}
                  >
                    <div className={styles.talk_time}>
                      {talk.start} - {talk.end}
                    </div>
                    <div className={styles.talk_description}>
                      {talk.speaker && (
                        <div className={styles.talk_speaker}>
                          {talk.speaker}
                        </div>
                      )}
                      <div className={styles.talk_name}>
                        {nl2br(talk.title)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default withConfiguration((config) => ({
  agenda: config.agenda,
  displayAgenda: config.displayAgenda,
  talksList: talksList(config.agenda),
  talks: config.talks,
  startDate: getFirstDayStart(config.agenda),
  endDate: getLastDayEnd(config.agenda),
}))(Agenda)
