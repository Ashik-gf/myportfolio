import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
const navBar =[
    {barname:"Home", pathName:'/'},
    {barname:"Contact", pathName:'/contact'},
    {barname:"About", pathName:'/about'},
    {barname:"Project", pathName:'/project'}
]
const Navbar = () => {
  return (
    <div className=' flex justify-between items-center md:h-[60px]'>
    <div className="icon">
        <h1 className=' font-genos text-3xl'> <span className='font-genos text-4xl'>A</span>shi<span className='font-genos text-4xl text-white'>K</span></h1>
        
        </div>
    <div className="navber flex justify-center gap-4 items-center">
        {
            navBar.map((bar, index)=>(<NavLink key={index} to={bar.pathName}
            className={` font-genos text-2xl`}
            >
                {bar.barname}
            </NavLink>))
        }
    </div>
    <div className="login flex justify-end items-center gap-2 ">
<Link to={'/'}><p className=' text-xl text- hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full focus:animate-spin'><MdAlternateEmail /></p></Link>
<Link to={'/'}><p className=' text-xl text- hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full focus:animate-spin'><FaGithub /></p></Link>
<Link to={'/'}><p className=' text-xl text- hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full focus:animate-spin'><IoPhonePortraitOutline /></p></Link>
<Link to={'/'}><p className=' text-xl text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full focus:animate-spin'><FaLinkedinIn /></p></Link>
    </div>
    </div>
  )
}

export default Navbar