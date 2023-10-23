import AddButton from "../assets/addbutton"


const Navbar = () => {
  return (
    <nav className="mt-6 relative  w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 flex items-center justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto ">
      <div className="flex items-center justify-between">
        <a className="flex-none text-xl font-semibold " href="#" >Brand</a>
        
      </div>
     
        <div>
        <AddButton/>
          
        </div>
    </nav>
  )
}

export default Navbar