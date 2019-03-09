import React, { useState } from "react";
import nl2br from "react-nl2br";
import styles from "./index.scss";
import SectionHeader from "../section_header";
import header from "./header.png";
import { withConfiguration } from "../contexts/configuration";
import talksList from "../../utils/talks_list";

const getCurrentTalk = (now, talksList) => {
  const talk = talksList.find(
    talk => talk.startTime <= now && talk.endTime >= now
  );

  if (talk) {
    return talk;
  } else {
    return talksList.sort(
      (a, b) => Math.abs(a.startTime - now) - Math.abs(b.startTime - now)
    )[0];
  }
};

const Agenda = ({ agenda, talksList }) => {
  const now = new Date();
  const currentTalk = getCurrentTalk(now, talksList);

  const isCurrentTalk = (date, talk) =>
    currentTalk &&
    (date === currentTalk.date &&
      talk.start === currentTalk.start &&
      talk.end === currentTalk.end);

  return (
    <div className={styles.container}>
      <SectionHeader backgroundImage={header} textColor="#fff">
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
                    isCurrentTalk(date, talk) ? styles.talk_active : ""
                  }`}
                  key={index}
                >
                  <div className={styles.talk_time}>
                    {talk.start} - {talk.end}
                  </div>
                  <div className={styles.talk_description}>
                    {talk.speaker && (
                      <div className={styles.talk_speaker}>{talk.speaker}</div>
                    )}
                    <div className={styles.talk_name}>{nl2br(talk.title)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withConfiguration(config => ({
  agenda: config.agenda,
  talksList: talksList(config.agenda)
}))(Agenda);
