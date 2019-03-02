import React from 'react';
import SectionHeader from "../section_header"
import { supporters } from "../../conference.js";
import styles from './index.scss'

const Supporters = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <SectionHeader outerBorder={false}>Supporters</SectionHeader>
      <div className={styles.supporters}>
        {supporters.map(({ name, image, link }, index) => (
          <a
            className={styles.supporter}
            title={name}
            href={link}
            key={index}
          >
            <span style={{ backgroundImage: image ? `url(/static/supporters/${image})` : undefined }}>
              {name}
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default Supporters
