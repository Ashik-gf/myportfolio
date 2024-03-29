import htmlImg from '../../../public/image/html5-2.svg'
import cssImg from '../../../public/image/css-3 (1).svg'
import { motion } from "framer-motion";
import tailwind from '../../../public/image/tailwind-css-2.svg'
import javascript from '../../../public/image/logo-javascript.svg'
import react from '../../../public/image/react-2 (1).svg'
import mongoDB from '../../../public/image/mongodb-icon-2.svg'
const Timeline = () => {

  return (
    <div className=' my-4'>
        {/* 1 */}
        <div className=' flex justify-center gap-4'>
        < motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.4}}

        className=' h-[350px] w-[300px] border-2 border-[#0E5C63] text-end p-2 rounded-md'>
            
            <img className=' h-[100px] w-[100px] flex mx-auto p-2 m-4 ' src={cssImg} alt="" />
            <p className=' text-justify
            '>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Reprehenderit culpa molestias corrupti, 
                 laboriosam consequuntur iure exercitationem ad odit fuga, 
                 molestiae optio temporibus illo debitis sint aspernatur amet 
                 magnam quo reiciendis?</p>
        </motion.div> 
        <motion.div
        initial={{ opacity:0}}
        whileInView={{ opacity:1, scale:1}}
        transition={{duration:0.1}}
        className=' h-[530px] w-[2px] bg-white'></motion.div>
        < motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.4}}

        className=' my-24 h-[350px] w-[300px] border-2 border-[#0E5C63] text-end p-2 rounded-md'>
            
            <img className=' h-[100px] w-[100px] flex mx-auto p-2 m-4 ' src={htmlImg} alt="" />
            <p className=' text-justify
            '>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Reprehenderit culpa molestias corrupti, 
                 laboriosam consequuntur iure exercitationem ad odit fuga, 
                 molestiae optio temporibus illo debitis sint aspernatur amet 
                 magnam quo reiciendis?</p>
        </motion.div> 
        </div>
        <div className=' h-[50px] w-[50px] -my-3  rounded-full border-2 mx-auto flex items-center justify-center text-2xl'> 1st </div>
        {/* 1st end */}
        <div className=' flex justify-center gap-4'>
        < motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.4}}

        className=' my-4 h-[350px] w-[300px] border-2 border-[#0E5C63] text-end p-2 rounded-md'>
            
            <img className=' h-[100px] w-[100px] flex mx-auto p-2 m-4 ' src={tailwind} alt="" />
            <p className=' text-justify
            '>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Reprehenderit culpa molestias corrupti, 
                 laboriosam consequuntur iure exercitationem ad odit fuga, 
                 molestiae optio temporibus illo debitis sint aspernatur amet 
                 magnam quo reiciendis?</p>
        </motion.div> 
        <div className=' h-[490px] my-3 w-[2px] bg-white'></div>
        < motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.4}}

        className=' my-20 h-[350px] w-[300px] border-2 border-[#0E5C63] text-end p-2 rounded-md'>
            
            <img className=' h-[100px] w-[100px] flex mx-auto p-2 m-4 ' src={javascript} alt="" />
            <p className=' text-justify
            '>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Reprehenderit culpa molestias corrupti, 
                 laboriosam consequuntur iure exercitationem ad odit fuga, 
                 molestiae optio temporibus illo debitis sint aspernatur amet 
                 magnam quo reiciendis?</p>
        </motion.div> 
        </div>
        {/* 2st end */}
        <div className=' h-[50px] w-[50px] -my-3  rounded-full border-2 mx-auto flex items-center justify-center text-2xl'> 2st </div>
        <div className=' flex justify-center gap-4'>
        < motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.4}}

        className=' my-4 h-[350px] w-[300px] border-2 border-[#0E5C63] text-end p-2 rounded-md'>
            
            <img className=' h-[100px] w-[100px] flex mx-auto p-2 m-4 ' src={react} alt="" />
            <p className=' text-justify
            '>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Reprehenderit culpa molestias corrupti, 
                 laboriosam consequuntur iure exercitationem ad odit fuga, 
                 molestiae optio temporibus illo debitis sint aspernatur amet 
                 magnam quo reiciendis?</p>
        </motion.div> 
        <div className=' h-[300px] my-3 w-[2px] bg-white'></div>
        < motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.4}}

        className=' my-20 h-[350px] w-[300px] border-2 border-[#0E5C63] text-end p-2 rounded-md'>
            
            <img className=' h-[100px] w-[100px] flex mx-auto p-2 m-4 ' src={mongoDB} alt="" />
            <p className=' text-justify
            '>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Reprehenderit culpa molestias corrupti, 
                 laboriosam consequuntur iure exercitationem ad odit fuga, 
                 molestiae optio temporibus illo debitis sint aspernatur amet 
                 magnam quo reiciendis?</p>
        </motion.div> 
        </div>
        
    </div>
  )
}

export default Timeline