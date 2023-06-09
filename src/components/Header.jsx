import React from 'react'
import CenterMenu from './CenterMenu'
import MusicLogo from "../img/MuzicLogo.png";
const Header = () => {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232a4e] px-[25px] py[7px]';
  return (
    <div className='header bg-[#081730] flex items-center justify-between px-[5rem] pt-[1.5rem] text-[1.1rem]'>
        <img src={MusicLogo} alt="" className='logo w-[42px] h-[42px]' />
        <CenterMenu />
        <div className="button flex">
            <button className={`mr-[35px] py-1 hover:bg-[#232a4e] `+buttonStyle}>Sign up</button>
            <button className={buttonStyle + ` bg-[#232a4e]`}>Log  in</button>
        </div>
    </div>
  )
}

export default Header