import React from 'react'

const Goal = () => {
  return (
    <div id='goals'>
      <div className='w-full pl-10 '><h1 className='text-[#ef7278] font-bold md:text-[70px] text-[40px] '>GOALS</h1></div>
        <div className='md:flex md:flex-row grid justify-center items-center md:justify-around pt-[50px] font-bold text-center' >
          <div className='flex flex-col justify-center items-center hover:border-b-4 hover:border-b-[#ef7278] border-4 border-white '>
              <img className='' src="src/assets/images/donation.png" alt="" width='100px'/>
              <h3 className='p-10'>Donate Blood</h3>
          </div>
          <div className='flex flex-col justify-center items-center hover:border-b-4 hover:border-b-[#ef7278] border-4 border-white'>
              <img src="src/assets/images/receive.png" alt="" width='100px'/>
              <h3 className='p-10'>Receive Blood</h3>
          </div>
          <div className='flex flex-col justify-center items-center hover:border-b-4 hover:border-b-[#ef7278] border-4 border-white'>
              <img src="src/assets/images/track.png" alt="" width='100px'/>
              <h3 className='p-10'>Track Donors</h3>
          </div>
          <div className='flex flex-col justify-center items-center hover:border-b-4 hover:border-b-[#ef7278] border-4 border-white'>
              <img src="src/assets/images/life.png" alt="" width='100px'/>
              <h3 className='p-10'>Save LIfes</h3>
          </div>
        </div>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#ef7278" fill-opacity="1" d="M0,256L60,266.7C120,277,240,299,360,293.3C480,288,600,256,720,240C840,224,960,224,1080,229.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  )
}

export default Goal
