import React from "react"
import SectionHeader from "../section_header"
import styles from "./index.module.scss"
import header from "./header.png"
import { withConfiguration } from "../contexts/configuration"

const Supporters = ({ supporters }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <SectionHeader
        outerBorder={false}
        backgroundImage={header.src}
        textColor="#FFF"
      >
        Supporters
      </SectionHeader>
      <div className={styles.supporters}>
        {supporters.map(({ name, image, link }, index) => (
          <a className={styles.supporter} title={name} href={link} key={index}>
            <span
              style={{
                backgroundImage: image
                  ? `url(/static/supporters/${image})`
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

export default withConfiguration(({ supporters }) => ({ supporters }))(
  Supporters
)
