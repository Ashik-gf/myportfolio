import React, { useRef } from 'react'
import photos from '../../../public/image/ashik.png'
import { motion } from "framer-motion"
const Banner = () => {
  const scrollRef = useRef(null)
  return (
    <div>
        <div className=' h-[80vh] w-full grid grid-cols-3 grid-rows-3 gap-[6px] '>
        <div className=" shadow-sm bg-opacity-5 shadow-green-300  rounded-lg col-span-2">
          <div className=' w-1/4 mx-auto'>
            <h1 className=' font-genos text-[130px] font-bold'>Hello!</h1>
            </div>  
        </div>
        {/* 2 */}
        <div className="div relative h-[50vh] shadow-sm bg-opacity-5 rounded-md">
          <div className=' my-12 animate-spin flex justify-center items-center w-[250px] h-[250px] shadow-xl   mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          </div>
          <div className=' absolute top-[52px] right-[70px]'>
          <img className='h-[240px] w-[240px] bg-[#04373c] bg-opacity-70 rounded-full' src={photos} />
          </div>
          <div className=' text-center my-8 font-salsa font-bold'>
            <h1 className=' text-2xl'>Md: Ashik Hasan</h1>
            <p className=' text-2xl'>Front-End Web Developer</p>
          </div>
        </div>
        {/* 3 */}
        <div ref={scrollRef} style={{ overflow: "scroll" }} className="div3 h-[50vh] shadow-sm shadow-green-300 bg-[#0E5C6] rounded-md col-span-2">
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}

        className=' my-12  h-full w-full text-center '>
       <h1 className=' font-genos text-4xl text-amber-200'>I'm Front-End Web Developer</h1>
    <p className=' mx-10 text-justify'> Hello there! 👋 I'm Ashik Hasan, a passionate front-end developer specializing in React.js, with strong expertise in the full stack. I'm here to help you bring your web development projects to life.

.I doing Some of Project included.
      I'm Fresher Designer. I have Explore ReactJs,NextJs. NodeJS Mongodb, Firebase and Doing Some project. I explore
      FramAnimaton, ASO, Emplement In Project.
    </p>
        </motion.div>
        </div>
        <div className="div h-[50vh] shadow-sm bg-[#0E5C63] bg-transparent shadow-green-300  rounded-md">
          
        </div>
        </div>
    </div>
  )
}

export default Banner