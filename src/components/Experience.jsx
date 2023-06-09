import imgPath from '../img/Path318.png'
import Group2 from '../img/Group2.png';
import musicIcon from '../img/musicicon.png';
import Group4 from '../img/Group4.png'
import Feature from './Feature';
function Experience() {
  return (
    <div className='experience-section flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[-1] rounded-b-[5rem]'>
        <img src={imgPath} 
        alt=""
        className='w-[5rem]' />
        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life </span>
        <span>
            <b>Music Experience</b>
        </span>
        </div>
        {/* Features Section */}
        <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
            <Feature icon={Group2} title="For Live Music" />
            <Feature icon={musicIcon} title="For Daily Music" />
            <Feature icon={Group4} title="For Artists" />
        </div>
    </div>
  )
}

export default Experience