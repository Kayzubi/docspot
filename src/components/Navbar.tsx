import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoCloseCircleOutline } from 'react-icons/io5'
import useGetDeviceMode from '../hooks/useGetDeviceMode'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const isDarkmode = useGetDeviceMode()

  return (
    <div className='  z-50 fixed top-0 w-full left-0'>
      <div className=' max-w-7xl mx-auto flex items-center justify-between p-4'>
        <Link to='/home' className=' font-semibold text-2xl'>
          Doc<span className=' text-las-palmas-400 font-black'>Spot</span>
        </Link>
        <div className=' flex gap-6 items-center md:hidden'>
          <ul className=' flex items-center gap-4'>
            <li className=' cursor-pointer'>Health Tips</li>
            <li className=' cursor-pointer'>Self Care</li>
            <li className=' cursor-pointer'>Get in touch</li>
          </ul>
          <Link
            to='/auth/signup'
            className=' bg-las-palmas-400 rounded-md px-8 py-2 text-shark-950'>
            Sign up
          </Link>
        </div>
        {navOpen && (
          <div
            className={` gap-8 items-center fixed inset-0 w-full h-full ${
              isDarkmode ? 'bg-shark-950' : 'bg-australian-mint-50'
            } flex justify-center flex-col`}>
            <button
              className=' absolute top-3 right-3'
              onClick={() => setNavOpen(false)}>
              <IoCloseCircleOutline size={30} />
            </button>
            <ul className=' flex items-center gap-6 flex-col'>
              <li className=' cursor-pointer'>Health Tips</li>
              <li className=' cursor-pointer'>Self Care</li>
              <li className=' cursor-pointer'>Get in touch</li>
            </ul>
            <Link
              to='/auth/signup'
              className=' bg-las-palmas-400 rounded-md px-8 py-2 text-shark-950'>
              Sign up
            </Link>
          </div>
        )}

        <button className=' hidden md:block' onClick={() => setNavOpen(true)}>
          <HiOutlineMenuAlt3 />
        </button>
      </div>
    </div>
  )
}

export default Navbar
