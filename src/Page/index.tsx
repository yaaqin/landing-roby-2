import React from 'react'
import { BellIcon, HeartIcon, HomeIcon, MainIcon, SecondIcon, SendIcon, SettingIcon, TimeIcon, TvIcon, UserIcon } from '../component/icon'
import { PeopleData } from '../component/data'
import CardRekomendation from '../component/rekomendationCard'
import RecomendationChannel from '../component/rekomendationChannel'
import About from '../component/about'
import ProfileSection from '../component/profileSection'
import BannerSection from '../component/bannerSection'

export default function Main() {
    return (
        <div className='bg-[#17181F] text-[#fff]'>
            <main className='max-w-[1425px] flex mx-auto'>
                <menu className='flex flex-col py-[32px] px-[40px]'>
                    <MainIcon />
                    <section className='mt-[50px] flex flex-col items-center gap-[50px]'>
                        <HomeIcon/>
                        <SecondIcon/>
                        <TimeIcon/>
                        <HeartIcon/>
                        <TvIcon/>
                        <BellIcon/>
                        <SettingIcon/>
                        <UserIcon/>
                    </section>
                </menu>
                <div className='flex-1 bg-[#2B2D38] rounded-[25px] overflow-hidden my-[15px] flex'>
                    <div className='w-[293px] bg-[#1F2029] h-full px-[25px] py-[20px]'>
                        <h3 className='text-[20px] font-extrabold'>Live Chat</h3>
                        <div className='mt-[20px] flex flex-col gap-[15px]'>
                            {PeopleData.map((item, index)=>(
                                <section key={index} className='flex gap-[15px] items-center'>
                                    <img className='w-[42px] h-[42px] rounded-full object-cover' src='https://i.pinimg.com/236x/4d/b1/a0/4db1a0c0aee2a153ebb1ee28bd39b642.jpg'></img>
                                    <div>
                                        <h3 className='text-[14px] font-bold'>{item.name}</h3>
                                        <p className='text-[10px] font-normal'>{item.quote}</p>
                                    </div>
                                </section>
                            ))}
                        </div>
                        <aside className='py-[20px] flex gap-[10px] items-center'>
                            <input className='flex-1 bg-[#3E4153] rounded-[8px] px-[10px] py-[8px] text-[12px] text-grey font-medium' placeholder='Typing Smothing'></input>
                            <SendIcon/>
                        </aside>
                    </div>
                    <div className='flex gap-[19px]'>
                        <div className='w-[660px] my-[20px] ml-[20px]'>
                            <input className='w-full rounded-[12px] bg-[#3E4153] opacity-[34%] px-[30px] py-[12px] text-[15px] text-gray font-medium' placeholder='Search'></input>
                            <BannerSection/>
                            <h2 className='texxt-[20px] font-semibold mt-[15px]'>Call of Duty : Wining Clutch Moments with Raze</h2>
                            <ProfileSection/>
                            <About/>
                            <RecomendationChannel/>
                        </div>
                        <div className='my-[20px] pr-[20px]'>
                            <h2 className='text-[20px] font-extrabold'>Recomendation for you</h2>
                            <div className='mt-[20px] flex flex-col gap-[15px]'>
                                {["./assets/valo1.png","./assets/valo2.png","./assets/valo3.png"].map((item)=>(
                                    <CardRekomendation image={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
