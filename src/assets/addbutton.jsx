import axios from "axios"
import { useState } from "react"


const AddButton = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
    const dropdownButton = document.querySelector('#hs-dropdown-basic')
    const dropdownList =document.querySelector('#dropdownlist')
    const [open, setOpen] = useState(false)

   const handleClick = () => {
    
    const data = {
      title,
      description
    }
    axios.post('http://localhost:3000/', data)
      
      .catch((err)=>{
        console.log(err)
      })
    
   }


  return (
    <div className="py-2.5 ">
    <button id="hs-dropdown-basic" 
    type="button" onClick={()=>{setOpen(!open)}}
     className="relative inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600">
      Actions
      
    </button>
  
    <div className={open ? 'absolute duration translate-y-2.5  opacity-1 w-1/2 right-0  mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2' 
    : 
     ' hidden'}  
     id='dropdownlist'>
      <input type="text" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" className="block w-full px-4 py-3 mt-2 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500" />
<textarea onChange={(e)=>{
  setDescription(e.target.value)
}} className="block w-full px-4 py-3 mt-2 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 " rows="3" placeholder="Description"></textarea>
<button type="button" onClick={handleClick} className="inline-flex items-center justify-center float-right gap-2 px-6 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 m-2.5">
  ADD
</button>
    </div>
  </div>
  )
}

export default AddButton