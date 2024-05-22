import React from 'react'
import styles from './Csspage.module.css'

export const CssPage = () => {
  return (
    <div className={styles.csspage}>
      <label htmlFor="">CSS</label><br />
      <textarea name="css" id=""></textarea>
    </div>
  )
}
