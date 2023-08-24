import React from 'react'

const ComingSoon = ({setStep, step}) => {

    const image = localStorage.getItem('userImage')
    const {date, time} = JSON.parse(localStorage.getItem('userData'))

    const startDate = new Date(`${date}T${time}`);
    const endDate = new Date(); 
    const timeDifference = endDate - startDate;

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
    <div className=' bg-teal-50 p-8 w-3/5 mx-auto rounded-xl'>
        <div className='container bg-white rounded-xl justify-center flex flex-col'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='p-4'>
                    <img src={image} alt="" className=' rounded-xl w-full ' />
                </div>
                <div className='mt-8'>
                    <h2 className=' font-bold text-6xl text-center'>Coming Soon</h2>
                    <h3 className=' font-bold text-2xl text-center mt-32'>{`${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`}</h3>
                </div>
                
            </div>
        </div>
        <div className='mt-4'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full" onClick={previousStep}>Previous Step</button>
          <button className='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full' onClick={nextStep}>Next Step</button>
        </div>
    </div>
  )
}

export default ComingSoon
