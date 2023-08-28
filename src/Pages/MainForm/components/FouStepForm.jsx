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
    if((userData.message && userData.date && userData.time) !== ''){
      setStep(step+1)
    }else{
      alert("Please fill all fileds")
    }

  }
  return (
    <div className=' bg-transWhite mx-auto rounded-xl md:p-10 sm:p-10 p-5 lg:w-4/5 md:w-3/4 sm:w-4/5 w-11/12'>
      <div className='container bg-white rounded-xl p-6'>
        <h2 className=' text-2xl font-bold'>Cuéntanos algunos detalles de tu boda!</h2>
        <p className='pb-6'>¿Cómo os llamáis? (Podrás cambiar las fuentes, tamaño y colores más adelante)</p>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." value={userData.message} onChange={(e)=>setUserData({...userData, message: e.target.value})} />

        <p className='my-3 text-xl'>Fecha y hora del evento</p>
        <div className=' mt-5 flex'>
          <div>
            <label className='font-bold text-xl pb-3'>Fecha:</label>
            <br />
            <input
              type="date"
              id="date"
              name="date"
              value={userData.date}
              onChange={(e)=>setUserData({...userData, date: e.target.value})}
              className=" mt-2 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className=' ml-4'>
          <label className='font-bold text-xl ml-6'>Hara:</label>
            <br />
            <input
              type="time"
              value={userData.time}
              onChange={(e)=>setUserData({...userData, time: e.target.value})}
              className="custom-time-input focus:outline-none mt-4 ml-5"
            />
          </div>

        </div>
        <p className='text-lg my-3 text-gray-500'>(Se podrán modificar los datos después)</p>
      </div>
      <div className='flex justify-between mt-8'>
        <button className="bg-white text-const font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10" onClick={previousStep}>Previous Step</button>
        <button className='bg-lightGreen text-white font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10' onClick={nextStep}>Next Step</button>
      </div>
  </div>
  )
}

export default FouStepForm
