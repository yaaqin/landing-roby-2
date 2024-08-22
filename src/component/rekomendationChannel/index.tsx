import React, { useState } from 'react'
import CardChannel from './section/cardChannel'
import { Channel } from '../data'

export default function RecomendationChannel() {
  const [indexActive, setIndexActive] = useState<number | null>(null); 
  return (
    <div className='bg-[#1F2029] p-[20px] rounded-[12px] mt-[25px]'>
      <h6 className='font-extrabold text-[20px]'>Recomendation Channel</h6>
      <div className='flex flex-wrap gap-x-[30px] gap-y-[30px] mt-[30px]'>
        {Channel.map((item, index) => (
          <section key={index} onClick={() => setIndexActive(index)}>
          <CardChannel
            isActive={indexActive === index} 
            image={'https://i.pinimg.com/474x/46/51/fe/4651feff0ccd56050dcbcee60813118a.jpg'}
            name={item.name}
            nick={item.nickname}
            followers={item.followers}
          />
          </section>
        ))}
      </div>
    </div>
  )
}
