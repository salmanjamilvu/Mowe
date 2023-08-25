import React from 'react'
import IMG from '../../../assets/Images/CarouselImage.png'
import IMG2 from '../../../assets/Images/CarouselImage1.jpg'
import IMG3 from '../../../assets/Images/CarouselImage2.jpg'
import IMG4 from '../../../assets/Images/CarouselImage3.jpg'

const AddBorder = ({setStep, setSecUserData, secUserData, step}) => {
  const handleClick = e => {
    setSecUserData({...secUserData, border: e.target.src})
    localStorage.setItem('secUserData', JSON.stringify(secUserData));
}
return (
<>
    <h2 className=' text-center text-3xl'>Add Border</h2>
    <div className='overflow-y-scroll h-4/6 bg-white rounded-xl p-5'>
        <img src={IMG} alt="" className='object-contain h-auto rounded-lg' onClick={handleClick} />
        <img src={IMG2} alt="" className='object-contain	h-auto rounded-lg mt-3' onClick={handleClick} />
        <img src={IMG3} alt="" className='object-contain	h-auto rounded-lg mt-3' onClick={handleClick} />
        <img src={IMG4} alt="" className='object-contain	h-auto rounded-lg mt-3' onClick={handleClick} />
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-4 px-10 rounded-full" onClick={()=>setStep(step+1)}>Next Step</button>
</>
)
}

export default AddBorder
