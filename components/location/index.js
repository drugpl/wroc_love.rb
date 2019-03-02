import React from 'react';
import SectionHeader from "../section_header"
import styles from './index.scss'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./venue_map'), {
  ssr: false
});

const Location = () => (
  <div className={styles.container}>
    <SectionHeader outerBorder={false}>
      Location
    </SectionHeader>
    <div className={styles.map}>
      <Map />
    </div>
  </div>
)

export default Location
