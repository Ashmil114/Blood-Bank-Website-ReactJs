import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
const MoreDetails = () => {

    const [person,setPerson]=useState('')
    const { id } = useParams();

    

    const getPerson = async () =>{
        const response = await axios.get(`http://localhost:8000/api/${id}`)
        setPerson(response.data)
        console.log(response.data);
    }

    useEffect(()=>{
        getPerson();
    },[])

  return (
    <div className='bg-[#ef7278] h-screen flex items-center justify-center flex-col '>
      
      <div className='flex justify-center items-center w-full'>
        
        <div  className="flex flex-col items-center bg-white border-[20px] border-white rounded-lg shadow md:flex-row md:max-w-[60%] md:h-[300px] relative">
            <Link to={'/'} className='absolute top-0 right-0  bg-[#ef7278] hover:bg-[#9b3a3f] w-[30px] h-[30px] text-white flex justify-center items-center font-extrabold rounded-md'>X</Link>
            <img className="object-cover w-full rounded-lg  md:h-full md:w-[200px] md:rounded-lg md:rounded-s-lg" src={person.image} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal w-[300px]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{person.name}</h5>
                <p className="mb-3 font-normal text-gray-700">Age : {person.age} </p>
                <p className="mb-3 font-normal text-gray-700">Email : {person.email} </p>
                <p className="mb-3 font-normal text-gray-700">Phone : {person.phone} </p>
                <p className="mb-3 font-normal text-gray-700">Place : {person.place} </p>
                <p className="mb-3 font-normal text-gray-700">Blood Group : {person.bloodgroup} </p>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default MoreDetails
