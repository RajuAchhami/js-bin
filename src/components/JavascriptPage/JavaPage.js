import React from 'react';

export const JavaPage = ({
  jsCode,
  setJsCode,
}) => {
  return (
    <div className={"w-full h-screen border-2 flex-1"}>
      <label htmlFor="">Javascript</label><br />
      <textarea
        onChange={(e) => setJsCode(e?.target?.value)}
        value={jsCode}
        className='w-full h-full' id="java_code"></textarea>
    </div>
  )
}
