import React from "react"
import styles from "./index.module.scss"

const SectionHeader = ({
  children,
  backgroundImage,
  backgroundColor,
  textColor,
  small = false,
  outerBorder = true,
  extraSpace = false,
}) => (
  <div
    className={`${styles.header} ${small ? styles.header_small : ""} ${
      extraSpace ? styles.header_extra_space : ""
    }`}
    style={
      outerBorder
        ? {
            border: "1px solid black",
            margin: small ? "10px" : "10px 10px 0 10px",
          }
        : undefined
    }
  >
    <div
      className={`${styles.header_content} ${
        small ? styles.header_content_small : ""
      }`}
      style={{
        backgroundColor,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        color: textColor,
      }}
    >
      {children}
    </div>
  </div>
)

export default SectionHeader
