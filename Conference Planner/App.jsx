import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage'
import ProductPage from './ProductPage'

function App() {

const [showProductPage, setShowProductPage] = useState(false);

  return (
    <>
   {!showProductPage && <LandingPage setShowProductPage={setShowProductPage}/>} 
   {showProductPage && <ProductPage/>} 
    </>
  )
}

export default App
