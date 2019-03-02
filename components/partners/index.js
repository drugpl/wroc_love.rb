import React from "react";
import SectionHeader from "../section_header";
import { partners } from "../../conference.js";
import styles from "./index.scss";

const Partners = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <SectionHeader outerBorder={false}>Partners</SectionHeader>
      <div className={styles.partners}>
        {partners.map(({ name, image, url }, index) => (
          <a className={styles.partner} title={name} href={url} key={index}>
            <span
              style={{
                backgroundImage: image
                  ? `url(/static/partners/${image})`
                  : undefined
              }}
            >
              {name}
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Partners;
