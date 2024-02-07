import axios from "axios"

const DeleteButton = (value) => {
    
    const handleDelete = () => {
    
        axios.delete('http://localhost:3000/todo/todos/'+ value.value,{
          headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
          }
        } )
        
        .catch((err)=>{
          console.log(err)
        })
      }
    
  return (
    <button type="button" onClick={handleDelete} className="inline-flex items-center justify-center float-right gap-2 px-6 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 m-2.5">
    DELETE
  </button>
  )
}

export default DeleteButton