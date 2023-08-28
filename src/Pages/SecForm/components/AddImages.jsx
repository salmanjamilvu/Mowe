import React from 'react'
import IMG from '../../../assets/Images/CarouselImage.png'
import IMG2 from '../../../assets/Images/CarouselImage1.jpg'
import IMG3 from '../../../assets/Images/CarouselImage2.jpg'
import IMG4 from '../../../assets/Images/CarouselImage3.jpg'

const AddImages = ({setStep, setSecUserData, secUserData, step}) => {
    const handleClick = e => {
        setSecUserData({...secUserData, bgImage: e.target.src})
        localStorage.setItem('secUserData', JSON.stringify(secUserData));
    }
  return (
    <>
        <div className='overflow-y-scroll h-[40rem] bg-white rounded-xl p-5'>
            <img src={IMG} alt="" className='object-contain h-auto rounded-lg cursor-pointer' onClick={handleClick} />
            <img src={IMG2} alt="" className='object-contain	h-auto rounded-lg mt-3 cursor-pointer' onClick={handleClick} />
            <img src={IMG3} alt="" className='object-contain	h-auto rounded-lg mt-3 cursor-pointer' onClick={handleClick} />
            <img src={IMG4} alt="" className='object-contain	h-auto rounded-lg mt-3 cursor-pointer' onClick={handleClick} />
        </div>
        
        <button className="mt-10 bg-lightGreen text-white font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10" onClick={()=>setStep(step+1)}>Next Step</button>
        
    </>
  )
}

export default AddImages
