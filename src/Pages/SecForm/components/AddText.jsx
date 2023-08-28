import React, { useState } from 'react'

const AddText = ({setStep, setSecUserData, secUserData, step}) => {
  
  const [message, setMEssage] = useState('')
  
  const handleChangeValue = (e) =>{
    setMEssage(e.target.value)
    setSecUserData({...secUserData, text: e.target.value})
    localStorage.setItem('secUserData', JSON.stringify(secUserData));
  }

  return (
    <div className=''>
      <textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." value={message} onChange={handleChangeValue}></textarea>
      <button className="mt-10 bg-lightGreen text-white font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10" onClick={()=>setStep(step+1)}>Next Step</button>
    </div>
  )
}

export default AddText
