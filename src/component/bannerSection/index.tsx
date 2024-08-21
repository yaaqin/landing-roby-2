import LiveComponent from '../liveLabel'
import { PauseIcon, PlayPauseIcon, SoundIcon } from '../icon';

export default function BannerSection() {
  return (
    <div className='relative mt-[15px] rounded-[12px] overflow-hidden'>
    <img src='./assets/banner.png' alt='banner' className='w-full h-auto' />
    <div className='absolute bottom-0 left-0 right-0 flex justify-between px-[30px] py-[5px] z-50'>
      <div className='flex gap-[35px] items-center'>
        <PauseIcon />
        <PlayPauseIcon />
        <SoundIcon />
      </div>
      <LiveComponent />
    </div>
    <div className='absolute bottom-0 left-0 right-0 bg-[#fff] opacity-[44%] h-[38px] z-40'></div>
  </div>

  )
}
