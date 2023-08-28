import React from 'react'

const ComingSoon = ({setStep, step}) => {

    const image = localStorage.getItem('userImage')
    const {date, time} = JSON.parse(localStorage.getItem('userData'))

    const startDate = new Date(`${date}T${time}`);
    const endDate = new Date(); 
    const timeDifference = startDate - endDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


    const previousStep = () =>{
        setStep(step-1)
      }
      const nextStep = () =>{
        setStep(step+1)
      }
  return (
    <div className=' bg-transWhite mx-auto rounded-xl md:p-10 sm:p-10 p-5 lg:w-4/5 md:w-3/4 sm:w-4/5 w-11/12'>
        <div className='container bg-white rounded-xl p-6'>
            <div className='grid grid-cols-8 gap-5'>
                <div className='xl:col-span-5 lg:col-span-4 md:col-span-8 sm:col-span-8 col-span-8'>
                  <div className='w-full'>
                    <img src={image} alt="" className='rounded-xl w-full' />
                  </div>
                </div>
                <div className='xl:col-span-3 lg:col-span-4 md:col-span-8 sm:col-span-8 col-span-8 relative'>
                    <h2 className=' font-bold text-4xl '>solo faltan ...</h2>
                    <div className='flex mt-8'>
                      <div className='border-r border-gray-500 text-gray-500 px-5'>
                        <p>{days}</p>
                        <p>days</p>
                      </div>
                      <div className='border-r border-gray-500 text-gray-500 px-5'>
                        <p>{hours}</p>
                        <p>hours</p>
                      </div>
                      <div className=' border-r border-gray-500 text-gray-500 px-5'>
                        <p>{minutes}</p>
                        <p>minutes</p>
                      </div>
                      <div className='text-gray-500 px-3'>
                        <p>{seconds}</p>
                        <p>seconds</p>
                      </div>
                    </div>
                    <div className='lg:absolute lg:bottom-0 lg:left-0 md:relative'>
                      <h2 className='text-4xl sm:mt-10 mt-10'>iGuarda la fecha!</h2>
                    </div>
                </div>
            </div>

        </div>
        <div className='flex justify-between mt-4'>
          <button className="bg-white text-const font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10" onClick={previousStep}>Previous Step</button>
          <button className='bg-lightGreen text-white font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10' onClick={nextStep}>Next Step</button>
      </div>
    </div>
  )
}

export default ComingSoon
