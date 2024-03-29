import React from "react";
import { motion } from "framer-motion";

import Slider from "./Swiper";

const MyProject = () => {
  return (
    <div className=" my-20 h-full">
      <div className=" flex justify-between items-center">
        <div className=" w-[10px]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="  text-3xl justify-end">My Best Works</h1>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className=" h-[3px] w-2/4 bg-green-500"
        ></motion.div>
      </div>
      {/* text design Div */}
      <div className=" flex justify-between">
        {/* left Side Design */}
     
        <div className=" ml-20">
        <div className=" font-genos font-thin leading-3  ">
            <div className=" my-4">
                <h1 className=" text-green-500 font-genos text-3xl font-bold">Hotel Management System</h1>
            </div>
            {/* text design */}
            <div className=" w-[300px]">
                <p className=" text-xl text-justify">
                    Hotle MAnagemnt System, I use Some of Most Effective Motion.
                    This site have a most imortant things is Annimation Use in this site..
                    Most Important UseFull Effect is that AOS, Framer Motion
                </p>
            </div>
        </div>
         <div className="">
        <div className=" font-genos font-thin leading-3 ">
            <div className=" my-4">
                <h1 className=" text-green-500 font-genos text-3xl font-bold">Donation Management</h1>
            </div>
            {/* text design */}
            <div className=" w-[300px]">
                <p className=" text-xl text-justify">
                    Hotle MAnagemnt System, I use Some of Most Effective Motion.
                    This site have a most imortant things is Annimation Use in this site..
                    Most Important UseFull Effect is that AOS, Framer Motion
                </p>
            </div>
        </div>
        <p className=" text-center text-green-400"><a href={'#'}>See More......</a></p>
        </div>
        </div>
       
        {/* Slider Bar */}
        <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 1 }}
        className=" w-2/4 flex justify-center items-center photos ">
            <div>
                <Slider />
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyProject;
