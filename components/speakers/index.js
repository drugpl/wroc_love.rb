import React, { useState } from "react";
import nl2br from "react-nl2br";
import styles from "./index.scss";
import { speakers } from "../../conference.js";
import SectionHeader from "../section_header";

const Speakers = () => (
  <div className={styles.container}>
    <SectionHeader>Speakers</SectionHeader>
    {speakers.map(({ image, name, description, links }, index) => (
      <div className={styles.speaker} key={index} tabIndex="0">
        <div className={styles.speaker_photo_container}>
          <div
            className={styles.speaker_photo}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className={styles.speaker_details}>
          <div className={styles.speaker_name}>{name}</div>
          <div className={styles.speaker_description}>
            {description.html ? (
              <div dangerouslySetInnerHTML={{ __html: description.html }} />
            ) : (
              nl2br(description)
            )}
            {links && (
              <div className={styles.speaker_links}>
                {Object.entries(links).map(([name, link], index) => (
                  <a href={link} key={index}>{`${name} `}</a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Speakers;
