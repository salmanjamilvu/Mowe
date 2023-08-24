import React, { useState } from 'react'

const FouStepForm = ({setStep, step}) => {
  const [userData, setUserData] = useState({
    message: '',
    date: '',
    time: ''
  })

  localStorage.setItem('userData', JSON.stringify(userData));

  const previousStep = () =>{
    setStep(step-1)
  }
  const nextStep = () =>{
    setStep(step+1)
  }
  return (
    <div className=' bg-teal-50 p-8 w-3/5 mx-auto rounded-xl'>
      <div className='container bg-white rounded-xl h-96 rounded-full'>
        <p className='text-lg pb-3'>firstly, let’s make it epic! choose the intro for your invitation:</p>
        <p className='text-lg pb-3'>firstly, let’s make it epic! choose the intro for your invitation:</p>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." value={userData.message} onChange={(e)=>setUserData({...userData, message: e.target.value})} />

        <p className='text-lg my-3 text-gray-500'>firstly, let’s make it epic! choose the intro for your invitation:</p>
        <div className=' mt-5 flex'>
          <input
            type="date"
            id="date"
            name="date"
            value={userData.date}
            onChange={(e)=>setUserData({...userData, date: e.target.value})}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />

          <input
            type="time"
            id="time"
            name="time"
            value={userData.time}
            onChange={(e)=>setUserData({...userData, time: e.target.value})}
            className="custom-time-input focus:outline-none focus:border-blue-500 ml-5"
          />

        </div>
        <p className='text-lg my-3 text-gray-500'>firstly, let’s make it epic! choose the intro for your invitation:</p>
      </div>
      <div className='mt-4'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-full" onClick={previousStep}>Previous Step</button>
        <button className='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-full' onClick={nextStep}>Next Step</button>
      </div>
  </div>
  )
}

export default FouStepForm
