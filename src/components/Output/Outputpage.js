import React from 'react'
import styles from './outputPage.module.css'

const Outputpage = () => {


  return (

    <div className={styles.out}>
      <label htmlFor="">output</label>
      <iframe title="myFrame" id="output" ></iframe>

    </div>
  )
}

export default Outputpage