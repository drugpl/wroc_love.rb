import React from "react"
import styles from "./index.module.scss"
import { withConfiguration } from "../contexts/configuration"

const Header = ({ date, cfpUrl, ticketsUrl }) => (
  <div className={styles.container}>
    <div className={styles.date}>{date}</div>
    <div className={styles.links}>
      {cfpUrl ? (
        <div className={styles.cfp}>
          <a href={cfpUrl} className={styles.cfp_url}>
            Call for papers
          </a>
        </div>
      ) : (
        <div className={`${styles.cfp} ${styles.cfp_disabled}`}>
          <span className={styles.cfp_url}>Call for papers</span>
        </div>
      )}
      {ticketsUrl ? (
        <div className={styles.tickets}>
          <a href={ticketsUrl} className={styles.tickets_url}>
            GET TICKETS
          </a>
        </div>
      ) : (
        <div className={`${styles.tickets} ${styles.tickets_disabled}`}>
          <span className={styles.tickets_url}>GET TICKETS</span>
        </div>
      )}
    </div>
  </div>
)

export default withConfiguration((config) => ({
  date: config.date,
  cfpUrl: config.cfpUrl,
  ticketsUrl: config.ticketsUrl,
}))(Header)
