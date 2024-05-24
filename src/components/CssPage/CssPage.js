import React from 'react'
export const CssPage = ({
  cssCode,
  setCssCode,
}) => {

  return (
    <div className={"w-full h-screen border-2 flex-1"}>
      <label htmlFor="">CSS</label><br />
      <textarea
        onChange={(e) => setCssCode(e.target.value)}
        value={cssCode}
        className='w-full h-full' id="css_code"></textarea>
    </div>
  )
}
