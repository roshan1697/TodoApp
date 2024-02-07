import Navbar from "../components/navbar"
import { useState,useEffect } from "react"
import axios from "axios"
import Card from "../components/card"
import { useRecoilValue } from "recoil"
import { authState } from "../store/authState"
const Todo = () => {
    const [todos, setTodos] = useState([])
    const authStateValue = useRecoilValue(authState);
  
  // const socket = io('http://localhost:3000',{ autoConnect: false})

    
  useEffect(()=>{
    // socket.connect()
    axios.get('http://localhost:3000/todo/todos',{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
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
      <div style={{display: "flex"}}>
                <h2>Welcome {authStateValue.username}</h2>
                <div style={{marginTop: 25, marginLeft: 20}}>
                    <button onClick={() => {
                        localStorage.removeItem("token");
                        window.location = "/login";
                    }}>Logout</button>
                </div>
            </div>
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

export default Todo