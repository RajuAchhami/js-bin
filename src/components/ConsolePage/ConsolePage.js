import React from 'react'

const ConsolePage = ({ consoleCode, setConsoleCode }) => {
  return (

    <div className={"w-full h-screen border-2 flex-1"}>
      <label htmlFor="">Console</label><br />
      <textarea
        onChange={(e) => setConsoleCode(e.target.value)}
        value={consoleCode}
        className='w-full h-full' id="css_code"></textarea>
    </div>

  )
}

export default ConsolePage