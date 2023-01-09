import React from "react"
import Link from "next/link"
import styles from "./index.module.scss"

const Footer = () => (
  <div className={styles.container}>
    <Link href="/regulamin">terms of service</Link>
    <Link href="/coc">code of conduct</Link>
    <a href="mailto:all@wrocloverb.com">contact us</a>
  </div>
)

export default Footer
