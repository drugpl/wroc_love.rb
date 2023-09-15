import React from "react"
import styles from "./index.module.scss"
import image from "./manhattan.png"
import { withConfiguration } from "../contexts/configuration"
import {
  talksList,
  getFirstDayStart,
  getLastDayEnd,
  currentDateInPoland,
} from "../../utils/talks_list"

class Postcard extends React.Component {
  state = { renderText: false }

  componentDidMount() {
    this.setState({ renderText: true })
  }

  render() {
    const { renderText } = this.state
    const { talksList, startDate, endDate } = this.props
    const now = new Date()

    const currentTalkIndex = talksList.findIndex(
      (talk) => talk.startTime <= now && talk.endTime >= now
    )
    const currentTalk =
      currentTalkIndex !== -1 ? talksList[currentTalkIndex] : null

    const nextTalk = talksList.find(
      (talk, index) => talk.startTime > now && index > currentTalkIndex
    )

    const showTalkInfo =
      !!(currentTalk || nextTalk) &&
      renderText &&
      now > startDate &&
      now < endDate

    const label = (talk) =>
      `${talk.start} - ${talk.end} ${
        talk.speaker ? `${talk.speaker} – ` : ""
      } ${talk.title}`

    return (
      <div className={styles.container}>
        <div
          className={styles.postcard}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          {showTalkInfo && (
            <div className={styles.info}>
              {currentTalk && (
                <div className={styles.now}>NOW: {label(currentTalk)}</div>
              )}
              {nextTalk && (
                <div className={styles.later}>NEXT: {label(nextTalk)}</div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withConfiguration((config) => ({
  talksList: talksList(config.agenda),
  startDate: getFirstDayStart(config.agenda),
  endDate: getLastDayEnd(config.agenda),
}))(Postcard)
