interface card {
    isActive: boolean;
    image: string;
    name: string;
    nick: string;
    followers: number
}
export default function CardChannel({
    isActive,
    image,
    name,
    nick,
    followers
}: card) {
  return (
    <div className={`w-[179px] duration-300 cursor-pointer h-[50px] rounded-[8px] px-[10px] py-[5px] flex justify-between items-center ${isActive ? 'bg-custom-gradient': ''}`}>
      <div className='flex gap-[6px] items-center'>
        <img src={image} className='h-[32px] w-[32px] rounded-full' alt='profile'></img>
        <div>
            <h6 className={`text-[12px] ${isActive ? 'font-semibold':'font-normal'}`}>{name.substring(0, 7)}</h6>
            <p className={`text-[12px] font-semibold ${isActive ? 'text-[#fff]':'text-[#4D4D4D]'}`}>{nick}</p>
        </div>
      </div>
      <h6 className={isActive ? 'font-semibold text-[#000] text-[12px]':'font-semibold text-[#7E56F0] text-[12px]'}>{followers}K Fow</h6>
    </div>
  )
}
