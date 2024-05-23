import React from 'react'
import styles from './Csspage.module.css'

export const CssPage = ({
  cssCode,
  setCssCode, 
}) => {

  return (
    <div className={styles.csspage}>
      <label htmlFor="">CSS</label><br />
      <textarea
      onChange={(e)=>setCssCode(e.target.value)}
      value={cssCode}
      name="css" id="css_code"></textarea>
    </div>
  )
}
