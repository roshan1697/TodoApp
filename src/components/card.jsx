import axios from "axios"
import DeleteButton from "../assets/deletebutton"

const Card = (todo) => {

  
  return (
  <div className="flex flex-col gap-2 p-4 m-2.5 overflow-hidden bg-white rounded-lg has-shadow w-80">
  <div className="flex items-baseline justify-between">
      <h3 className="text-lg font-semibold">{todo.todo.title}</h3>
      <div className="text-xs">Added {new Date().getDate() - new Date(todo.todo.updatedAt).getDate()} days ago.</div>
  </div>
  <div className="text-sm">
      <p>
          {todo.todo.description}
      </p>
      <DeleteButton value={todo.todo._id}/>
      
  </div>
</div>
  )
}

export default Card