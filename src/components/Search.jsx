import backGraphics from "../img/backgraphics.png";
import d1 from "../img/d1.png";
import d2 from "../img/d2.png";
import d3 from "../img/d3.png";
import d4 from "../img/d4.png";
import searchImg from '../img/search.png'
import Path from '../img/Path318.png'
import MusicPlayer from './MusicPlayer'
// function Search() {
//   return (
//     <div className="search relative h-[60rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-5rem] z-[-2] flex items-center justify-between rounded-b-[5rem]">
//       {/* Left Side */}
//       <div className="left flex-1 z-[1]">
//         <img
//           src={backGraphics}
//           alt=""
//           className="absolute top-[8rem] left-[-47rem]"
//         />
//         <img
//           src={d1}
//           alt=""
//           className="absolute top-[16rem] w-[16rem]"
//         />
//         <img
//           src={d2}
//           alt=""
//           className="absolute top-[22.7rem] w-[9rem] left-[7rem]"
//         />
//         <img
//           src={d3}
//           alt=""
//           className="absolute top-[23rem] left-[17rem] w-[9rem]"
//         />
//         <img
//           src={d4}
//           alt=""
//           className="absolute w-[17rem] top-[40rem] left-[2rem]"
//         />
//       </div>
//       {/* Right Side */}
//       <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[1rem] z-[2]">
//             <div className="searchbar flex justify-start w-[100%]">
//                 <input type="text"
//                 placeholder="Enter the keyword the URL" 
//                 className="flex-[19] outline-none bg-[#020917] rounded-xl p-3  h-[3rem]"/>
//                 {/* Search icon */}
//                 <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#f3071d] to-[#e600ff] p-4 h-[3rem]">
//                  <img src={searchImg} 
//                  alt=""
//                  className="w-[1.5rem]" />
//                 </div>
//             </div>
//             {/* Tild Icon */}
//             <div className="tild flex justify-start mt-7 items-center w-[100%]">
//               <img src={Path}
//                alt=""
//                className="w-[5rem]" />
//             </div>
//             {/* Paragraph */}
//             <div className="detail flex flex-col mt-5 text-4xl">
//               <span>Search Music by</span>
//               <span>
//                 <b>Name or Direct URL</b>
//               </span>
//               <span className="text-sm mt-3 text-[#4d586a]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Nulla nostrum vel iure <br /> inventore reprehenderit labore.
//               </span>
//             </div>
//             {/* Music Player */}
//             <MusicPlayer />
//       </div>
//     </div>
//   );
// }

// export default Search;


import { React, useState } from "react";
// import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className="search relative h-[60rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[-2] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={backGraphics}
          alt=""
          className="absolute top-[12rem] left-[-47rem] z-[-2]"
        />
        <motion.img
          src={d1}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />{" "}
        <motion.img
          src={d2}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
        />{" "}
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={d3}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={d4}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* Search */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* SearchIcon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={searchImg}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={Path}
            alt=""
            className="w-[5rem]"
          />
        </div>

        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        {/* Music Player */}
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default Search;