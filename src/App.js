import React, { useState } from 'react'
import "./app.css"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
  const [src,setSrc]=useState("")
  function getData(s){
    setSrc(s)
  }
  return (
    <div>
      <Navbar />
      <Home gD={getData}/>
      <Main search={src} />
      <Footer />

    </div>
  )
}

export default App