import axios from 'axios'
import React, { useState } from 'react'

import { Link,useNavigate } from 'react-router-dom'

const Join = () => {

  const [image,setImage]=useState(null)
  const [name,setName]=useState()
  const [age,setAge]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()
  const [bloodgroup,setBloodgroup]=useState()
  const [place,setPlace]=useState()

  
  const navigate= useNavigate()
  
  

  const AddPerson = async () =>{

    let formField = new FormData()

    formField.append('name',name)
    formField.append('age',age)
    formField.append('email',email)
    formField.append('phone',phone)
    formField.append('place',place)
    formField.append('bloodgroup',bloodgroup)

    if (image !== null){
      formField.append('image',image) 
    }

    await axios({
      method:'post',
      url:'http://127.0.0.1:8000/api/',
      data:formField
    }).then((response)=>{
      console.log(response.data);
      navigate('/')
    })

  }





  return (
    <div className='flex  justify-center items-center md:h-screen bg-[#ef7278]'>
 
    <form class="md:w-full md:max-w-lg bg-white p-10  rounded-lg relative">
      
      <Link to={'/'} className='absolute top-0 right-0 m-3 bg-[#ef7278] hover:bg-[#9b3a3f] w-[30px] h-[30px] text-white flex justify-center items-center font-extrabold rounded-md'>X</Link>
      
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-password">
            Upload Your Image
          </label>
          <input class="appearance-none block w-full bg-white text-black border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="file" placeholder="" name='image' src={image} onChange={(e)=> setImage(e.target.files[0])}/>
          <p class="text-gray-600 text-xs italic"></p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-first-name">
            Name
          </label>
          <input class="appearance-none block w-full bg-white text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" name='name' value={name} onChange={(e)=> setName(e.target.value)} />
          <p class="text-red-500 text-xs italic"></p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-last-name">
            Age
          </label>
          <input class="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="" name='age' value={age} onChange={(e)=> setAge(e.target.value)}/>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-password">
            Email
          </label>
          <input class="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="" name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <p class="text-gray-600 text-xs italic"></p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-city">
            Phone
          </label>
          <input class="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" name='phone' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-state">
            Blood Group
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"  value={bloodgroup}  onChange={(e)=> setBloodgroup(e.target.value)}>
              <option value=''>---</option>
              <option value='A+'>A+</option>
              <option value='B+'>B+</option>
              <option value='AB+'>AB+</option>
              <option value='O+'>O+</option>
              <option value='A-'>A-</option>
              <option value='B-'>B-</option>
              <option value='AB-'>AB-</option>
              <option value='O-'>O-</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-zip">
            Place
          </label>
          <input class="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="" name='place' value={place} onChange={(e)=> setPlace(e.target.value)}/>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 pt-10">
          <input class="cursor-pointer  appearance-none block w-full bg-green-500  placeholder:text-black placeholder:font-bold  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none   text-center" id="grid-password" type="sumbit"  placeholder="Join" onClick={AddPerson}/>
          
        </div>
      </div>
    </form>
      
    </div>
  )
}

export default Join
