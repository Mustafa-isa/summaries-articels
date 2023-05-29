import React from 'react'
import Demo from "./component/Demo"
import Hero from "./component/Hero"
import "./App.css"
const App = () => {
  return (
  <main>
    <div className="main">
      <div className="gradient"></div>
      <div className="app">
        <Hero/>
        <Demo/>
      </div>
    </div>
  </main>
  )
}

export default App