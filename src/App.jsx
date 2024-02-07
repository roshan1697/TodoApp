import { Routes,Route } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Todo from './pages/Todo'

// import { io } from 'socket.io-client'
import { useSetRecoilState } from 'recoil'
import { authState } from './store/authState'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
    const setAuth = useSetRecoilState(authState);
    const navigate = useNavigate();

    const init = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get('http://localhost:3000/user/me', {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            if (response.data.username) {
                
                setAuth({  username: response.data.username });
                navigate("/todos");
            } else {
                navigate("/login");
            }
        } catch (e) {
            navigate("/login");
        }
    }
    useEffect(() => {
        init();
    }, [])
  
  // socket.on('newTodo',(newTodo)=>{
  //   console.log(newTodo)
    
  //   setTodos((prevTodos)=>[...prevTodos,newTodo])
  // })
  // socket.on('deleteTodo',(id)=>{
  //   const updatedTodos = todos.filter((todo)=>{
  //     return todo._id !== id
  //   })
  //   console.log(updatedTodos)
  //   setTodos(updatedTodos)
  // })
  return (
    <>
     <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/' element={<Login />} />
                    
    
                    <Route path='/todos' element={<Todo />} />
                    
                </Routes>
    </>
  )
}


export default App
