import React from 'react'
import styles from './navigation.module.css'

import Logo from './logo'

export default () => (
  <nav role="navigation" style={{borderBottom: `white solid 2px`, padding: `10px`}}>
    <div className={styles.navigationLogo}>
      <Logo />
    </div>
  </nav>
)
