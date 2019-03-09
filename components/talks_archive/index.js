import React from 'react';
import styles from './index.scss'
import SectionHeader from "../section_header"

const TalksArchive = () => (
  <div className={styles.container}>
    <SectionHeader outerBorder={false}>
      Talks Archive
    </SectionHeader>
    <div className={styles.embed}>
      <iframe src="http://www.youtube.com/embed/?listType=user_uploads&list=wrocloverb" allowFullScreen/>
    </div>
  </div>
)

export default TalksArchive
