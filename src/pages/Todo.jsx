import Navbar from "../components/navbar"
import { useState,useEffect } from "react"
import axios from "axios"
import Card from "../components/card"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { authState, todoState } from "../store/authState"
const Todo = () => {
    
    const authStateValue = useRecoilValue(authState);
    const setTodosState = useSetRecoilState(todoState)
    const todoStateValue = useRecoilValue(todoState)
  
  // const socket = io('http://localhost:3000',{ autoConnect: false})

    
  useEffect(()=>{
    // socket.connect()
    axios.get('http://localhost:3000/todo/todos',{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
    .then((res)=>{
     
      setTodosState({isLoading:false,isTodo:res?.data.data})
    
    })
    .catch((err)=>{
      console.log(err)
      setTodosState({isLoading:true,isTodo:[]})
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
        {todoStateValue.isLoading ?
          <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" >
          <span className="sr-only">Loading...</span>
        </div>
        
        :
          
          todoStateValue.isTodo.map((todo, i)=>{
           return <Card key={i} todo={todo}/>
            
          })
         
        }
      
      
      </div>


      </div>
    </>
  )
}

export default Todo