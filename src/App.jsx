import { useState } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'

function App() {
  const [todos, setTodos] = useState([])
    // fetch all todos from server

  return (
    <>
      <div className='m-6 '>

      <Navbar/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        
      <Card/>
      
      
      </div>


      </div>
    </>
  )
}


export default App
