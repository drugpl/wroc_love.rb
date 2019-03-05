import React from "react";
import styles from "./index.scss";
import SectionHeader from "../section_header";
import Speaker from './speaker'

const Speakers = ({ speakers }) => (
  <div className={styles.container}>
    <SectionHeader>Speakers</SectionHeader>
    {speakers.map((speaker, index) => (
      <Speaker {...speaker} index={index} />
    ))}
  </div>
);

export default Speakers;
