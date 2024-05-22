import React from 'react'
import styles from './Htmlpage.module.css'

const HtmlPage = () => {

  const run = () => {
    let htmlCode = document.getElementById("html_code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode;

  }


  return (
    <>
      <div className={styles.htmlpage}>
        <label htmlFor="">HTML</label><br />
        <textarea id="html_code" onKeyUp={run}></textarea>
      </div>

      <div className={styles.out}>
          <label htmlFor="">output</label>
        <iframe title="myFrame" id="output"></iframe>
          
      </div>

    </>


  )
}

export default HtmlPage