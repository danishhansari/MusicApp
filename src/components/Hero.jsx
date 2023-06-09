import DownloadAds from "./DownloadAds";
import backGraphics from "../img/backgraphics.png";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
const Hero = () => {
  return (
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

        <img
          src={p1}
          alt=""
          className="absolute top-[-15rem] h-[34rem] left-[13rem]"
        />

        <img
          src={p2}
          alt=""
          className="absolute top-[235rem] left-[94px] w-[175px]"
        />

        <img src={p3}
         alt=""
         className='absolute w-[5rem] left-[13rem] top-[12rem]' />

        <img src={p4}
         alt=""
         className='absolute w-[5rem] left-[12.5rem] top-[12rem]' />
      </div>
    </div>
  );
};

export default Hero;
