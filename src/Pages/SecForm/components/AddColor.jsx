import React, { useState } from 'react'
import { ChromePicker } from 'react-color';

const AddColor = ({setStep, setSecUserData, secUserData, step}) => {

  const [color, setColor] = useState({ r: 255, g: 0, b: 0, a: 1 })

  const handleChange = (newColor) => {
    setColor(newColor.rgb);
    console.log(newColor.rgb)
    setSecUserData({...secUserData, color: newColor.rgb})
    localStorage.setItem('secUserData', JSON.stringify(secUserData))
  }


  return (
    <div className='w-full'>
      <ChromePicker color={color} onChange={handleChange} className=' w-full' />
      <div className=' mt-auto'>
      <button className="mt-10 bg-lightGreen text-white font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10" onClick={()=>setStep(step+1)}>Next Step</button>
      </div>
    </div>
  )
}

export default AddColor
