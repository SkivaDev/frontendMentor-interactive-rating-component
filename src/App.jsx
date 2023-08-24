import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RatingComponent from './components/RatingComponent'
import AppreciationComponent from './components/AppreciationComponent'
function App() {

  const [isSummited, setIsSummited] = useState(false);


  return (
    <main className="flex justify-center items-center w-full h-screen">
      {isSummited ? (<AppreciationComponent setIsSummited={setIsSummited}/>):(<RatingComponent setIsSummited={setIsSummited}/>)}
    </main>
  )
}

export default App
