import React, { useState } from "react";
import nl2br from 'react-nl2br';
import styles from "./index.scss";
import { agenda } from '../../conference.js';
import SectionHeader from "../section_header"

const Agenda = () => (
  <div className={styles.container}>
    <SectionHeader backgroundColor="#000" textColor="#fff">
      Agenda
    </SectionHeader>
    {agenda.map(({ label, date, talks }) => (
      <div className={styles.day} key={date}>
        <div className={styles.day_header}>
          {nl2br(label)}
        </div>
        <div className={styles.day_calendar_container}>
          <div className={styles.day_calendar}>
            {talks.map(({ start, end, speaker, title }, index) => (
              <div className={`${styles.talk} ${styles.talk_active}`} key={index}>
                <div className={styles.talk_time}>
                  {start} - {end}
                </div>
                <div className={styles.talk_description}>
                  {speaker &&
                  <div className={styles.talk_speaker}>
                    {speaker}
                  </div>}
                  <div className={styles.talk_name}>
                    {nl2br(title)}
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

export default Agenda
