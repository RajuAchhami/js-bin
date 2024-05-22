import React, { useEffect, useState } from 'react'
import HtmlPage from './components/HtmlPage/HtmlPage'
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssPage } from './components/CssPage/CssPage'
import { JavaPage } from './components/JavascriptPage/JavaPage'
import ConsolePage from './components/ConsolePage/ConsolePage'
import Outputpage from './components/Output/Outputpage'


const App = () => {
  const [selectedTabs, setSelectedTabs] = useState([0, 1, 2, 3, 4]);
  const [htmlCode, setHtmlCode] = useState('')
  const [cssCode, setCssCode] = useState('')
  const [jsCode, setJsCode] = useState('')

  useEffect(() => {
    if (selectedTabs?.length) {
      let iframe = document.getElementById("output");

      iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>"
iframe.contentWindow.eval(jsCode)
    }
    return () => {

    };
  }, [selectedTabs])

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
          selectedTabs.includes(2) && <JavaPage />

        }
        {
          selectedTabs.includes(3) && <ConsolePage />
        }
        {
          selectedTabs.includes(4) && <Outputpage />
        }
      </div>
    </div>
    // <>
    //   <BrowserRouter>
    //     <Navigation />
    //     <Routes>
    //       <Route path="/html" element={<HtmlPage />} />
    //       <Route path="/css" element={<CssPage />} />
    //       <Route path="/javaScript" element={<JavaPage />} />
    //       <Route path="/console" element={<ConsolePage />} />
    //       <Route path="/output" element={<Outputpage />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
  )
}

export default App