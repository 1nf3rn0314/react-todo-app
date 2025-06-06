const Navbar = () => {
  return (
    <nav className='navbar bg-blue-400 flex sm:justify-around p-5 items-center sticky top-0 justify-start'>
      <div className="logo text-white font-bold text-4xl">iPlanner</div>
      <div className="links hidden sm:block">
        <ul className='flex gap-6'>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
