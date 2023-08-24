import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RatingComponent from './components/RatingComponent'
import AppreciationComponent from './components/AppreciationComponent'
function App() {

  const [isSummited, setIsSummited] = useState(false);
  const [ratingNumber, setRatingNumber] = useState(0);


  return (
    <main className="flex justify-center items-center w-full h-screen">
      {isSummited ? (<AppreciationComponent ratingNumber={ratingNumber}/>):(<RatingComponent setIsSummited={setIsSummited} setRatingNumber={setRatingNumber} ratingNumber={ratingNumber}/>)}
    </main>
  )
}

export default App
