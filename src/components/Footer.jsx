const Footer = () => {
  return (
    <nav className='flex justify-around items-center h-15 fixed bottom-0 w-full'>
      <div className='footer-left flex gap-1 items-center'>
        Made with <img className='w-6' src="/heart.svg" alt="heart" /> by <a href='https://github.com/1nf3rn0314' target='_blank' className='text-red-500'>1nf3rn0314</a>
      </div>
      <a href='https://github.com/1nf3rn0314/react-todo-app'>
        <div className='bg-slate-800 footer-right flex gap-3 items-center justify-center p-2 rounded-full hover:cursor-pointer hover:bg-slate-600'>
          <img className='w-8' src='/github.svg' alt='github-icon' />
          <div className='github text-white'>GitHub</div>
        </div>
      </a>
    </nav>
  )
}

export default Footer
