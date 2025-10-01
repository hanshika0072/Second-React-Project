import { useState } from 'react'
import './App.css'
import Banner from './Pages/Banner'
import Video from './Pages/Video'
import Counter from './Pages/Counter'
import Misson from './Pages/Misson'
import Journey from './Pages/Journey'
import Form from './Pages/Form'
import Experience from './Pages/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Banner/>
   <Video/>
   <Counter/>
   <Misson/>
   <Journey/>
   <Form/>
   <Experience/>
    </>
  )
}

export default App
