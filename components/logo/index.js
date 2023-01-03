import React from "react"
import Link from "next/link"
import logo from "./logo.png"
import styles from "./index.module.scss"

const Logo = () => (
  <Link href="/">
    <a className={styles.logo}>
      <img src={logo} />
    </a>
  </Link>
)

export default Logo
