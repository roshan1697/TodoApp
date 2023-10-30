import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])
 
    
  useEffect(()=>{
    
    axios.get('http://localhost:3000/')
    .then((res)=>{
      setTodos(res?.data.data)
      
     
    })
    .catch((err)=>{
      console.log(err)
    })
    
  },[])
  return (
    <>
      <div className='m-6 '>

      <Navbar/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {todos === undefined ?
          <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" >
          <span className="sr-only">Loading...</span>
        </div>
        
        :
          
          todos.map((todo, i)=>{
           return <Card key={i} todo={todo}/>
            
          })
         
        }
      
      
      </div>


      </div>
    </>
  )
}


export default App
