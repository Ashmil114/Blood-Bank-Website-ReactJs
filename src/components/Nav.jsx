import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='h-[100px] bg-[#ef7278]'>
        <ul className='flex flex-row justify-around md:w-[50%] h-full text-white items-center font-medium'>
            <a href="/"><li className='hover:border-b-2 p-3 cursor-pointer'>Home</li></a>
            <a href="#goals"><li className='hover:border-b-2 p-3 cursor-pointer'>Goals</li></a>
            <a href="#ourteam"><li className='hover:border-b-2 p-3 cursor-pointer'>Our Team</li></a>
            <Link to='/join'><li className='hover:border-b-2 p-3 cursor-pointer'>Join</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav
