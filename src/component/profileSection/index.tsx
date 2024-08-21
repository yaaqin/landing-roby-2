import React from 'react'

export default function ProfileSection() {
  return (
    <div className='flex justify-between mt-[15px]'>
        <div className='flex gap-[6px] items-center'>
            <img className='rounded-full w-[32px] h-[32px]' src='https://i.pinimg.com/236x/0a/d8/1b/0ad81befee13144633cab74d4ddccac8.jpg'></img>
            <div>
                <h6 className='text-[12px] font-normal'>James Corner</h6>
                <p className='text-[10px] font-normal text-[#4D4D4D]'>James Corner</p>
            </div>
        </div>
        <button className='bg-[#7E56F0] px-[20px] py-[8px] rounded-[8px] text-[14px] font-normal'>Subscribe</button>
    </div>
  )
}
