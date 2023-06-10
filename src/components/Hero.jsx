import { useState } from "react";
import DownloadAds from "./DownloadAds";
import backGraphics from "../img/backgraphics.png";
import { motion } from 'framer-motion'
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import VisibilitySensor from 'react-visibility-sensor'
const Hero = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  }
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };
  return (
    <VisibilitySensor
    onChange={(isVisible)=> setElementIsVisible(isVisible)} minTopValue={300}>
    <div className="wrapper flex bg-[#081730] justify-between items-center px-[5rem] rounded-b-[5rem] w-[100%] h-[40rem] relative">
      {/* Left Side */}
      <div className="headings flex flex-col items-start justify-center h-[100%] text-[3.5rem]">
        <span>Experience The</span>{" "}
        <span>
          <b>Best Quality Music</b>
        </span>
        <span className="text-[18px] text-[#525d6e]">
          Listen to one of the best music
          <br />
          Enjoy unlimited music on this App
        </span>
        {/* Download Ads */}
        <div>
          <div className="text-[17px] my-5">
            Download now on IOS and Android
          </div>
          <DownloadAds />
        </div>
      </div>
      {/* Right Side */}
      <div className="images relative w-[50%]">
        <img
          src={backGraphics}
          alt=""
          className="absolute top-[-8rem] left-[19rem]"
        />

        <motion.img
        variants={bg}
        animate={`${elementIsVisible}`}
          transition={{ duration: 1, type:"ease-out"}}
          src={p1}
          alt=""
          className="absolute top-[-15rem] h-[34rem] left-[13rem]"
        />

        <motion.img
        variants={musicPlayer}
        animate={`${elementIsVisible}`}
        transition={{
          duration:1,
          type: "ease-out"
        }}
          src={p2}
          alt=""
          className="absolute top-[235rem] left-[94px] w-[175px]"
        />

        <motion.img
        variants={rect}
        animate={`${elementIsVisible}`}
        transition={{
          type:'ease-out',
          duration: 1,
        }}
        src={p3}
         alt=""
         className='absolute w-[5rem] left-[13rem] top-[12rem]' />

        <motion.img
        variants={heart}
        animate={`${elementIsVisible}`}
        transition={{
          type:'ease-out',
          duration: 1,
        }} 
        src={p4}
         alt=""
         className='absolute w-[5rem] left-[12.5rem] top-[12rem]' />
      </div>
    </div>
    </VisibilitySensor>
  );
};

export default Hero;
