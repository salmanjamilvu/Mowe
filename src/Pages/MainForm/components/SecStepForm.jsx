import React, { useState } from 'react'
import IMG from '../../../assets/Images/CarouselImage.png'
import IMG2 from '../../../assets/Images/CarouselImage1.jpg'
import IMG3 from '../../../assets/Images/CarouselImage2.jpg'
import IMG4 from '../../../assets/Images/CarouselImage3.jpg'


function SecStepForm({setStep, step}) {
  const [image, setImag] = useState(IMG)
  const handleClick = e => {
    setImag(e.target.src)
    localStorage.setItem('userImage', e.target.src);
  };
  const nextStep = () =>{
    setStep(step+1)
  }
  return (
    <div className=' bg-transWhite mx-auto rounded-xl md:p-10 sm:p-10 p-5 lg:w-4/5 md:w-3/4 sm:w-4/5 w-11/12'>
      <p className='text-lg pb-6'>firstly, let’s make it epic! choose the intro for your invitation:</p>
        <div className='container bg-white rounded-xl rounded-full p-4'>
          <div className='grid grid-cols-6 md:gap-2 sm:gap-4 gap-4'>
            <div className='md:col-span-2 sm:col-span-6 col-span-6'>
              <div className='overflow-y-scroll h-96'>
                <img src={IMG} alt="" className='object-contain	h-auto rounded-lg cursor-pointer' onClick={handleClick} />
                <img src={IMG2} alt="" className='object-contain	h-auto rounded-lg mt-3 cursor-pointer' onClick={handleClick} />
                <img src={IMG3} alt="" className='object-contain	h-auto rounded-lg mt-3 cursor-pointer' onClick={handleClick} />
                <img src={IMG4} alt="" className='object-contain	h-auto rounded-lg mt-3 cursor-pointer' onClick={handleClick} />

              </div>
            </div>
            <div className='md:col-span-4 sm:col-span-6 col-span-6'>
              <div className='w-full'>
                <img src={image} alt="" className='object-cover w-full rounded-lg h-96'/>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-end'>
          <button className='bg-lightGreen text-white font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10' onClick={nextStep}>Next Step</button>
        </div>
    </div>
  )
}

export default SecStepForm
