import React from 'react'
import { motion } from 'framer-motion';
import contact from '../../../public/image/contact.png'
const Contact = () => {
  return (
    <div className=' h-full w-11/12 mt-4 flex justify-between'>
       <div className=' w-3/4  mx-5 '>
       <div className=' text-center w-full'>
            <h1 className=' text-3xl font-genos outline-offset-1 '> Contact With Me</h1>
            <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className=" h-[3px] w-1/4 mx-auto my-2 bg-green-500"
        ></motion.div>
        </div>
        {/* Input Tag From */}
        <div>
        <div className=' flex justify-center gap-10'>
        <label className=' flex justify-center my-8'>
            <h1 className=' bg-green-600 text-center text-xl font-genos p-2 rounded-l-lg'>Name</h1>
            <input type='text'
            placeholder=' Your Name'
            className=' w-[200px] h-[45px] bg-slate-300 text-black pl-4 outline-2 placeholder:text-black rounded-r-lg'></input>
        </label>
        <label className=' flex justify-center my-8'>
            <h1 className=' bg-green-600 text-center text-xl font-genos p-2 rounded-l-lg'>Email</h1>
            <input type='email'
            placeholder=' Your Email'
            className=' w-[200px] h-[45px] rounded-r-lg outline-none shadow-inner text-black pl-4 placeholder:text-black bg-slate-300'></input>
        </label>
        </div>
        <div className=' flex justify-center gap-10'>
        <label className=' flex justify-center my-8'>
            <h1 className=' bg-green-600 text-center text-xl font-genos p-2 rounded-l-lg'>Phone</h1>
            <input type='text'
            placeholder='Phone Number'
            className=' w-[200px] h-[45px] bg-slate-300 text-black pl-4 outline-2 placeholder:text-black rounded-r-lg'></input>
        </label>
        <label className=' flex justify-center my-8'>
            <h1 className=' bg-green-600 text-center text-xl font-genos p-2 rounded-l-lg'>SMS</h1>
            <input type='text'
            placeholder='Short SMS'
            className=' w-[200px] h-[45px] rounded-r-lg outline-none shadow-inner text-black pl-4 placeholder:text-black bg-slate-300'></input>
        </label>
        </div>
       <div className=' w-full flex justify-center mb-4 mx-auto'><button className=' bg-green-500 p-2 rounded-md w-[100px]'>Submit</button></div>
        </div>
       </div>
       <div className=' w-[250px] h-full flex justify-start mt-4'>
        <img src={contact}
        className=' h-[300px] w-[200px] bg-green-500 p-2'
        ></img>
       </div>
    </div>
  )
}

export default Contact