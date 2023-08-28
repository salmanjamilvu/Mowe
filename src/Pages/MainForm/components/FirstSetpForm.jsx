import React from 'react'
import HandIcon from "../../../assets/Svgs/Hand.svg"

const FirstSetpForm = ({setStep, step}) => {
    const setChange = ()=>{

        setStep(step+1)
    }
  return (
    <div className=' bg-transWhite p-5 mx-auto rounded-xl md:p-20 sm:p-10 lg:w-4/5 md:w-3/4 sm:w-4/5 w-11/12'>
        <div className='container bg-white rounded-xl justify-center flex flex-col md:py-20 sm:p-10 p-10'>
            <div className='text-center'>
                <div className='flex justify-center mb-8'>
                    <img src={HandIcon} alt="" />
                </div>
                <h2 className=' text-2xl font-bold'>Welcome to your wedding invitation designer!</h2>
                <p className=' text-2xl mt-4'>if you’re ready, let’s design the perfect invitation for the Big Day!</p>
                <button className="bg-lightGreen text-white font-bold rounded-full mt-6 lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10" onClick={setChange}>Start</button>
            </div>
        </div>
    </div>
  )
}

export default FirstSetpForm
