

const Card = () => {
  return (
  <div className="flex flex-col gap-2 p-4 m-2.5 overflow-hidden bg-white rounded-lg has-shadow w-80">
  <div className="flex items-baseline justify-between">
      <h3 className="text-xl font-semibold">Sira team talk</h3>
      <div className="text-xs">Ricco Xie • 1 June 2023</div>
  </div>
  <div className="text-sm">
      <p>
          🕹 Customizable and 😍 accessible design system which provides TailwindCSS
          component class name library to build modern UI. 💥
      </p>
  </div>
</div>
  )
}

export default Card