import React from 'react'


const HtmlPage = ({
  htmlCode,
  setHtmlCode,
}) => {

  return (
    <>
      <div className={"w-full h-screen border-2 flex-1"}>
        <label htmlFor="">HTML</label><br />
        <textarea
          onChange={(e) => setHtmlCode(e.target.value)}
          value={htmlCode}

          className='w-full h-full' id="html_code"

        />
      </div>


    </>


  )
}

export default HtmlPage