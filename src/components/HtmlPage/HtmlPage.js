import React from 'react'
import styles from './Htmlpage.module.css'

const HtmlPage = ({
  htmlCode,
  setHtmlCode
}) => {
  // const run = () => {
  //   let htmlCode = document.getElementById("html_code").value;
  //   let output = document.getElementById("output");

  //   output.contentDocument.body.innerHTML = htmlCode;

  // }
  return (
    <>
      <div className={"w-full h-screen flex-1 bg-white"}>
        <label htmlFor="">HTML</label><br />
        <textarea
          onChange={(e) => setHtmlCode(e?.target?.value)}
          // onChange={(e) => console.log(e?.target?.value)}
          value={htmlCode}
          className='w-full h-full' id="html_code"
        // onKeyUp={run}
        />
      </div>

      {/* <div className={styles.out}>
          <label htmlFor="">output</label>
        <iframe title="myFrame" id="output"></iframe>
          
      </div> */}

    </>


  )
}

export default HtmlPage