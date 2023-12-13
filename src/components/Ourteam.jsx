import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Ourteam = () => {

    const [persons,setPersons]=useState([])

    const getPersons = async () =>{
        const response = await axios.get('http://localhost:8000/api/')
        setPersons(response.data)
    }

    useEffect(()=>{
        getPersons();
    },[])


  return (
    <div id='ourteam'>
        <div className=' w-full  pb-[100px] bg-[#ef7278] '>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ef7278" fill-opacity="1" d="M0,256L60,266.7C120,277,240,299,360,293.3C480,288,600,256,720,240C840,224,960,224,1080,229.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
            <div >
                <div className='w-full pl-10 pt-[50px]'>
                    <h1 className='text-white font-bold md:text-[70px] text-[40px] '>Our Team </h1>
                </div>

                <div className='grid ml-[100px]  mt-[30px] md:grid-cols-2  lg:grid-cols-4'>

                        {
                            persons.map((person)=>(
                                
                                <div class="w-[250px] max-w-sm bg-white rounded-lg hover:shadow  hover:shadow-black h-[350px] flex justify-center items-center mt-10 mb-5">
                                    <div class="flex flex-col items-center pb-10 p-10">
                                        <img class="object-cover w-28 h-28 mb-3 rounded-full  " src={person.image} alt="Bonnie image"/>
                                        <h5 class="mb-1 text-xl font-medium text-black">{person.name}</h5>
                                        <span class="text-sm text-black">Blood Group : {person.bloodgroup}</span>
                                        <div class="flex mt-4 md:mt-6">
                                            <Link to={`person/${person.id}`} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ef7278] rounded-lg hover:bg-[#b93f45] ">More Details</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                        

                        <div class="w-[250px] max-w-sm bg-white rounded-lg shadow  h-[350px] flex justify-center items-center mt-10 mb-5">
                            <div class="flex flex-col items-center pb-10 p-10">
                                {/* <img class="w-24 h-24 mb-3 rounded-full shadow-lg " src="src/assets/images/blood-type.png" alt="Bonnie image"/> */}
                                {/* <h5 class="mb-1 text-xl font-medium text-black">View More</h5>
                                <span class="text-sm text-black">Blood Group : A+</span> */}
                                <div class="flex mt-4 md:mt-6">
                                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ef7278] rounded-lg hover:bg-[#b93f45] ">View More</a>
                                </div>
                            </div>
                        </div>
                        

                        



                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Ourteam
