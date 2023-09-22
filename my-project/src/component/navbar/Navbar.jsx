import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="nav  bg-blue-900 shadow-md ">
        <div className="container h-20 m-auto flex justify-between items-center">
          <div className="right flex space-x-4 items-center">
            <img className='h-14 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_T1Sssd8cgRubFB4zayMsazaCCsrWKa6y7g&usqp=CAU" alt="" />
            <h1 className='text-white text-3xl font-bold'>D-knus</h1>
          </div>
          <div className="left">
            <ul className='flex space-x-5 text-white text-xl font-semibold'>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/signup'}><li>Signup</li></Link>
            <Link to={'/login'}><li>Login</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
