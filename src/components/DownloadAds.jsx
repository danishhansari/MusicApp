import AppStore from '../img/AppStore.png';
import GooglePlay from '../img/GooglePlay.png';
function DownloadAds() {
    const downloadImgStyle = "border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem]"
  return (
    <div className='download'>
        <div className="download_images flex">
            <img src={AppStore} alt="AppStore"
            className={downloadImgStyle + ` mr-[.5rem]`} />
            <img src={GooglePlay} alt="google Play"
            className={downloadImgStyle} />
        </div>
    </div>
  )
}

export default DownloadAds