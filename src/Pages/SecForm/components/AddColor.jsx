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
    <div className='float-right'>
      <ChromePicker color={color} onChange={handleChange} />
      <div className=' mt-auto'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-4 px-10 rounded-full" onClick={()=>setStep(step+1)}>Next Step</button>
      </div>
    </div>
  )
}

export default AddColor
