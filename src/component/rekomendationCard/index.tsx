import LiveComponent from "../liveLabel";
interface rekomendation {
    image: string
}

export default function CardRekomendation({
    image
}: rekomendation) {
  return (
    <div className='bg-[#1F2029] rounded-[16px] p-[10px]'>
        <img src={image} className="mx-auto w-[265px]"></img>
      <h4 className='font-semibold text-[14px] my-[8px]'>Wining Clutch Moments with Raze in Valorant</h4>
      <section className='flex justify-between items-center'>
        <div className='flex gap-[6px] items-center'>
            <img className='rounded-full w-[36px] h-[36px]' src='./assets/rekomendationProfile.png'></img>
            <div>
                <h6 className='font-semibold text-[12px]'>Mika</h6>
                <p className='font-normal text-[10px]'>Valorant</p>
            </div>
        </div>
        <div>

        <LiveComponent/>
        </div>
      </section>
    </div>
  )
}
