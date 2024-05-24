import React, { useEffect, useState } from 'react';
import HtmlPage from './components/HtmlPage/HtmlPage';
import Navigation from './components/Navigation/Navigation';
import { CssPage } from './components/CssPage/CssPage';
import { JavaPage } from './components/JavascriptPage/JavaPage';
import ConsolePage from './components/ConsolePage/ConsolePage';




const App = () => {
  const [selectedTabs, setSelectedTabs] = useState([0, 1, 2, 3, 4]);
  const [htmlCode, setHtmlCode] = useState('')
  const [cssCode, setCssCode] = useState('')
  const [jsCode, setJsCode] = useState('')



  useEffect(() => {


    onkeyup = () => {
      let output = document.getElementById("output");
      output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

    }

    onclick = () => {
      let output = document.getElementById("output");
      output.contentWindow.eval(jsCode);
    }


  }, [htmlCode, cssCode, jsCode,]);


  return (
    <div>
      <Navigation
        setSelectedTabs={setSelectedTabs}
      />
      <div className='flex'>
        {
          selectedTabs.includes(0) && <HtmlPage
            htmlCode={htmlCode}

            setHtmlCode={setHtmlCode}


          />
        }
        {
          selectedTabs.includes(1) && <CssPage
            cssCode={cssCode}
            setCssCode={setCssCode}

          />
        }
        {
          selectedTabs.includes(2) && <JavaPage
            jsCode={jsCode}
            setJsCode={setJsCode} />

        }
        {
          selectedTabs.includes(3) && <ConsolePage />
        }
        {

          <div className={"w-full h-screen border-2  flex-1"} >

            <div className='flex justify-between'>
              <label htmlFor="">output</label>
              <button id="button" className='bg-green-900 px-3 me-3 rounded-md text-white font-semibold' >Run</button>
            </div>

            <iframe className='w-full h-full bg-white' title="myFrame" id="output" >

            </iframe>

          </div>



        }
      </div>
    </div>

  )
}

export default App