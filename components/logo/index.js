import React from "react"
import Link from "next/link"
import logo from "./logo.png"
import styles from "./index.module.scss"

const Logo = () => (
  <Link href="/" className={styles.logo}>
    <img src={logo.src} />
  </Link>
)

export default Logo
