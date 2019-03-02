import React from "react";
import styles from "./index.scss";

const SectionHeader = ({
  children,
  backgroundImage,
  backgroundColor,
  textColor,
  outerBorder = true
}) => (
  <div
    className={styles.header}
    style={outerBorder ? {
      border: '1px solid black',
      margin: '10px 10px 0 10px'
    } : undefined}
  >
    <div
      className={styles.header_content}
      style={{
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        color: textColor
      }}
    >
      {children}
    </div>
  </div>
);

export default SectionHeader
