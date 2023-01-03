import React from "react"
import Link from "next/link"
import logo from "./logo.png"
import styles from "./index.module.scss"
import Image from "next/image"

const Logo = () => (
  <Link href="/" className={styles.logo}>
    <Image src={logo} style={{ width: "100%", height: "auto" }} />
  </Link>
)

export default Logo
