import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import ViewUsers from './ViewUser'
import Footer from './Footer'

function App() {

  return (
    <>
      <div>
        <Header/>
        <ViewUsers/>
        <Footer/>
      </div>
    </>
  )
}

export default App
