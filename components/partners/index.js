import React from "react"
import SectionHeader from "../section_header"
import styles from "./index.module.scss"
import { withConfiguration } from "../contexts/configuration"

const Partners = ({ partners }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <SectionHeader outerBorder={false}>Partners</SectionHeader>
      <div className={styles.partners}>
        {partners.map(({ name, image, link }, index) => (
          <a className={styles.partner} title={name} href={link} key={index}>
            <span
              style={{
                backgroundImage: image
                  ? `url(/static/partners/${image})`
                  : undefined,
              }}
            >
              {name}
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default withConfiguration(({ partners }) => ({ partners }))(Partners)
