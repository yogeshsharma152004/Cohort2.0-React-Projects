import React from 'react'
import { useState } from 'react'
import Card from './components/card';

const App = () => {

  const [userName, setUserName] = useState('');
  const [userImage,setUserImage] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userDesc, setUserDesc] = useState('');

  const localData = JSON.parse(localStorage.getItem('all-users')) || []

  const [allUsers, setAllUsers] = useState(localData);

  const submitHandler= (e) => {
    e.preventDefault()
   
    const oldUsers = [...allUsers]

    oldUsers.push({userName,userImage,userRole,userDesc})

    setAllUsers(oldUsers)

   localStorage.setItem('all-users', JSON.stringify(oldUsers))

    setUserName('');
    setUserImage('');
    setUserRole('');
    setUserDesc('');

    
  }
 
  const deletHandler = (index) => {
      const copyUsers = [...allUsers]

      copyUsers.splice(index,1)

      setAllUsers(copyUsers)
      localStorage.setItem('all-users', JSON.stringify(copyUsers))
  }

  return (

    

    <div className='h-screen bg-black text-amber-50  '>
      <form onSubmit={(e) => {
          submitHandler(e)
      }} 
      className='text-2xl font-semibold flex justify-center flex-wrap '
      >
        <input  
        value={userName}
        required
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
        className='border-2 px-10 py-4 rounded w-[48%] m-3'
        type="text"
        placeholder='Enter Name'
        />

        <input  
        value={userImage}
        required
        onChange={(e)=>{
          setUserImage(e.target.value)
        }}
        className='border-2 px-10 py-4 rounded w-[48%] m-3' 
        type="text" 
        placeholder='Enter ImageURL'
        />

        <input 
        value={userRole}
        required
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
         className='border-2 px-10 py-4 rounded w-[48%] m-3'
         type="text" 
         placeholder='Enter Role'
         />

        <input 
        value={userDesc}
        required
        onChange={(e)=>{
          setUserDesc(e.target.value)
        }} 
        className='border-2 px-10 py-4 rounded w-[48%] m-3'
        type="text" 
        placeholder='Enter Description'
        />


         <button className='bg-emerald-300 px-8 py-3 text-2xl text-black font-semibold rounded border-none m-3 active:scale-95'>Create User</button>
      </form>


    <div className='flex flex-wrap'>
         { allUsers.map((elem , index) => {
         
        return <Card index={index} elem={elem} deletHandler={deletHandler}/>
  
      })}
    </div>
      
    

     
    </div>
  )
}

export default App

