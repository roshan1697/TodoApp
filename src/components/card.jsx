

const Card = (todo) => {

  return (
  <div className="flex flex-col gap-2 p-4 m-2.5 overflow-hidden bg-white rounded-lg has-shadow w-80">
  <div className="flex items-baseline justify-between">
      <h3 className="text-lg font-semibold">{todo.todo.title}</h3>
      <div className="text-xs">Updated {new Date().getDate() - new Date(todo.todo.updatedAt).getDate()} days ago.</div>
  </div>
  <div className="text-sm">
      <p>
          {todo.todo.description}
      </p>
      <button type="button" className="inline-flex items-center justify-center float-right gap-2 px-6 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 m-2.5">
  DELETE
</button>
  </div>
</div>
  )
}

export default Card