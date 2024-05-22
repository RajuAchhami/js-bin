import React from 'react'
import HtmlPage from './components/HtmlPage/HtmlPage'
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssPage } from './components/CssPage/CssPage'
import { JavaPage } from './components/JavascriptPage/JavaPage'
import ConsolePage from './components/ConsolePage/ConsolePage'
import Outputpage from './components/Output/Outputpage'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/html" element={<HtmlPage />} />
          <Route path="/css" element={<CssPage />} />
          <Route path="/javaScript" element={<JavaPage />} />
          <Route path="/console" element={<ConsolePage />} />
          <Route path="/output" element={<Outputpage />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App