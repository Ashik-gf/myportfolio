import React, { useState } from "react";
import { motion } from "framer-motion";
import photos from "../../../public/image/photos.png";
import ProgressBar from "./Html";

const ProjectViews = () => {
  return (
    <div>
      {/* <h1 className=' font-genos text-3xl p-2'>Personal Skill</h1> */}

      <div className="  h-full w-full flex justify-between">
        <div className="1st w-1/4 ">
          <div className=" my-10 h-[4px] w-[200px] bg-green-500"></div>
        </div>
        <div className="2nd w-2/4 ">
          <motion.div
            initial={{ opacity: 0.02 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            transition={{ duration: 1 }}
            className=" my-4"
          >
            <h1 className=" text-5xl font-genos font-extrabold">
              {" "}
              Personal Skills
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.02 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            transition={{ duration: 1 }}
            className=" w-[370px]"
          >
            <p className=" text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              rutrum leo tellus, eget blandit urna consequat sit amet. Aenean
              tincidunt lacus eget purus dictum, congue imperdiet neque
              eleifend.{" "}
            </p>
          </motion.div>

          <ProgressBar />

          <motion.div
            initial={{ opacity: 0.02 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            transition={{ duration: 1 }}
            className=" my-1  "
          >
            {/* Html Progress Bar */}
            <div className=" my-2">
              <h1 className=" text-xl font-genos">Tailwind CSS</h1>
              <div>
                <div className=" my-1 h-2 md:w-[300px] w-[150px] rounded-lg bg-gray-500 ">
                  <div className="h-2 w-6/12 rounded-lg bg-green-500 relative animate-progress">
                    <div className=" text-end absolute -top-[34px] flex justify-end items-end w-full">
                      <p className=" bg-slate-500 p-1 rounded-l-lg rounded-t-lg ">
                        60%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className=" my-1  ">
            {/* Java Progress Bar */}
            <motion.div
              initial={{ opacity: 0.02 }}
              whileInView={{ opacity: 1, scale: 0.9 }}
              transition={{ duration: 1 }}
              className=" my-1"
            >
              <h1 className=" text-xl font-genos">JavaScript</h1>
              <div>
                <div className=" my-1 h-2 md:w-[300px] w-[150px] rounded-lg bg-gray-500 ">
                  <div className="h-2 w-9/12 rounded-lg bg-green-500 relative animate-progress">
                    <div className=" text-end absolute -top-[34px] flex justify-end items-end w-full">
                      <p className=" bg-slate-500 p-1 rounded-l-lg rounded-t-lg ">
                        76%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className=" my-1  ">
              {/* React Progress Bar */}
              <motion.div
                initial={{ opacity: 0.02 }}
                whileInView={{ opacity: 1, scale: 0.9 }}
                transition={{ duration: 1 }}
                className=" my-2"
              >
                <h1 className=" text-xl font-genos">React Js</h1>
                <div>
                  <div className=" my-1 h-2 md:w-[300px] w-[150px] rounded-lg bg-gray-500 ">
                    <div className="h-2 w-9/12 rounded-lg bg-green-500 relative animate-progress">
                      <div className=" text-end absolute -top-[34px] flex justify-end items-end w-full">
                        <p className=" bg-slate-500 p-1 rounded-l-lg rounded-t-lg ">
                          76%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className=" my-1  ">
              {/* Html Progress Bar */}
              <motion.div
                initial={{ opacity: 0.02 }}
                whileInView={{ opacity: 1, scale: 0.9 }}
                transition={{ duration: 1 }}
                className=" my-1"
              >
                <h1 className=" text-xl font-genos">MongoDB</h1>
                <div>
                  <div className=" my-1 h-2 md:w-[300px] w-[150px] rounded-lg bg-gray-500 ">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="h-2 w-9/12 rounded-lg bg-green-500 relative animate-progress"
                    >
                      <div className=" text-end absolute -top-[34px] flex justify-end items-end w-full">
                        <p className=" bg-slate-500 p-1 rounded-l-lg rounded-t-lg ">
                          46%
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="img w-1/4 my-8">
          <motion.div
            initial={{ opacity: 0.3, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className=" relative h-[300px] w-full bg-green-500"
          >
            <div className=" absolute top-8 -left-10 h-[300px] w-[290px] bg-white">
              <img className="h-[290px] mx-auto" src={photos}></img>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectViews;
