import React from 'react';
import styles from './index.scss'
import config from '../../conference.js'

const Header = ({ }) => (
  <div className={styles.container}>
    <div className={styles.date}>
      {config.date}
    </div>
    {config.cfpUrl ? (
      <div className={styles.cfp}>
        <a href={config.cfpUrl} className={styles.cfp_url}>Call for papers</a>
      </div>
    ) : (
      <div className={`${styles.cfp} ${styles.cfp_disabled}`}>
        <span className={styles.cfp_url}>Call for papers</span>
      </div>
    )}
    {config.ticketsUrl ? (
      <div className={styles.tickets}>
        <a href={config.ticketsUrl} className={styles.tickets_url}>GET TICKETS</a>
      </div>
    ) : (
      <div className={`${styles.tickets} ${styles.tickets_disabled}`}>
        <span className={styles.tickets_url}>GET TICKETS</span>
      </div>
    )}
  </div>
)

export default Header
