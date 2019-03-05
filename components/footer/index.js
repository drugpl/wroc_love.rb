import React from 'react';
import Link from 'next/link';
import styles from './index.scss'

const Footer = () => (
  <div className={styles.container}>
    <Link href="/regulamin">
      <a href="/regulamin">terms of service</a>
    </Link>
    <Link href="/coc">
      <a href="/coc">code of conduct</a>
    </Link>
    <a href="mailto:all@wrocloverb.com">contact us</a>
  </div>
)

export default Footer
