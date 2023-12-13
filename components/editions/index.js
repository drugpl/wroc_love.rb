import React from "react"
import styles from "./index.module.scss"
import { withConfiguration } from "../contexts/configuration"

const Editions = ({ editions }) => (
  <div className={styles.container}>
    <div className={styles.header}>Previously on wroclove.rb</div>

    <ul className={styles.editions}>
      {editions.map((edition) => (
        <li key={edition}>
          <a href={`https://${edition}.wrocloverb.com`}>{edition}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default withConfiguration((config) => ({
  editions: config.editions,
}))(Editions)
