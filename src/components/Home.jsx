import React from 'react'

const Home = () => {
  return (
    <>
      <div className="w-full h-[80vh]">
        <div className='flex w-full h-3/5 bg-[#ef7278] '>
            <div className='flex w-1/2 p-10 flex-col justify-center '>
                <div className='z-10'><h1 className='text-white font-bold md:text-[70px] text-[30px] md:pt-[150px] '>SOCIAL BLOOD BANK</h1></div>
                <div className=' z-10'><p className='text-[15px] text-white text-justify'>A blood donation website that finds the donor and allow user to send shout out for blood to all users with required blood group</p></div>
            </div>
            <div className='flex justify-center items-center w-1/2'>
                <div className='z-10 md:pt-[150px]'>
                    <img src="src/assets/images/blood-type.png" alt="" />
                </div>
            </div>   
        </div>
        <div className='z-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ef7278" fill-opacity="1" d="M0,160L80,160C160,160,320,160,480,176C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>   
        </div>
      </div>
      
    </>
  )
}

export default Home
