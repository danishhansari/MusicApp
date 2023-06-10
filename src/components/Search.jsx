import backGraphics from "../img/backgraphics.png";
import d1 from "../img/d1.png";
import d2 from "../img/d2.png";
import d3 from "../img/d3.png";
import d4 from "../img/d4.png";
import searchImg from '../img/search.png'
import Path from '../img/Path318.png'
import MusicPlayer from './MusicPlayer'
function Search() {
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-5rem] z-[-2] flex items-center justify-between rounded-b-[5rem]">
      {/* Left Side */}
      <div className="left flex-1 z-[1]">
        <img
          src={backGraphics}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <img
          src={d1}
          alt=""
          className="absolute top-[26rem] w-[16rem]"
        />
        <img
          src={d2}
          alt=""
          className="absolute top-[32.7rem] w-[9rem] left-[7rem]"
        />
        <img
          src={d3}
          alt=""
          className="absolute top-[33rem] left-[17rem] w-[9rem]"
        />
        <img
          src={d4}
          alt=""
          className="absolute w-[17rem] top-[50rem] left-[2rem]"
        />
      </div>
      {/* Right Side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] z-[2]">
            <div className="searchbar flex justify-start w-[100%]">
                <input type="text"
                placeholder="Enter the keyword the URL" 
                className="flex-[19] outline-none bg-[#020917] rounded-xl p-3  h-[3rem]"/>
                {/* Search icon */}
                <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#f3071d] to-[#e600ff] p-4 h-[3rem]">
                 <img src={searchImg} 
                 alt=""
                 className="w-[1.5rem]" />
                </div>
            </div>
            {/* Tild Icon */}
            <div className="tild flex justify-start mt-7 items-center w-[100%]">
              <img src={Path}
               alt=""
               className="w-[5rem]" />
            </div>
            {/* Paragraph */}
            <div className="detail flex flex-col mt-5 text-4xl">
              <span>Search Music by</span>
              <span>
                <b>Name or Direct URL</b>
              </span>
              <span className="text-sm mt-3 text-[#4d586a]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Nulla nostrum vel iure <br /> inventore reprehenderit labore.
              </span>
            </div>
            {/* Music Player */}
            <MusicPlayer />
      </div>
    </div>
  );
}

export default Search;
