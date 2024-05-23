import React from 'react';
import styles from './javapage.module.css'

export const JavaPage = ({
  jsCode,
  setJsCode,
}) => {
  return (
    <div className={styles.javapage}>
      <label htmlFor="">Javascript</label><br />
      <textarea 
        onChange={(e) => setJsCode(e.target.value)}
        value={jsCode}  
        name="html" id=""></textarea>
    </div>
  )
}
