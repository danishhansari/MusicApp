import MaskGroup from '../img/MaskGroup23.png';
import path from '../img/path.png';
function MusicPlayer() {
  return (
    <div className='musicPlayer flex flex-col px-5 w-[100%] border-2 border-black py-3 bg-[#232a4e] rounded-xl mt-5'>
        {/* Upper Part */}
        <div className="upperPart flex items-center justify-between">
        <div className="profile flex">
            <img src={MaskGroup}
            alt=""
            className='w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full' />
            <div className="details flex flex-col ml-4">
                <span className="text-[1rem]">Tristam Bone Dry</span>
                <span className="text-sm text-gray-500">Unknown Artist</span>
            </div>
        </div>
        <img src={path}  alt="" className='h-[1rem]' />
        </div>
        <div className="lowerPart"></div>
    </div>
  )
}

export default MusicPlayer