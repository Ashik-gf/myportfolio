import React from "react";
import { motion } from "framer-motion";
// import photos1 from '../../../../public'
const HappyClient = () => {
  return (
    <div>
        {/* Header Option */}
      <div className=" flex justify-between items-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className=" h-[3px] w-2/4 bg-green-500"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" flex justify-center w-1/2"
        >
          <h1 className="  justify-center font-genos text-3xl">Happy Client Says</h1>
        </motion.div>
      </div>
      {/* Containt Box */}
    <div className=" h-full mt-8 p-4 flex justify-center gap-12 items-center">
    <div className=" relative right_side border-2 rounded-md border-green-500 h-[250px] w-[400px]">
        <div className=" flex items-center absolute -top-4 left-60 h-8 w-16 rounded-full bg-white shadow-lg">
            <img className=" h-6 mx-auto" src={'https://i.ibb.co/Tkj6j5R/image-removebg-preview-6.png'}></img>
          </div>
          <div className=" flex justify-center gap-4">
            <div className=" h-[240px] imageSection w-1/2 flex items-center justify-center">
              <img className=" h-44 w-32 rounded-full " src={'https://i.ibb.co/xCnZHQG/image.png'}></img>
            </div>
            <div className="commentsSection w-1/2 h-[240px] flex justify-center items-center p-2">
              <h1>You are doing Best Work.im happy with Your Work i have been doing.
                Your Code is so Pretter.. Your Delevery was on time. I hope we Work again in others project
              </h1>
            </div>
          </div>
        </div>
        {/* Client Section  */}
        <div className=" relative right_side border-2 rounded-md border-green-500 h-[250px] w-[400px]">
        <div className=" flex items-center absolute -top-4 left-60 h-8 w-16 rounded-full bg-white shadow-lg">
            <img className=" h-6 mx-auto" src={'https://i.ibb.co/Tkj6j5R/image-removebg-preview-6.png'}></img>
          </div>
          <div className=" flex justify-center gap-4">
            <div className=" h-[240px] imageSection w-1/2 flex items-center justify-center">
              <img className=" h-44 w-32 rounded-full " src={'https://i.ibb.co/4f8VNQ9/image.png'}></img>
            </div>
            <div className="commentsSection w-1/2 h-[240px] flex justify-center items-center p-2">
              <h1>You are doing Best Work.im happy with Your Work i have been doing.
                Your Code is so Pretter.. Your Delevery was on time. I hope we Work again in others project
              </h1>
            </div>
          </div>
        </div>
    </div>

    </div>
  );
};

export default HappyClient;
