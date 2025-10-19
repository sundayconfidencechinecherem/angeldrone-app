import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PropertyCardF from './components/PropertyCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PropertyCardF />
    </>
  )
}

export default App;
